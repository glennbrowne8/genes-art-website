# 🛠️ Developer & Admin Manual

**Project:** Gene's Australian Heritage Art Website
**Tech Stack:** Next.js 15, React 19, Decap CMS (Netlify CMS), Stripe, Netlify Hosting.

---

## 📂 Project Structure

*   `app/`: Main application code (Next.js App Router).
    *   `layout.js`: Global layout (fonts, metadata).
    *   `page.js`: Homepage components.
    *   `globals.css`: Global variables and styles.
*   `content/`: **The Database.** All data is stored here as Markdown/JSON files.
    *   `artwork/`: Individual artwork files.
    *   `settings/`: Site configuration (contact info, shipping rates).
*   `public/admin/config.yml`: **CMS Configuration.** Defines the schema for Decap CMS.
*   `netlify/functions/`: Serverless functions for Stripe backend.

---

## 🚀 Deployment (Netlify)

The site is configured for **Netlify**.

*   **Build Command:** `npm run build`
*   **Publish Directory:** `out`
*   **Netlify Identity:** Must be **Enabled** for the CMS to work.
*   **Git Gateway:** Must be **Enabled** in Netlify Identity settings.

### Environment Variables
You must set these in Netlify Site Settings:

| Variable | Value (Example) | Purpose |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_live_...` | Public key for Stripe Elements. |
| `STRIPE_SECRET_KEY` | `sk_live_...` | Secret key for backend processing. |
| `NEXT_PUBLIC_SITE_URL` | `https://genesart.com` | Used for success/cancel redirects. |

---

## 💳 Stripe Integration

The site uses a "lightweight" Stripe integration without a database.

*   **Logic:** `app/components/CheckoutModal.js` collects data -> Sends to `netlify/functions/create-checkout-session.js`.
*   **Pricing:** Calculated dynamically based on the CMS price + Shipping + Insurance.
*   **Emails:** Sent **directly by Stripe**.
    *   *Customer Receipt:* Enabled in Stripe Dashboard -> Settings -> Customer Emails.
    *   *Seller Notification:* Enabled in Stripe Profile -> Notifications.

**Critical Workflow:**
There is no webhook to update inventory. Gene **manually** marks items as sold in the CMS after receiving the Stripe email.

---

## 🔧 Common Maintenance Tasks

### 1. Adding a New Field to the CMS
1.  Edit `public/admin/config.yml`.
2.  Add the field definition under the correct collection.
3.  **Important:** Update the corresponding JSON file in `content/settings/` with a default value to prevent crash on first load.
4.  Update the React component to read the new field.

### 2. Customizing Styles
*   Edit `app/globals.css`.
*   Use CSS Variables (`--color-primary`) defined at the top of the file for theming.

### 3. Debugging Payments
*   **Test Mode:** Use `pk_test_...` keys locally.
*   **Logs:** Check Netlify Function logs in the Netlify Dashboard if a payment fails.
*   **Stripe Logs:** Check the "Developers" -> "Logs" section in Stripe.

---

## 📜 Legal & Compliance

*   **Privacy Policy:** Located at `app/privacy/page.js`.
*   **Returns Policy:** Located at `app/returns-refunds/page.js`.
*   **404 Page:** `app/not-found.js`.

---

## 🆘 Troubleshooting

**"The CMS won't load"**
*   Check that Netlify Identity is enabled.
*   Check that the user is invited/active in Netlify Identity tab.
*   Ensure you are accessing via the *real* domain, not localhost (authentication often fails on localhost without a proxy).

**"Images aren't showing"**
*   Check that the image exists in `public/images/uploads`.
*   Ensure the path in the Markdown file starts with `/images/uploads/...`.
