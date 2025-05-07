
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
              <div className="w-full h-full bg-gradient-to-br from-purple-500/80 to-pink-500/80 flex items-center justify-center">
                <span className="text-4xl text-white">Your Photo</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold gradient-text">Who I Am</h3>
          <p className="text-foreground/80 leading-relaxed">
            I'm a passionate developer and designer with over 5 years of experience creating 
            digital solutions for clients across various industries. 
            My journey in tech began with a curiosity about how things work, 
            which evolved into a career building beautiful and functional applications.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            I specialize in creating responsive web applications with modern frameworks, 
            focusing on clean code and intuitive user experiences. 
            When I'm not coding, you can find me exploring new design trends, 
            contributing to open-source projects, or hiking in the mountains.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <h4 className="text-primary font-medium mb-2">Education</h4>
              <p className="text-foreground/80">B.Tech in CSE</p>
              <p className="text-muted-foreground">Vignan's Institute of Information Technology</p>
            </div>
            <div>
              <h4 className="text-primary font-medium mb-2">Experience</h4>
              <p className="text-foreground/80">Senior Developer</p>
              <p className="text-muted-foreground">Creative Solutions Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
