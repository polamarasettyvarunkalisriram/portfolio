
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium">Email</h4>
                <a
                  href="mailto:srirampksrirampk@gmail.com"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  srirampksrirampk@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20 text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium">Phone</h4>
                <a
                  href="tel:+919398171713"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  +91 9398171713
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20 text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium">Location</h4>
                <p className="text-foreground/70">
                  Visakhapatnam, Andhra Pradesh
                </p>
              </div>
            </div>
          </div>
        </div>
        <Card className="border-border/40">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-foreground/80">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-background border-border/40"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-foreground/80">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-background border-border/40"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-foreground/80">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="bg-background border-border/40"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-foreground/80">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="bg-background border-border/40"
                  rows={5}
                />
              </div>
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
