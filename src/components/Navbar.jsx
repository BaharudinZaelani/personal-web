import { CgMenuRightAlt } from "react-icons/cg";
import { NavLink } from "react-router";
import MButton from "./ui/MButton";

export default function Navbar() {
  const menus = [
    {
      href: "/",
      title: "Home",
    },
    // {
    //   href: "/about",
    //   title: "About Me",
    // },
  ];
  return (
    <header className="w-full z-20 absolute top-0 left-0 right-0">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Brand / Name */}
        <div className="text-xl font-bold">Baharudin Zaelani</div>

        {/* Menu */}
        <div className="flex gap-8 text-sm font-medium items-center">
          <div className="hidden gap-8 md:flex">
            {menus.map((menu, index) => (
              <div key={index}>
                <NavLink
                  to={menu.href}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }
                >
                  {menu.title}
                </NavLink>
              </div>
            ))}
          </div>

          {/* Mobile Device Menu Button */}
          <MButton className="md:hidden block rounded bg-gray-100 p-3">
            <CgMenuRightAlt />
          </MButton>
        </div>
      </nav>
    </header>
  );
}
