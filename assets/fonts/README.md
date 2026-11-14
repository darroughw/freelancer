Static TTF instances of the site's Google Fonts, used only by the Open Graph
image routes (`app/opengraph-image.tsx`, `app/work/[slug]/opengraph-image.tsx`).
next/og (satori) can't load woff2 or variable fonts, so the browser's
Google Fonts stylesheet can't be reused there. All fonts are SIL Open Font
License 1.1 (https://openfontlicense.org), downloaded from fonts.googleapis.com.
