import "./globals.css";
import { Bricolage_Grotesque } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next';
 
// If loading a variable font, you don't need to specify the font weight
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricolageGrotesque.className}>
      <body>
        {children}
        <GoogleTagManager gtmId="GTM-TP84FKZN" />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
