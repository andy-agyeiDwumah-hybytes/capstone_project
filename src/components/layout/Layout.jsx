// Components
import Footer from "../footer/Footer";
import Header from "../header/Header";
// React
import { Outlet } from "react-router"

export default function Layout() {
  return (
    <>
      <Header />
      <main className="mainWrapper">
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
