import "./navbar.css";

type NavbarProps = {
  title: string;
  imageName: string;
  alt?: string;
};

const Navbar = ({ title, imageName, alt }: NavbarProps) => {
  const imagePath = import.meta.env.VITE_IMAGE_PATH;

  return (
    <div className="nav-component mt-14 bg-gray-800 text-white">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <img
          className=" "
          src={`${imagePath}/navbar/${imageName}`}
          alt={alt ? alt : "Navbar"}
        />
        <h3 className="text-2xl font-bold">
          <a target="_blank" href="https://codepen.io/pen?template=abRVEzd">
            Navbar test
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
