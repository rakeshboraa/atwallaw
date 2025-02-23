"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastScrollY = useRef(0); // Using useRef for better performance

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down
      setIsScrollingUp(currentScrollY < lastScrollY.current || currentScrollY < 50);

      lastScrollY.current = currentScrollY; // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", hasDropdown: false },
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
      className={`py-6 bg-black shadow-[0_4px_10px_rgba(255,0,0,0.4)]
  text-white  sticky top-0 left-0 w-full z-50  h-[var(--header-height)] 
      transition-transform duration-300 ${isScrollingUp ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex w-full  justify-center ">
        <div className="container px-6 flex w-full items-center justify-between">
          <span className="font-bold">Atwal Law</span>
          <nav>
            <ul className="flex gap-8 uppercase">
              {navItems.map((item, index) => (
                <li key={index} className={`relative group ${item.hasDropdown ? "cursor-pointer" : ""}`}>
                  <div className="flex items-center">
                    <div className="cursor-pointer">
                      <Link href={item.link || "/"}>{item.label}</Link>
                    </div>
                    {item.hasDropdown && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down ml-2"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </div>
                  {item.hasDropdown && (
                    <ul className="absolute hidden group-hover:grid grid-cols-4 gap-2 top-7 left-[-250px] bg-white text-black shadow-lg rounded w-max overflow-auto z-10">
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <Link href="/practiceAreas">
                          <li key={idx} className="px-4 py-4 hover:bg-gray-200 whitespace-nowrap">
                            {dropdownItem}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex">
            <button className="bg-[#FF000066] text-white px-4 py-2 rounded hover:bg-red-600">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
