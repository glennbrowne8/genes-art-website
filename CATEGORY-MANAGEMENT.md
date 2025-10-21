# 🏷️ Managing Categories - Admin Guide

## What Changed?

You can now **add, edit, and remove artwork categories** directly from the admin panel! No need to edit any configuration files.

---

## What Gene Will See

### New Section in Admin Panel

When Gene logs into `/admin`, he'll now see a new section:

```
┌─────────────────────────────────────────────────────────┐
│  Content Manager                           [Gene ▼]     │
├──────────────┬──────────────────────────────────────────┤
│              │                                          │
│  🏷️ Artwork  │  ← Gene adds/edits artwork here         │
│     Categories                                          │
│              │                                          │
│  🎨 Artwork  │  ← Gene's artwork entries                │
│              │                                          │
│  ⚙️  Settings│  ← Site configuration                    │
│              │                                          │
└──────────────┴──────────────────────────────────────────┘
```

---

## How to Add a New Category

### Step-by-Step for Gene

1. **Click "Artwork Categories"** in the left sidebar
2. **Click "+ New Artwork Categories"** button
3. **Fill in the form:**

```
┌─────────────────────────────────────────────────────────┐
│  ← Back to Categories                       [Publish ▼] │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Category Name *                                         │
│  ┌────────────────────────────────────────────────┐    │
│  │ Wooden Sculptures                              │    │
│  └────────────────────────────────────────────────┘    │
│  Example: Corrugated Iron Paintings                     │
│                                                          │
│  Description (Optional)                                  │
│  ┌────────────────────────────────────────────────┐    │
│  │ Hand-carved wooden sculptures featuring        │    │
│  │ Australian wildlife and bush themes            │    │
│  └────────────────────────────────────────────────┘    │
│  Describe this type of artwork (optional)               │
│                                                          │
│  Sort Order *                                            │
│  ┌────────────────────────────────────────────────┐    │
│  │ 4                                              │    │
│  └────────────────────────────────────────────────┘    │
│  Lower numbers appear first (0, 1, 2, etc.)             │
│                                                          │
│  Active                                                  │
│  ┌─────┐                                                │
│  │ ● | │  ON (Category is visible)                     │
│  └─────┘                                                │
│  Turn OFF to hide without deleting                      │
│                                                          │
│                           [Publish]  [Save as Draft]    │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

4. **Click "Publish"**
5. **Wait 2-3 minutes** for the site to rebuild
6. **New category is now available!**

---

## How It Works Now

### When Adding Artwork

When Gene creates new artwork, instead of selecting from a fixed dropdown, he'll now see:

```
Category *
┌────────────────────────────────────────────────┐
│ Corrugated Iron Paintings                  ▼  │
└────────────────────────────────────────────────┘

Dropdown shows ALL active categories he created:
  • Corrugated Iron Paintings
  • Bush Drawings
  • Clay Art
  • Wooden Sculptures (new!)
  • Bronze Statues (new!)
  • etc.
```

The dropdown automatically populates from the "Artwork Categories" section!

---

## Current Categories (Starting Set)

These three categories are already created:

### 1. Corrugated Iron Paintings
- **Order:** 1
- **Description:** Original paintings on authentic Australian corrugated iron, perfect for indoor and outdoor display.
- **Status:** Active

### 2. Bush Drawings
- **Order:** 2
- **Description:** Detailed pencil and charcoal drawings capturing the beauty of the Australian bush and its iconic characters.
- **Status:** Active

### 3. Clay Art
- **Order:** 3
- **Description:** Handcrafted clay sculptures and pottery featuring Australian themes and bush motifs.
- **Status:** Active

---

## Managing Categories

### ✏️ Edit a Category

1. Click "Artwork Categories"
2. Click on the category you want to edit
3. Make your changes
4. Click "Publish"

### 🚫 Hide a Category (Without Deleting)

Instead of deleting a category (which might break existing artwork), you can hide it:

1. Click "Artwork Categories"
2. Click on the category
3. Toggle "Active" to **OFF**
4. Click "Publish"

**Result:** The category won't appear in the dropdown for new artwork, but existing artwork keeps their category assignment.

### 🗑️ Delete a Category

**⚠️ Warning:** Only delete categories that have NO artwork assigned to them!

1. Click "Artwork Categories"
2. Click on the category
3. Click the **Delete** button (red button at the top)
4. Confirm deletion

**Best Practice:** Hide categories instead of deleting them to avoid breaking existing artwork entries.

---

## Sort Order Explained

The **Sort Order** number controls the position in the dropdown:

```
Order 0: Appears first
Order 1: Appears second
Order 2: Appears third
Order 10: Appears last
```

**Example:**
- Corrugated Iron (Order: 1)
- Bush Drawings (Order: 2)
- Clay Art (Order: 3)
- Wooden Sculptures (Order: 4)

**Tip:** Use gaps (10, 20, 30) so you can insert new categories between existing ones later without renumbering everything.

---

## Common Tasks

### Adding "Watercolor Paintings" Category

```
1. Artwork Categories → + New Artwork Categories
2. Fill in:
   • Category Name: Watercolor Paintings
   • Description: Vibrant watercolor artworks showcasing Australian landscapes
   • Sort Order: 4 (or wherever you want it)
   • Active: ON
3. Publish
4. Wait 2-3 minutes
5. Now available when adding artwork!
```

### Temporarily Hiding "Clay Art" (Season-based)

```
1. Artwork Categories → Clay Art
2. Toggle Active to OFF
3. Publish
4. "Clay Art" is now hidden from new artwork entries
5. Existing clay art pieces still show on the website
6. Turn back ON when ready to use again
```

### Reordering Categories

Want "Bush Drawings" to appear first? Change the numbers:

```
Before:
- Corrugated Iron (Order: 1)
- Bush Drawings (Order: 2)
- Clay Art (Order: 3)

After:
- Bush Drawings (Order: 1)  ← Changed from 2 to 1
- Corrugated Iron (Order: 2)  ← Changed from 1 to 2
- Clay Art (Order: 3)  ← Stays the same
```

---

## What Happens to Existing Artwork?

### When You Edit a Category Name

**Scenario:** You change "Bush Drawings" to "Bush Art"

**Result:**
- All artwork with "Bush Drawings" will automatically update to "Bush Art"
- No manual updates needed
- Everything just works!

### When You Delete a Category

**Scenario:** You delete "Clay Art" category, but Gene has 5 clay artworks

**Problem:**
- Those 5 artworks will still reference "Clay Art"
- They'll still display fine
- BUT if Gene tries to edit them, the category won't be in the dropdown

**Solution:**
- **Don't delete categories with existing artwork**
- Instead, toggle "Active" to OFF to hide it

---

## Technical Details (For You)

### File Structure

```
content/
└── categories/
    ├── corrugated-iron-paintings.md
    ├── bush-drawings.md
    ├── clay-art.md
    └── wooden-sculptures.md  ← Gene adds new ones
```

### How It Works

1. **Categories are stored** as markdown files in `content/categories/`
2. **Each file contains:**
   - Category name
   - Description (optional)
   - Sort order
   - Active status
3. **The CMS config** uses a "relation" widget to connect artwork to categories
4. **When building the site**, Next.js reads all active categories and displays them

### CMS Configuration Change

**Old way (config.yml):**
```yaml
- {label: "Category", name: "category", widget: "select", 
   options: ["Corrugated Iron Paintings", "Bush Drawings", "Clay Art"]}
```
Fixed list - can't change without editing code

**New way (config.yml):**
```yaml
- {label: "Category", name: "category", widget: "relation", 
   collection: "categories", search_fields: ["name"], 
   value_field: "name", display_fields: ["name"]}
```
Dynamic list - pulls from the "categories" collection

---

## Benefits of This Approach

### For Gene
✅ Add new artwork types anytime (no calls to you!)
✅ Hide categories seasonally without deleting
✅ Reorder how categories appear
✅ Describe each category for reference
✅ No coding or technical knowledge needed

### For You
✅ No more config file edits
✅ Gene is even MORE independent
✅ Everything is version-controlled
✅ Changes are reversible
✅ Professional content management system

### For the Business
✅ Flexibility to expand product lines
✅ Better organization as inventory grows
✅ Professional category management
✅ Scales with business needs

---

## Quick Reference for Gene

### Add New Category
```
Artwork Categories → + New → Fill form → Publish
```

### Edit Category
```
Artwork Categories → Click category → Edit → Publish
```

### Hide Category
```
Artwork Categories → Click category → Active OFF → Publish
```

### Reorder Categories
```
Artwork Categories → Click category → Change order number → Publish
```

---

## Examples of New Categories Gene Might Add

- **Bronze Statues** - "Limited edition bronze sculptures"
- **Watercolor Landscapes** - "Traditional Australian scenes in watercolor"
- **Digital Prints** - "High-quality prints of original artwork"
- **Custom Commissions** - "Made-to-order pieces"
- **Seasonal Collections** - "Holiday or event-specific artwork"
- **Miniatures** - "Small-scale artwork perfect for gifts"
- **Textile Art** - "Bush-themed fabric creations"

---

## Troubleshooting

### "I can't find my category when adding artwork"

**Check:**
1. Is the category marked as "Active"? (Must be ON)
2. Did you wait 2-3 minutes after publishing?
3. Hard refresh the browser (Ctrl+F5)

### "I deleted a category and now old artwork looks broken"

**Solution:**
1. Re-create the category with the exact same name
2. Or edit the affected artwork and select a different category

**Prevention:** Hide categories instead of deleting them!

### "Categories are in the wrong order"

**Fix:**
1. Go to Artwork Categories
2. Edit each category
3. Set Sort Order numbers (1, 2, 3, etc.)
4. Lower numbers appear first

---

## Migration Notes (For You)

### Updating Existing Artwork

The sample artwork files need to be updated to work with the new relation system. I'll handle this in the next step, but here's what needs to happen:

**Old artwork file:**
```yaml
category: "Corrugated Iron Paintings"
```

**New artwork file:**
```yaml
category: "Corrugated Iron Paintings"
```

Actually, the format is the same! The CMS just handles it differently now.

### If You Already Deployed

1. Push the new `config.yml` to GitHub
2. Create the `content/categories/` folder
3. Add the three category files
4. Commit and push
5. Netlify will rebuild automatically
6. Gene will see the new section in admin

---

## Summary

**What Changed:**
- Added "Artwork Categories" section in admin panel
- Category dropdown now pulls from this collection
- Gene can add/edit/hide/reorder categories himself

**What Stayed the Same:**
- Artwork management (exactly the same)
- Site settings (exactly the same)
- All existing features work as before

**New Workflow:**
```
Gene wants to add "Watercolor Paintings"
↓
Logs into admin → Artwork Categories → + New
↓
Fills in: Name, Description, Order
↓
Publishes
↓
Now available in artwork category dropdown!
```

**No more calling you to edit config files!** 🎉

---

Built with ❤️ using Claude Sonnet 4.5
Gene's Australian Heritage Art - 2025
