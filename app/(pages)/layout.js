
import Fotter from "@/app/components/fotter";

export default function PageRootLayout({ children }) {
  return (
    <>
        <header></header>
        <main>
            {children}
        </main>
        <Fotter />
    </>
  );
}
