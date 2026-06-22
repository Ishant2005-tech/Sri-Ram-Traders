import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[72px] md:pt-[84px] bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
