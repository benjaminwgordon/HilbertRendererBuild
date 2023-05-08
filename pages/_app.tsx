import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "globals.css";

export default function App({ Component, pageProps }) {
  const Layout = ({ Component, pageProps }) => {
    if (Component.getLayout) {
      return Component.getLayout(<Component {...pageProps} />);
    } else {
      return <Component {...pageProps} />;
    }
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section>
        <Layout Component={Component} pageProps={pageProps} />
      </section>
      <Footer />
    </div>
  );
}
