import Footer from "@/app/components/home/Footer";
import NavBar from "@/app/components/NavBar";

export default function SiteLayout({ children }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="flex-1">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
