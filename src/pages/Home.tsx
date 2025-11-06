import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, GraduationCap, Users } from "lucide-react";

export default function Home() {
  const stats = [
    { icon: GraduationCap, label: "Years of Experience", value: "19+" },
    { icon: BookOpen, label: "Publications", value: "25+" },
    { icon: Award, label: "Patents Filed", value: "3" },
    { icon: Users, label: "Books Published", value: "5" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Dr. K. Vidyavathi
            </h1>
            <p className="mb-4 text-xl text-muted-foreground md:text-2xl">
              Professor, Electronics & Communication Engineering
            </p>
            <p className="mb-8 text-lg text-muted-foreground">
              Ph.D., M.E., B.E. | Gnanamani College of Technology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/research">View Research</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-2 transition-all hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <stat.icon className="mb-4 h-10 w-10 text-primary" />
                  <p className="mb-2 text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-muted/30 px-4 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">About Dr. Vidyavathi</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              A dedicated educator and researcher with nearly two decades of experience in Electronics 
              and Communication Engineering. Specializing in Image Processing, Signal Processing, 
              Video Compression, and Biomedical applications.
            </p>
            <Button asChild variant="outline">
              <Link to="/about">Read More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="px-4 py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Research Highlights</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Image Processing</h3>
                <p className="text-muted-foreground">
                  Advanced research in digital image falsification detection and machine vision applications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Signal Processing</h3>
                <p className="text-muted-foreground">
                  Expertise in ECG signal analysis, X-wave recognition, and biomedical signal processing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold">IoT & AI Applications</h3>
                <p className="text-muted-foreground">
                  Innovative work in smart agriculture systems and environmental management using IoT.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
