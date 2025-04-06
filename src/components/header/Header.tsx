import { useRef } from "react";
import "./header.css";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import useSidebarStore from "../../store/useSidebarStore";
import { useMobileDetection } from "../../store/useCheckMobileStore";

const Header = () => {
  const { isMobile } = useMobileDetection();
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();

  const toggleMenu = () => {
    toggleSidebar();
    console.log("toggleMenu", isSidebarOpen);
  };

  return (
    <>
      <nav className="header-container">
        <div className={`navbar ${isMobile ? "mobile" : ""}`}>
          {isMobile && (
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              ref={menuButtonRef}
            >
              {isSidebarOpen ? (
                <IoIosClose color="white" size={30} />
              ) : (
                <IoIosMenu color="white" size={30} />
              )}
            </button>
          )}

          <nav className={`nav ${isMobile && !isSidebarOpen ? "hidden" : ""}`}>
            {/* <ul>
              <li>
                <a
                  href="#home"
                  className="test"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => setIsMenuOpen(false)}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#WorkExperience" onClick={() => setIsMenuOpen(false)}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul> */}
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Header;
