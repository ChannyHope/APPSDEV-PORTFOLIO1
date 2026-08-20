import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}