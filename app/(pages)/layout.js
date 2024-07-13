import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

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
