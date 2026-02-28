import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function MainLayout() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
