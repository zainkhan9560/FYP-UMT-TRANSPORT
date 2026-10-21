import Navbar from "../common/Auth/landing/Navbar";
import Footer from "../common/Auth/landing/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
