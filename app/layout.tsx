// import { monserratFont } from './ui/fonts';
import { monserratFont } from './ui/fonts';
import Footer from './ui/footer';
import './ui/global.css';
import SideNav from './ui/home/sidenav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserratFont.className} antialiased flex flex-col min-h-screen`}>
        <SideNav />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
