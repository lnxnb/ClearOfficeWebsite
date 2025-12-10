import "./globals.css";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
});

const isDev = process.env.NODE_ENV !== "production";

const productionHtmlRoutingScript = String.raw`
(function () {
  if (typeof window === "undefined") return;
  try {
    var path = window.location.pathname || "/";
    var search = window.location.search || "";
    var hash = window.location.hash || "";
    var normalized = path.replace(/\/+\/g, "/");
    if (!normalized.startsWith("/")) {
      normalized = "/" + normalized;
    }
    var trimmed = normalized.length > 1 ? normalized.replace(/\/+$/, "") : normalized;
    if (trimmed === "/") {
      window.location.replace("/index.html" + search + hash);
      return;
    }
    if (trimmed.endsWith(".html")) {
      return;
    }
    var targetPath = trimmed + ".html";
    fetch(targetPath, { method: "HEAD" })
      .then(function (res) {
        if (res && res.ok) {
          window.location.replace(targetPath + search + hash);
        } else {
          window.location.replace("/index.html" + search + hash);
        }
      })
      .catch(function () {
        window.location.replace("/index.html" + search + hash);
      });
  } catch (error) {
    window.location.replace("/index.html");
  }
})();
`;

const developmentHtmlRoutingScript = String.raw`
(function () {
  if (typeof window === "undefined") return;
  try {
    var path = window.location.pathname || "/";
    var search = window.location.search || "";
    var hash = window.location.hash || "";
    if (path.endsWith(".html")) {
      var cleanedPath = path.replace(/\/+\/g, "/").replace(/\.html$/, "");
      if (cleanedPath.length === 0) cleanedPath = "/";
      window.location.replace(cleanedPath + search + hash);
      return;
    }

    var parser = document.createElement("a");

    function adjustAnchor(anchor) {
      var hrefValue = anchor.getAttribute("href");
      if (!hrefValue) return;
      if (hrefValue.startsWith("mailto:")) return;
      if (hrefValue.startsWith("tel:")) return;
      if (hrefValue.startsWith("#")) return;

      parser.href = hrefValue;
      if (parser.protocol && parser.protocol !== window.location.protocol) return;
      if (parser.host && parser.host !== window.location.host) return;

      var pathname = parser.pathname || "/";
      if (!pathname.endsWith(".html")) return;

      var cleaned = pathname.replace(/\/+\/g, "/").replace(/\.html$/, "");
      if (cleaned.length === 0) cleaned = "/";

      var newHref = cleaned + (parser.search || "") + (parser.hash || "");
      if (anchor.getAttribute("href") !== newHref) {
        anchor.setAttribute("data-export-href", hrefValue);
        anchor.setAttribute("href", newHref);
      }
    }

    function processAnchors(root) {
      var scope = root || document;
      var nodes = scope.querySelectorAll ? scope.querySelectorAll("a[href]") : [];
      for (var i = 0; i < nodes.length; i++) {
        adjustAnchor(nodes[i]);
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        processAnchors();
      });
    } else {
      processAnchors();
    }

    var observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        var mutation = mutations[i];
        if (!mutation.addedNodes) continue;
        for (var j = 0; j < mutation.addedNodes.length; j++) {
          var node = mutation.addedNodes[j];
          if (node.nodeType !== 1) continue;
          if (node.tagName === "A") {
            adjustAnchor(node);
          } else {
            processAnchors(node);
          }
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  } catch (error) {
    console.warn("Development HTML normalization failed", error);
  }
})();
`;

export const metadata = {
  title: "Clear Office",
  description: "ClearOffice Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: isDev
              ? developmentHtmlRoutingScript
              : productionHtmlRoutingScript,
          }}
        />
      </head>
      <body
        className={`${satoshi.variable} antialiased min-h-screen flex flex-col`}
        style={{ overflowX: "hidden" }}
      >
        {children}
        <div id="mobile-menu-root" />
      </body>
    </html>
  );
}
