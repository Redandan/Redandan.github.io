// Generated verbatim from the original Flutter web/index.html iOS viewport policy.
// Source helper SHA256: 0ac0ccda90f62227b2c33111c943039535b5a7be0f309918368cac5be94bb300
      function nonNegativeFinite(value) {
        const parsed = parseFloat(String(value || 0));
        return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
      }

      function normalizeIOSStandaloneLayoutViewport(
        standalone,
        safeArea,
        layoutViewport,
        screenViewport
      ) {
        safeArea = safeArea || {};
        layoutViewport = layoutViewport || {};
        screenViewport = screenViewport || {};

        let width = nonNegativeFinite(layoutViewport.width);
        let height = nonNegativeFinite(layoutViewport.height);
        let screenWidth = nonNegativeFinite(screenViewport.width);
        let screenHeight = nonNegativeFinite(screenViewport.height);
        if (!standalone || !width || !height || !screenWidth || !screenHeight) {
          return { width: width, height: height };
        }

        // Older iOS releases keep screen.width/screen.height in portrait order
        // after rotation. Match the candidate to the live layout orientation.
        if ((width > height) !== (screenWidth > screenHeight)) {
          const swap = screenWidth;
          screenWidth = screenHeight;
          screenHeight = swap;
        }

        const tolerance = 2;
        const horizontalInsetSum =
          nonNegativeFinite(safeArea.left) + nonNegativeFinite(safeArea.right);
        const verticalInsetSum =
          nonNegativeFinite(safeArea.top) + nonNegativeFinite(safeArea.bottom);
        const widthGap = screenWidth - width;
        const heightGap = screenHeight - height;

        // iOS standalone can expose clientHeight/clientWidth with the leading
        // safe inset already removed. Recover the full layout dimension only
        // when the screen gap fits inside the declared safe-area budget; this
        // avoids expanding genuine iPad multi-window viewports to full screen.
        if (widthGap >= 0 &&
            widthGap <= horizontalInsetSum + tolerance) {
          width = screenWidth;
        }
        if (heightGap >= 0 &&
            heightGap <= verticalInsetSum + tolerance) {
          height = screenHeight;
        }

        return { width: width, height: height };
      }

      function resolveIOSVisualViewportRootFrame(
        standalone,
        viewport,
        safeArea,
        layoutViewport
      ) {
        const offsetTop = Number(viewport && viewport.offsetTop || 0);
        const offsetLeft = Number(viewport && viewport.offsetLeft || 0);
        const rawWidth = Number(viewport && viewport.width || 0);
        const rawHeight = Number(viewport && viewport.height || 0);
        const width = Number.isFinite(rawWidth) && rawWidth > 0 ? rawWidth : 1;
        const height = Number.isFinite(rawHeight) && rawHeight > 0 ? rawHeight : 1;
        safeArea = safeArea || {};
        layoutViewport = layoutViewport || {};
        const insetTop = nonNegativeFinite(safeArea.top);
        const insetRight = nonNegativeFinite(safeArea.right);
        const insetBottom = nonNegativeFinite(safeArea.bottom);
        const insetLeft = nonNegativeFinite(safeArea.left);
        const rawVisualRight = offsetLeft + width;
        const rawVisualBottom = offsetTop + height;
        const layoutWidth = nonNegativeFinite(layoutViewport.width) || rawVisualRight;
        const layoutHeight = nonNegativeFinite(layoutViewport.height) || rawVisualBottom;
        const safeLeft = insetLeft;
        const safeTop = insetTop;
        const safeRight = Math.max(safeLeft + 1, layoutWidth - insetRight);
        const safeBottom = Math.max(safeTop + 1, layoutHeight - insetBottom);
        const safeWidth = Math.max(1, safeRight - safeLeft);
        const safeHeight = Math.max(1, safeBottom - safeTop);

        let visualLeft = offsetLeft;
        let visualTop = offsetTop;
        let visualRight = rawVisualRight;
        let visualBottom = rawVisualBottom;

        // iOS standalone WebKit has two valid ways to expose visualViewport:
        // either the full layout viewport, or a safe-area-sized viewport whose
        // origin is still reported as (0, 0). The latter is already inset-sized;
        // intersecting it with the CSS safe frame would subtract the top/left
        // inset a second time and move the bottom navigation upward. Rebase only
        // an exact safe-frame-sized axis. Smaller viewports (for example while
        // the keyboard is open) must continue to constrain Flutter normally.
        const standaloneRebaseTolerance = 2;
        if (standalone &&
            Math.abs(offsetLeft) <= standaloneRebaseTolerance &&
            Math.abs(width - safeWidth) <= standaloneRebaseTolerance) {
          visualLeft = safeLeft;
          visualRight = safeRight;
        }
        if (standalone &&
            Math.abs(offsetTop) <= standaloneRebaseTolerance &&
            Math.abs(height - safeHeight) <= standaloneRebaseTolerance) {
          visualTop = safeTop;
          visualBottom = safeBottom;
        }

        // Some iOS standalone builds additionally report either the leading
        // visual origin/safe inset or the sum of both safe insets as the
        // trailing visualViewport gap. The physical iPhone variants observed
        // here are:
        // 844 - 797 = 47 (leading/top inset echoed), and
        // 844 - (47 + 716) = 81 (= 47 + 34, both insets echoed).
        // Both leave Flutter short of the 810px safe bottom. Correct only those
        // exact inset echoes; a keyboard produces a substantially larger gap.
        const horizontalInsetSum = insetLeft + insetRight;
        const verticalInsetSum = insetTop + insetBottom;
        const leadingHorizontalInset = Math.max(
          insetLeft,
          nonNegativeFinite(offsetLeft)
        );
        const leadingVerticalInset = Math.max(
          insetTop,
          nonNegativeFinite(offsetTop)
        );
        const trailingHorizontalGap = layoutWidth - rawVisualRight;
        const trailingVerticalGap = layoutHeight - rawVisualBottom;
        if (standalone && (
            (leadingHorizontalInset > 0 &&
              Math.abs(trailingHorizontalGap - leadingHorizontalInset) <=
                standaloneRebaseTolerance) ||
            (horizontalInsetSum > 0 &&
              Math.abs(trailingHorizontalGap - horizontalInsetSum) <=
                standaloneRebaseTolerance))) {
          visualRight = safeRight;
        }
        if (standalone && (
            (leadingVerticalInset > 0 &&
              Math.abs(trailingVerticalGap - leadingVerticalInset) <=
                standaloneRebaseTolerance) ||
            (verticalInsetSum > 0 &&
              Math.abs(trailingVerticalGap - verticalInsetSum) <=
                standaloneRebaseTolerance))) {
          visualBottom = safeBottom;
        }

        // visualViewport excludes Safari browser chrome, while CSS safe-area
        // insets exclude the notch/status bar and home indicator. Neither is a
        // substitute for the other: the safe Flutter frame is their
        // intersection. This also handles standalone PWAs where WebKit reports
        // offsetTop=0 even though the translucent status bar still overlays the
        // page.
        const left = Math.max(visualLeft, safeLeft);
        const top = Math.max(visualTop, safeTop);
        const right = Math.max(
          left + 1,
          Math.min(visualRight, safeRight)
        );
        const bottom = Math.max(
          top + 1,
          Math.min(visualBottom, safeBottom)
        );

        return {
          top: top,
          left: left,
          width: Math.max(1, right - left),
          height: Math.max(1, bottom - top),
          transform: 'none'
        };
      }

      function resolveIOSStandalonePaintFrame(standalone, viewport, safeArea, layoutViewport, contentFrame) {
        const tolerance = 2;
        const canExtend = standalone && Number(viewport.scale || 1) <= 1.01;
        const paintInsets = {
          left: canExtend && Math.abs(contentFrame.left - safeArea.left) <= tolerance
            ? safeArea.left : 0,
          right: canExtend && Math.abs(contentFrame.left + contentFrame.width -
            (layoutViewport.width - safeArea.right)) <= tolerance ? safeArea.right : 0,
          bottom: canExtend && Math.abs(contentFrame.top + contentFrame.height -
            (layoutViewport.height - safeArea.bottom)) <= tolerance ? safeArea.bottom : 0
        };
        return {
          frame: Object.assign({}, contentFrame, {
            left: contentFrame.left - paintInsets.left,
            width: contentFrame.width + paintInsets.left + paintInsets.right,
            height: contentFrame.height + paintInsets.bottom
          }),
          paintInsets: paintInsets
        };
      }


export{nonNegativeFinite,normalizeIOSStandaloneLayoutViewport,resolveIOSVisualViewportRootFrame,resolveIOSStandalonePaintFrame};
