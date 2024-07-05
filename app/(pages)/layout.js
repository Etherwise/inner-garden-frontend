
import Footer from "@/app/components/footer";

export default function PageRootLayout({ children }) {
  return (
    <>
        <header></header>
        <main>
            {children}
        </main>
        <Footer />
    </>
  );
}
