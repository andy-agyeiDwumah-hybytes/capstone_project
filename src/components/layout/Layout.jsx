// Components
import Footer from "../footer/Footer"
import Header from "../header/Header"
// React
import { Outlet, useLocation } from "react-router"
import { useEffect, useState } from "react"
// Context
import { MenuContext } from "../../context/MenuContext"

export default function Layout() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [menuIsExpanded, setMenuIsExpanded] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Reset menu state to closed if previously it was open
    // Important: Breakpoint must match breakpoint specified in Header.module.css
    if (windowWidth >= 992 && menuIsExpanded) {
      setMenuIsExpanded(false)
    }
  }, [windowWidth, menuIsExpanded])

  useEffect(() => {
    // Close menu when pathname changes
    setMenuIsExpanded(false)
  }, [pathname])

  const handleClick = () => {
    // Toggle menu state
    setMenuIsExpanded(prev => !prev)
  };

  return (
    <MenuContext.Provider value={menuIsExpanded}>
      <Header
        onHandleClick={handleClick} />
      <main className="mainWrapper">
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </MenuContext.Provider>
  );
}
