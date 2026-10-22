# Startup script fonts

Web startup loads these same-origin WOFF2 assets through Flutter's public
`FontLoader` before `runApp`. The theme uses them as fallbacks, preserving the
existing Roboto primary font. This prevents Chinese and Thai first-paint glyphs
from depending on a later external fallback-font download. Native platforms keep
their existing font selection.

The three regular-weight subsets total 4,366,884 bytes. The Han supplement covers
characters absent from the Traditional Chinese font, including Simplified Chinese
UI text. Family names are renamed for the derived subsets. Original SIL OFL
licenses, pinned upstream revision, download hashes and output hashes are retained
in this directory. Asset filenames include their content hashes.

Regeneration requires Python, fontTools and Brotli:

```
python scripts/prepare_startup_fonts.py
python scripts/check_startup_font_coverage.py
```

After regeneration, update `lib/core/startup/startup_fonts.dart` to the generated
filenames and remove superseded font assets from this directory. Do not fetch fonts
during a release build. Validate first-paint rendering with external fonts blocked,
delayed startup assets, all supported locales, and the popular-keyword chip width.
