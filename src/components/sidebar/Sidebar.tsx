import { useEffect, useRef } from "react";
import useSidebarStore from "../../store/useSidebarStore";
import "./sidebar.css";
import useCheckMobileStore from "../../store/useCheckMobileStore";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarStore();
  const { isMobile } = useCheckMobileStore();
  // useRef to reference the sidebar element
  const slidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Función para manejar clics fuera del menú
    const handleClickOutside = (event: Event) => {
      // verify if the slidebarRef exists and if the click is outside the sidebar
      if (
        slidebarRef.current &&
        !slidebarRef.current.contains(event.target as Node) &&
        isSidebarOpen && // only run if the sidebar is open
        isMobile // only run if the device is mobile
      ) {
        // close the sidebar
        closeSidebar();
      }
    };

    // addEventListener to detect clicks outside the nav
    document.addEventListener("mousedown", handleClickOutside);

    // cleanup function to remove the event listener when the component unmounts or the dependency changes (isMenuOpen) to avoid memory leaks or unexpected behavior
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, isMobile, closeSidebar]);

  useEffect(() => {
    // Close the sidebar when the screen is resized to a desktop size
    if (!isMobile) {
      closeSidebar();
    }
  }, [isMobile, closeSidebar]);

  return (
    <div ref={slidebarRef} className={"sidebar-container"}>
      <div className="component-sidebar">
        <a href="#navbars" onClick={closeSidebar}>
          Navbar
        </a>
      </div>
      <div className="component-sidebar" onClick={closeSidebar}>
        sidebar
      </div>
      <div className="component-sidebar" onClick={closeSidebar}>
        sidebar
      </div>
      <div className="component-sidebar" onClick={closeSidebar}>
        sidebar
      </div>
      <div className="component-sidebar" onClick={closeSidebar}>
        sideddddddbar
      </div>
      <div className="component-sidebar" onClick={closeSidebar}>
        sidebar
      </div>
    </div>
  );
};

export default Sidebar;
