
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 section">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Hi, I'm <span className="gradient-text">PVK Sriram</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/70">
            Full Stack Developer
          </h2>
          <p className="text-lg text-muted-foreground">
            I craft beautiful, functional digital experiences with a focus on 
            user interaction and responsive design.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Contact Me
            </Button>
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
