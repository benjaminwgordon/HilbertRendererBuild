import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  type navbarLinkTarget = {
    route: string;
    name: string;
  };
  const navbarLinks: navbarLinkTarget[] = [
    {
      route: "/",
      name: "Home",
    },
    {
      route: "/blog",
      name: "Blog",
    },
    {
      route: "/about",
      name: "About Me",
    },
  ];

  const navbarLinkJSX = navbarLinks.map((link) => {
    const router = useRouter();
    const currentPath = router.pathname.split("/")[1];

    const isActivePath = (currentPath, linkPath) => {
      return currentPath === linkPath.replace("/", "");
    };

    return (
      <li
        key={`navbar-link-to-${link.name}`}
        className={`list-none py-1 w-full text-center ${
          isActivePath(currentPath, link.route) && `border-b-2 border-gray-200`
        }`}
      >
        <Link href={link.route}>{link.name}</Link>
      </li>
    );
  });

  return (
    <nav className="p-1 bg-gray-800 text-gray-200 w-full flex flex-row justify-around">
      {navbarLinkJSX}
    </nav>
  );
};

export default Navbar;
