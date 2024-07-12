
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function PageRootLayout({ children }) {
  return (
    <>
      <Header />
      <main className="responsive-container">
        {children}
      </main>
      <Footer />
    </>
  );
}
