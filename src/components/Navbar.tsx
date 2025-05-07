
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-5 px-6 md:px-12 lg:px-24",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="#" className="text-2xl font-bold gradient-text">
          PVK Sriram
        </a>
        <ul className="hidden md:flex gap-8">
          {["Projects", "About", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-foreground/80 hover:text-primary transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-foreground">
          ≡
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
