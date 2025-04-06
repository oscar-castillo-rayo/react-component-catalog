import useSidebarStrore from "../../store/useSidebarStore";
import "./sidebar.css";

type SidebarLinkProps = {
  linkName: string;
  linkUrl: string;
};

const SidebarLink = ({ linkName, linkUrl }: SidebarLinkProps) => {
  const { closeSidebar } = useSidebarStrore();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, link: string) => {
    e.preventDefault(); // Prevent default anchor click behavior
    closeSidebar(); // Close the sidebar when a link is clicked

    const targetId = link.substring(1); // Get the target ID from the URL (remove the #)
    const targetElement = document.getElementById(targetId); // Get the target element by ID

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Scroll to the target element smoothly
    }
  };

  return (
    <div
      className="component-sidebar btn-2 "
      onClick={(e) => handleClick(e, linkUrl)}
    >
      {linkName}
    </div>
  );
};

export default SidebarLink;
