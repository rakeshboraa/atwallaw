import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY.current || currentScrollY < 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", hasDropdown: false, link: "/" },
    { label: "About Us", hasDropdown: false, link: "/aboutus" },
    {
      label: "Practice Areas",
      hasDropdown: true,
      dropdownItems: [
        "Corporate Law", "Criminal Defense", "Family Law", "Immigration Law",
        "Intellectual Property", "Real Estate", "Tax Law", "Labor Law",
        "Contract Law", "Environmental Law", "Banking Law", "International Law",
        "Human Rights", "Education Law", "Health Law", "Sports Law",
      ],
    },
    { label: "Cases", hasDropdown: false, link: "/cases" },
    { label: "Faq", hasDropdown: false, link: "/faqs" },
    { label: "Blog", hasDropdown: false, link: "/blog" },
    { label: "Contact", hasDropdown: false, link: "/contact" },
  ];

  return (
    <header
      className={`py-6 bg-white shadow-[0_2px_5px_#0F4C85] text-black sticky top-0 left-0 w-full z-50 transition-transform duration-300 ${isScrollingUp ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="flex w-full justify-center">
        <div className="container px-6 flex w-full items-center justify-between">
          {/* Logo */}
          <div className="font-bold h-[50px] w-[80px]">
            <img src="/logosa.avif" className="mb-2 w-full h-full" alt="Logo" />
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex gap-8 uppercase font-bold">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  <Link
                    href={item.link || "/"}
                    className={`cursor-pointer hover:text-[#0F4C85] transition ${pathname === item.link || (item.hasDropdown && pathname.startsWith("/practiceAreas"))
                        ? "text-[#0F4C85] border-b-2 border-[#0F4C85]"
                        : ""
                      }`}
                  >
                    {item.label}
                  </Link>

                  {/* Dropdown */}
                  {item.hasDropdown && (
                    <ul className="absolute hidden group-hover:grid grid-cols-4 gap-2 top-7 left-[-250px] bg-white text-black shadow-lg rounded w-max overflow-auto z-10">
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <li key={idx} className="px-4 py-4 hover:bg-gray-200 whitespace-nowrap">
                          <Link href="/practiceAreas">{dropdownItem}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Call Now Button */}
          <div className="flex">
            <button className="bg-[#0F4C85] text-white px-4 py-2 rounded hover:bg-blue-900">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
