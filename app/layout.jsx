import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from '@components/Footer';

export const metadata = {
  title: "Sweet Tooth Crepes",
  description: "Discover & Share Homemade, Sweet & Savory desserts: crepes, cakes & more.s",
  openGraph: {
    image: '/assets/favicon.ico',
    url: 'https://sweettoothpaper.com/order',

  }
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
          <Footer/>

        </main>
    </body>
  </html>
);

export default RootLayout;