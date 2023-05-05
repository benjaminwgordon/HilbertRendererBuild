import Link from "next/link";

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
    return (
      <li key={`navbar-link-to-${link.name}`}>
        <Link href={link.route}>{link.name}</Link>
      </li>
    );
  });

  return <nav>{navbarLinkJSX}</nav>;
};

export default Navbar;
