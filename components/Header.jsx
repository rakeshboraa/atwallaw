import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY.current || currentScrollY < 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

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
      className={`py-6 bg-white shadow-[0_2px_5px_#0F4C85] text-black sticky top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isScrollingUp ? "translate-y-0" : "-translate-y-full"
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
                <li key={index} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`flex items-center gap-1 cursor-pointer uppercase hover:text-[#0F4C85] transition ${
                        pathname.startsWith("/practiceAreas")
                          ? "text-[#0F4C85] border-b-2 border-[#0F4C85]"
                          : ""
                      }`}
                    >
                      {item.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === index ? "rotate-180" : "rotate-0"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.link || "/"}
                      className={`cursor-pointer hover:text-[#0F4C85] transition ${
                        pathname === item.link ? "text-[#0F4C85] border-b-2 border-[#0F4C85]" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && openDropdown === index && (
                    <ul
                      ref={dropdownRef}
                      className="absolute grid grid-cols-4 gap-2 top-10 left-[-250px] bg-white text-black shadow-lg rounded w-max overflow-auto z-10"
                    >
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <li
                          key={idx}
                          className="px-4 py-4 hover:bg-gray-200 whitespace-nowrap"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <Link href={`/practiceAreas`}>{dropdownItem}</Link>
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
