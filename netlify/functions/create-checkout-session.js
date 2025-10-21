const Stripe = require('stripe')

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-12-18.acacia',
    })

    const {
      artworkId,
      artworkTitle,
      artworkPrice,
      artworkImage,
      shippingOption,
      shippingPrice,
      shippingLabel,
      includeInsurance,
      insurancePrice,
    } = JSON.parse(event.body)

    // Validate required fields
    if (!artworkId || !artworkTitle || !artworkPrice || !shippingOption) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      }
    }

    // Get site URL from environment or use Netlify's URL
    const siteUrl = process.env.URL || 'https://sage-lokum-7bf546.netlify.app'

    // Convert relative image URL to absolute URL for Stripe
    let absoluteImageUrl = null
    if (artworkImage) {
      if (artworkImage.startsWith('http://') || artworkImage.startsWith('https://')) {
        // Already an absolute URL
        absoluteImageUrl = artworkImage
      } else if (artworkImage.startsWith('/')) {
        // Relative URL starting with /
        absoluteImageUrl = `${siteUrl}${artworkImage}`
      } else {
        // Relative URL without leading /
        absoluteImageUrl = `${siteUrl}/${artworkImage}`
      }
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'aud',
            product_data: {
              name: artworkTitle,
              description: `Original Australian artwork by Gene`,
              images: absoluteImageUrl ? [absoluteImageUrl] : [],
              metadata: {
                artworkId: artworkId,
                shippingOption: shippingOption,
              },
            },
            unit_amount: artworkPrice,
          },
          quantity: 1,
        },
        // Add shipping as a line item if not free
        ...(shippingPrice > 0
          ? [
              {
                price_data: {
                  currency: 'aud',
                  product_data: {
                    name: shippingLabel,
                    description: 'Delivery charge',
                  },
                  unit_amount: shippingPrice,
                },
                quantity: 1,
              },
            ]
          : []),
        // Add shipping insurance as a line item if selected
        ...(includeInsurance && insurancePrice > 0
          ? [
              {
                price_data: {
                  currency: 'aud',
                  product_data: {
                    name: '📦 Shipping Insurance',
                    description: `Protects ${artworkTitle} during transit. Covers loss or damage up to full value.`,
                  },
                  unit_amount: insurancePrice,
                },
                quantity: 1,
              },
            ]
          : []),
      ],
      metadata: {
        artworkId: artworkId,
        artworkTitle: artworkTitle,
        shippingOption: shippingOption,
        shippingLabel: shippingLabel,
        includeInsurance: includeInsurance ? 'yes' : 'no',
        insuranceAmount: includeInsurance ? (insurancePrice / 100).toFixed(2) : '0',
      },
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/?canceled=true`,
      billing_address_collection: 'required',
      shipping_address_collection:
        shippingOption === 'pickup'
          ? undefined
          : {
              allowed_countries: ['AU'],
            },
      phone_number_collection: {
        enabled: true,
      },
      customer_email: undefined, // Let customer enter their email
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    }
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Error creating checkout session' }),
    }
  }
}
