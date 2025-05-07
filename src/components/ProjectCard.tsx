
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

const ProjectCard = ({ title, description, imageUrl, tags, demoUrl, codeUrl }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden bg-card border-border/40 card-hover">
      <div className="relative aspect-video w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full brightness-90 hover:brightness-100 transition-all duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/70">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex gap-3">
        {demoUrl && (
          <Button asChild size="sm" variant="default">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
        )}
        {codeUrl && (
          <Button asChild size="sm" variant="outline">
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
