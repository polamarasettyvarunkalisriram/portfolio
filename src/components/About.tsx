
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Card className="overflow-hidden border-border/40">
          <CardContent className="p-0">
            <div className="aspect-square w-full overflow-hidden">
              {/* Replace with an actual image */}
              <div className="relative w-full h-full overflow-hidden border-4 border-muted">
  <img 
    src="/lovable-uploads/IMG_5002.JPG"
    alt="PVK Sriram"
    className="w-full h-full object-cover"
  />
</div>

            </div>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold gradient-text">Who I Am</h3>
          <p className="text-foreground/80 leading-relaxed">
  I'm a passionate Full Stack Developer with 1 year of experience building dynamic and responsive web applications. 
  My journey in tech started with a deep curiosity for how software works, which quickly evolved into a drive to create powerful digital solutions.
</p>
<p className="text-foreground/80 leading-relaxed">
  I specialize in using modern frameworks like React and Node.js, with a focus on clean, maintainable code and seamless user experiences. 
  Outside of coding, I enjoy exploring UI/UX design trends, contributing to open-source projects, and staying active outdoors.
</p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <h4 className="text-primary font-medium mb-2">Education</h4>
              <p className="text-foreground/80">B.Tech in CSE</p>
              <p className="text-muted-foreground">Vignan's Institute of Information Technology</p>
            </div>
            <div>
              <h4 className="text-primary font-medium mb-2">Experience</h4>
              <p className="text-foreground/80">Junior Developer</p>
              {/* <p className="text-muted-foreground">Creative Solutions Inc.</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
