// import { monserratFont } from './ui/fonts';
import { monserratFont } from './ui/fonts';
import './ui/global.css'
import SideNav from './ui/home/sidenav';
// import SideNav from './ui/home/sidenav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserratFont.className} antialiased`}>
      {/* <body> */}
        {/* <SideNav></SideNav> */}
        <SideNav></SideNav>
        {children}
        
        </body>
    </html>
  );
}
