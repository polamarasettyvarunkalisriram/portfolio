
import { Button } from "@/components/ui/button";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-12 px-6 md:px-12 lg:px-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-foreground/70 mb-6">
              Creating beautiful digital experiences with code and design.
            </p>
            <div className="flex gap-4">
              {["Twitter", "GitHub", "LinkedIn"].map((platform) => (
                <Button key={platform} size="sm" variant="ghost" className="px-2.5">
                  {platform}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Projects", "About", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
         
        </div>
        <div className="border-t border-border/40 mt-8 pt-8 text-center text-foreground/60">
          <p>&copy; {year} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
