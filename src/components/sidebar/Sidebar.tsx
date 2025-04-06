import { useEffect, useRef } from "react";
import useSidebarStore from "../../store/useSidebarStore";
import "./sidebar.css";
import useCheckMobileStore from "../../store/useCheckMobileStore";
import SidebarLink from "./SidebarLink";

const sidebarLinks = [
  { id: 1, name: "Navbar", url: "#navbars" },
  { id: 2, name: "Footer", url: "#footers" },
  { id: 3, name: "Slider", url: "#sliders" },
  { id: 4, name: "Sidebar", url: "#sidebars" },
  { id: 5, name: "Button", url: "#buttons" },
  { id: 6, name: "Card", url: "#cards" },
];

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
      {sidebarLinks.map((link) => (
        <SidebarLink key={link.id} linkName={link.name} linkUrl={link.url} />
      ))}
    </div>
  );
};

export default Sidebar;
