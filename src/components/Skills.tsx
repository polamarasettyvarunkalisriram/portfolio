
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "C", "JavaScript"],
    },
    {
      title: "Frontend Development",
      skills: ["HTML","CSS","Bootstrap","Angular","React", "TypeScript", "Next.js" ],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "mysql", "MongoDB", "Firebase", "RESTful APIs", "Postman"],
    },
    {
      title: "Tools & Others",
      skills: ["Git","CI/CD", "Agile Methodology"],
    },
  ];

  return (
    <section id="skills" className="section bg-secondary/30">
      <h2 className="section-title">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="border-border/40">
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm py-1.5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
