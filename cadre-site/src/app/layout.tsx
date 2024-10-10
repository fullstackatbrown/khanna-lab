'use client';
import NavHeader from './ui/nav-header'
import Footer from './ui/footer'
import './ui/global.css';
import { RecoilRoot } from 'recoil';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
        <html lang="en">
          <body className={`antialiased`}>
            <NavHeader />
            <div>
              {/* <RecoilRoot> */}
              {children}
              {/* </RecoilRoot> */}
            </div>
            <Footer />
          </body>
        </html>
    </RecoilRoot>
  );
}
