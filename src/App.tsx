import { Header, Sidebar, NavbarComponent } from "./components";
import useCheckMobileStore from "./store/useCheckMobileStore";
import useSidebarStrore from "./store/useSidebarStore";

const navbarElements = [
  {
    id: 1,
    title: "Navbar",
    imageName: "test.png",
    alt: "Navbar",
    componentUrl: "https://codepen.io/pen?template=abRVEzd",
    description: "This is a test navbar",
  },
  {
    id: 2,
    title: "Navbar",
    imageName: "test.png",
    alt: "Navbar",
    componentUrl: "https://codepen.io/pen?template=abRVEzd",
    description: "This is a test navbar",
  },
  {
    id: 3,
    title: "Navbar",
    imageName: "test.png",
    alt: "Navbar",
    componentUrl: "https://codepen.io/pen?template=abRVEzd",
    description: "This is a test navbar",
  },
  {
    id: 4,
    title: "Navbar",
    imageName: "test.png",
    alt: "Navbar",
    componentUrl: "https://codepen.io/pen?template=abRVEzd",
    description: "This is a test navbar",
  },
  {
    id: 5,
    title: "Navbar",
    imageName: "test.png",
    alt: "Navbar",
    componentUrl: "https://codepen.io/pen?template=abRVEzd",
    description: "This is a test navbar",
  },
  {
    id: 6,
    title: "Navbar",
    imageName: "test.png",
    alt: "Navbar",
    componentUrl: "https://codepen.io/pen?template=abRVEzd",
    description: "This is a test navbar",
  },
];

function App() {
  const { isSidebarOpen } = useSidebarStrore();
  const { isMobile } = useCheckMobileStore();

  return (
    <>
      <div className="grid-main-container">
        <div className="header">
          <Header />
        </div>
        <div
          className={`sidebar ${
            isSidebarOpen ? "sidebar-open" : "sidebar-closed"
          }`}
        >
          {(isSidebarOpen && isMobile) || !isMobile ? <Sidebar /> : null}{" "}
        </div>
        <div className="main-section">
          <div className="grid-container">
            <div id="navbars" className="navbar h-screen">
              <h2 className="component-subtitle">Navbars</h2>
              <div className="main-navbar-container">
                {navbarElements.map((element) => (
                  <NavbarComponent key={element.id} {...element} />
                ))}
              </div>
            </div>
          </div>
          <div id="footers" className="footer h-screen">
            <h2 className="component-subtitle">footers</h2>
          </div>
          <div id="sliders" className="slider h-screen">
            <h2 className="component-subtitle">Sliders</h2>
          </div>
          <div id="sidebars" className=" h-screen">
            <h2 className="component-subtitle">Sidebars</h2>
          </div>
          <div id="buttons" className="button h-screen">
            <h2 className="component-subtitle">Buttons</h2>
          </div>
          <div id="cards" className="Card h-screen">
            <h2 className="component-subtitle">Cards</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
