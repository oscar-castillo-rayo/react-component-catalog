import { Header, Sidebar, Navbar } from "./components";
import useCheckMobileStore from "./store/useCheckMobileStore";
import useSidebarStrore from "./store/useSidebarStore";

const navbarElements = [
  {
    id: 1,
    title: "Navbar",
    imageName: "test.png",
    alt: "Navbar",
  },
  {
    id: 2,
    title: "Navbar",
    imageName: "test.png",
    alt: "Navbar",
  },
  {
    id: 3,
    title: "Navbar",
    imageName: "test.png",
    alt: "Navbar",
  },
  {
    id: 4,
    title: "Navbar",
    imageName: "test.png",
    alt: "Navbar",
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
        <div className="sidebar">
          {/* if the sidebar is open and the device is mobile, or if the device is not
          mobile, show the sidebar */}
          {(isSidebarOpen && isMobile) || !isMobile ? <Sidebar /> : null}{" "}
        </div>
        <div className="main-section">
          <div className="h-screen"></div>
          <div className="footer">footer</div>
        </div>
      </div>
    </>
  );
}

export default App;
