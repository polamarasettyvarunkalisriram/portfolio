
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 section">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
  Hi, I'm{" "}
  <span
    className="gradient-text inline-block transition-transform duration-500 hover:translate-x-1 hover:-translate-y-1 hover:drop-shadow-[3px_3px_0_rgba(0,0,0,0.5)]"
  >
    PVK Sriram
  </span>
</h1>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
  Hi, I'm <span className="name-3d">PVK Sriram</span>
</h1>

          <h2 className="text-2xl md:text-3xl text-foreground/70">
            Full Stack Developer
          </h2>
          <p className="text-lg text-muted-foreground">
          I'm a recent graduate with a passion for full stack development.
I love building clean and user-friendly web applications.
Always learning and excited to work on meaningful projects.
          </p>
          <div className="flex flex-wrap gap-4">
  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
    <Button size="lg" className="rounded-full">
      Resume
    </Button>
  </a>
  <a href="#contact">
  <Button size="lg" variant="outline" className="rounded-full">
    Contact Me
  </Button>
</a>

</div>


        </div>
        <div className="relative aspect-square w-full max-w-md mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-muted">
            <img 
              src="/lovable-uploads/4dc96949-248a-4a9f-b829-a2fb77c40003.png" 
              alt="PVK Sriram" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
