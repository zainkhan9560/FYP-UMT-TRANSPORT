import Navbar from "../common/landing/Navbar";
import Footer from "../common/landing/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
