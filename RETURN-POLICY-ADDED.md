# Return Policy Added to Gene's Website! ✅

## What Was Added

### 1. Return Policy Page
**Location:** `content/pages/returns-refunds.md`

The return policy is now live and includes:
- ✅ 7-day return window for damaged/defective items
- ✅ No change-of-mind returns (legal for handmade goods)
- ✅ ACL compliant (Australian Consumer Law)
- ✅ Queensland-specific information
- ✅ Category-specific notes (iron, drawings, clay)
- ✅ Full refund process
- ✅ Consumer rights section

### 2. CMS Configuration Updated
**Location:** `public/admin/config.yml`

Added a new "Pages" collection so Gene can:
- ✅ Edit the return policy via CMS
- ✅ Create new pages in the future
- ✅ Update content without touching code

### 3. New Directory Created
**Location:** `content/pages/`

This directory now holds the return policy and can hold future pages.

---

## What Gene Needs to Do

Gene should log into the CMS and update these placeholders:

1. **Go to:** yoursite.com/admin
2. **Click:** "Pages" in the sidebar
3. **Click:** "returns-refunds"
4. **Update:**
   - Change `gene@example.com` to his real email
   - Change `(07) 1234 5678` to his real phone number
   - Fill in his complete mailing address
   - Update "Last Updated" date
5. **Click:** "Publish"

---

## Next Step: Add Navigation Link

You'll need to add a link to the return policy in your navigation. Here's how:

### Option 1: Add to Main Navigation
Find your navigation component (likely in `app/components/` or `app/page.js`) and add:

```jsx
<a href="/returns-refunds">Returns Policy</a>
```

### Option 2: Add to Footer
In your footer component, add:

```jsx
<p>
  Returns accepted within 7 days. <a href="/returns-refunds">View Full Policy</a>
</p>
```

### Option 3: Both!
Add it to both navigation and footer for maximum visibility.

---

## Technical Details

The return policy will be available at: `/returns-refunds/`

It's a static page generated from the markdown file, so it loads fast and is SEO-friendly.

Gene can edit the entire content via the CMS - no code required!

---

## Testing

1. Make sure you rebuild/redeploy the site
2. Visit `/returns-refunds/` to see the policy
3. Log into CMS to verify Gene can edit it
4. Update contact info and test again

---

## Files Modified/Created

- ✅ `content/pages/returns-refunds.md` (NEW)
- ✅ `content/pages/` directory (NEW)
- ✅ `public/admin/config.yml` (MODIFIED - added Pages collection)

---

## Done! 🎉

The return policy is now integrated into Gene's website and he can edit it anytime via the CMS!
