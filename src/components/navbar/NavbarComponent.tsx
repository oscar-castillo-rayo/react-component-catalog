import "./navbar-component.css";

type NavbarProps = {
  title: string;
  imageName: string;
  alt?: string;
  componentUrl: string;
  description?: string;
};

const NavbarComponent = ({
  title,
  imageName,
  alt,
  componentUrl,
  description,
}: NavbarProps) => {
  const imagePath = import.meta.env.VITE_IMAGE_PATH;

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="card-container">
      <img
        src={`${imagePath}/navbar/${imageName}`}
        alt={alt ? alt : "Navbar"}
        className="card-image"
      />
      <div className="card-content" onClick={() => handleClick(componentUrl)}>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
      </div>
    </div>
    // <div className="nav-component mt-14 bg-gray-800 text-white">
    //   <div className="flex flex-col justify-center items-center">
    //     <h1 className=" font-bold">{title}</h1>
    //     <img
    //       className=" "
    //       src={`${imagePath}/navbar/${imageName}`}
    //       alt={alt ? alt : "Navbar"}
    //     />
    //     <h3 className="text-2xl font-bold">
    //       <a target="_blank" href="https://codepen.io/pen?template=abRVEzd">
    //         Navbar test
    //       </a>
    //     </h3>
    //   </div>
    // </div>
  );
};

export default NavbarComponent;
