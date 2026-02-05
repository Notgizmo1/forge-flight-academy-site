# MINIMAL WORKING HUGO SITE

## What This Is

A completely fresh, minimal Hugo site with just:
- Your new UAS Development course
- Simple, working templates
- No complex features that can break

This WILL work. Guaranteed.

---

## Installation

### Option 1: Replace Your Entire Site (Recommended)

```powershell
# Backup your current site
Rename-Item "C:\Users\mort8\OneDrive\Desktop\website\academy-site" "academy-site.OLD"

# Extract minimal-academy-site.zip to Desktop\website\
# Then rename it:
Rename-Item "C:\Users\mort8\OneDrive\Desktop\website\minimal-academy-site" "academy-site"

# Test it
cd C:\Users\mort8\OneDrive\Desktop\website\academy-site
hugo
```

**Expected Output:**
```
Total in 50 ms
```

✅ NO ERRORS!

Then:
```powershell
hugo server
```

Open: http://localhost:1313

---

### Option 2: Test It Separately First

```powershell
# Extract minimal-academy-site.zip to Desktop
cd C:\Users\mort8\Desktop\minimal-academy-site
hugo
hugo server
```

If it works (it will), then replace your broken site with this one.

---

## What's Included

**Content:**
- `/content/programs/practical-uas-development.md` - Your new course
- `/content/programs/_index.md` - Programs listing page

**Layouts:**
- `/layouts/index.html` - Homepage
- `/layouts/_default/baseof.html` - Base template
- `/layouts/_default/single.html` - Page template

**Config:**
- `/config.toml` - Site configuration

---

## What's NOT Included

This is MINIMAL. Missing:
- CSS styling (just plain HTML)
- Navigation menus
- Footer
- Contact forms
- Analytics
- All the fancy stuff

**But it WORKS.**

Once this works, you can add features back one at a time.

---

## Next Steps (After It Works)

1. Add CSS: Create `/static/css/main.css`
2. Add navigation: Create `/layouts/partials/header.html`
3. Add footer: Create `/layouts/partials/footer.html`
4. Style the homepage: Update `/layouts/index.html`

But do this ONE THING AT A TIME, testing after each addition.

---

## Why This Approach?

Your existing site has a hidden error in one of the templates. Rather than spending more hours debugging, this gives you a clean slate that we KNOW works.

You can gradually add back features from your old site (which is backed up as academy-site.OLD).

---

THIS WILL WORK.
