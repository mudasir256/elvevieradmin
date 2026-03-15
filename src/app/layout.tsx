import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppShell } from "../components/AppShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elvevier Admin",
  description: "Admin dashboard for Elvevier store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(m) {
                    if (m.type === 'attributes' && m.attributeName === 'bis_skin_checked') {
                      m.target.removeAttribute('bis_skin_checked');
                    }
                    if (m.type === 'childList') {
                      m.addedNodes.forEach(function(n) {
                        if (n.nodeType === 1) {
                          n.removeAttribute('bis_skin_checked');
                          n.querySelectorAll('[bis_skin_checked]').forEach(function(el) {
                            el.removeAttribute('bis_skin_checked');
                          });
                        }
                      });
                    }
                  });
                });
                observer.observe(document.documentElement, {
                  attributes: true,
                  attributeFilter: ['bis_skin_checked'],
                  childList: true,
                  subtree: true
                });
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`} suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
