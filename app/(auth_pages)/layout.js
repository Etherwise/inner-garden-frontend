import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";

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
  