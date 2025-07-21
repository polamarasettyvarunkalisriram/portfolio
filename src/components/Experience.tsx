import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Code, Database, Globe } from "lucide-react";

// 3D Character Component
const AnimatedCharacter = () => {
  return (
    <Float
      speed={2}
      rotationIntensity={0.1}
      floatIntensity={0.2}
    >
      <group>
        {/* Head */}
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshPhongMaterial color="#fdbcb4" />
        </mesh>
        
        {/* Body */}
        <mesh position={[0, 0.8, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.8, 8]} />
          <meshPhongMaterial color="#3b82f6" />
        </mesh>
        
        {/* Arms */}
        <mesh position={[-0.4, 0.9, 0]} rotation={[0, 0, 0.2]}>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
          <meshPhongMaterial color="#fdbcb4" />
        </mesh>
        <mesh position={[0.4, 0.9, 0]} rotation={[0, 0, -0.2]}>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
          <meshPhongMaterial color="#fdbcb4" />
        </mesh>
        
        {/* Legs */}
        <mesh position={[-0.15, 0.1, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
          <meshPhongMaterial color="#1f2937" />
        </mesh>
        <mesh position={[0.15, 0.1, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
          <meshPhongMaterial color="#1f2937" />
        </mesh>
        
        {/* Laptop */}
        <mesh position={[0, 0.6, 0.3]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[0.4, 0.02, 0.3]} />
          <meshPhongMaterial color="#374151" />
        </mesh>
        <mesh position={[0, 0.65, 0.15]} rotation={[-1.2, 0, 0]}>
          <boxGeometry args={[0.4, 0.3, 0.02]} />
          <meshPhongMaterial color="#111827" />
        </mesh>
      </group>
    </Float>
  );
};

// 3D Scene Component
const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />
      
      <AnimatedCharacter />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Current Role",
      period: "2023 - Present",
      location: "Visakhapatnam, AP",
      description: "Developing modern web applications using React, Node.js, and cloud technologies.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "AWS"],
      achievements: [
        "Built 5+ responsive web applications",
        "Improved application performance by 40%",
        "Implemented modern UI/UX designs"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Learning Phase",
      period: "2022 - 2023",
      location: "Remote",
      description: "Focused on mastering frontend technologies and modern development practices.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      achievements: [
        "Completed 10+ personal projects",
        "Learned modern development tools",
        "Built strong foundation in web technologies"
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">My Experience Journey</h2>
      
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* 3D Character Side */}
        <div className="relative">
          <Card className="h-[500px] overflow-hidden border-border/40 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-0 h-full">
              <Scene3D />
            </CardContent>
          </Card>
          <div className="absolute bottom-4 left-4 right-4">
            <Card className="bg-background/90 backdrop-blur-sm">
              <CardContent className="p-4">
                <h3 className="font-semibold gradient-text">Building the Future</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Passionate about creating innovative web solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Experience Steps Side */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden border-border/40 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold gradient-text">{exp.title}</h3>
                    <p className="text-foreground/80 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-foreground/80 mb-4">{exp.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-primary mb-2 flex items-center">
                    <Code className="w-4 h-4 mr-1" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-medium text-primary mb-2 flex items-center">
                    <Globe className="w-4 h-4 mr-1" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-foreground/80 flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute -bottom-4 left-6 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent"></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;