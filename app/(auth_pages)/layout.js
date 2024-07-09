import Footer from "../components/footer";
import Header from "../components/header";

export default function PageRootLayout({ children }) {
    return (
      <>
      <Header/>
        <main>
            {children}
        </main>
        <Footer/>
      </>
    );
  }
  