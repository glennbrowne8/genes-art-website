# Stripe Email & Notification Setup Guide

This guide explains how to ensure emails are sent to both the **Customer** (Receipt) and **Gene** (New Order Notification) using Stripe's built-in features.

## 🛑 Critical: Test Mode vs. Live Mode
**Stripe does NOT send real emails in Test Mode.**
*   In **Test Mode**, you must view the Stripe Dashboard logs to "see" that an email would have been sent.
*   Real emails will only send when you switch the Stripe toggle to **Live Mode**.

---

## ✅ Checklist 1: Customer Receipts (The "Thank You" Email)

This ensures the customer gets a receipt immediately after paying.

1.  Log in to the **[Stripe Dashboard](https://dashboard.stripe.com/)**.
2.  Toggle the switch at the top right to **Test Mode** (for now) or **Live Mode** (to change real settings).
3.  Go to **Settings (Gear Icon)** (top right) → **Customer emails** (under "Business settings").
4.  **Enable** the following:
    *   ✅ **Email customers about successful payments**
    *   (Optional) **Email customers about refunds**
5.  **Save** your changes.

### How to verify in Test Mode:
1.  Make a test purchase on your site.
2.  Go to **Payments** in the Stripe Dashboard.
3.  Click on the successful payment.
4.  Scroll down to the **Receipt history** or **Timeline** section.
5.  It will say "Receipt sent to [email]" (even though it didn't actually send to your inbox, this confirms the system tried).

---

## ✅ Checklist 2: Seller Notifications (Alerting Gene)

This ensures Gene knows immediately when someone buys art.

1.  Log in to the **[Stripe Dashboard](https://dashboard.stripe.com/)** using **Gene's Account**.
2.  Click on the **Profile Icon** (top right) → **Profile**.
3.  Scroll down to **Email preferences** (or "Communication preferences").
4.  **Enable** the checkbox for:
    *   ✅ **Successful payments** (Receive an email for every successful payment)
5.  **Save** your changes.

---

## ✅ Checklist 3: Branding the Emails

Make the emails look professional and match the website.

1.  Go to **Settings (Gear Icon)** → **Branding**.
2.  **Icon:** Upload the site logo (favicon).
3.  **Logo:** Upload the main logo.
4.  **Brand Color:** Set this to the site's primary brown: `#8B4513`.
5.  **Accent Color:** Set this to the site's accent orange: `#F4A460`.
6.  **Save**.

---

## 🔄 The "Sold" Workflow (Manual Step)

Since the website does not use a complex "Webhook" database system (to keep things simple and free), the site **does not automatically mark items as "Sold"**.

**The Process:**
1.  Customer pays on website.
2.  Stripe sends **Receipt** to Customer.
3.  Stripe sends **Notification** to Gene.
4.  **ACTION REQUIRED:** Gene sees the email, logs into `/admin`, finds the artwork, and toggles **Available** to **OFF**.

*Tip: If Gene receives two orders for the same item before he can mark it sold, he can simply refund the second one via the Stripe Dashboard.*
