# Startup script fonts

Web startup loads these same-origin WOFF2 assets through Flutter's public
`FontLoader` before `runApp`. The theme uses them as fallbacks, preserving the
existing Roboto primary font. This prevents Chinese and Thai first-paint glyphs
from depending on a later external fallback-font download. Native platforms keep
their existing font selection.

The three script subsets plus the unmodified default Roboto asset total 4,430,348 bytes.
Roboto matches the pinned CanvasKit engine's regular font exactly. It is loaded
locally even when the engine's external default-font request fails. The Han supplement covers
characters absent from the Traditional Chinese font, including Simplified Chinese
UI text. Family names are renamed for the derived subsets. Original SIL OFL and Apache
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
