import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const education = [
    {
      degree: "Ph.D.",
      institution: "Anna University",
      year: "2019",
      result: "Highly Recommended",
    },
    {
      degree: "M.E. Advanced Communication System",
      institution: "VMRF Deemed University",
      year: "2006",
      result: "77%",
    },
    {
      degree: "B.E. Electronics & Communication Engineering",
      institution: "K.S.R. College of Technology, Tiruchengode",
      university: "Periyar University",
      year: "2003",
      result: "72%",
    },
  ];

  const experience = [
    {
      position: "Professor",
      institution: "Gnanamani College of Technology",
      period: "January 2024 - Present",
    },
    {
      position: "Professor and Head of Department",
      institution: "Selvam College of Technology",
      period: "June 2016 - March 2023",
      duration: "6 years 9 months",
    },
    {
      position: "Assistant Professor and Head of Department",
      institution: "King College of Technology",
      period: "July 2009 - April 2016",
      duration: "5 years 9 months",
    },
    {
      position: "Assistant Professor",
      institution: "Gnanamani College of Technology",
      period: "May 2007 - June 2009",
      duration: "2 years 1 month",
    },
    {
      position: "Lecturer",
      institution: "Annai Mathammal Sheela Engineering College",
      period: "July 2003 - April 2007",
      duration: "3 years 9 months",
    },
  ];

  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">About Dr. K. Vidyavathi</h1>

        {/* Career Objective */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Career Objective</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To work in a team and creative environment where all my talents are innovated.
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    {edu.university && (
                      <p className="text-sm text-muted-foreground">{edu.university}</p>
                    )}
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground">Year: {edu.year}</span>
                      <Separator orientation="vertical" className="h-4" />
                      <span className="font-medium text-primary">{edu.result}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>
          <p className="mb-6 text-lg text-muted-foreground">
            Total Teaching Experience: <span className="font-semibold text-primary">19+ Years</span>
          </p>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <p className="text-muted-foreground">{exp.institution}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground">{exp.period}</span>
                      {exp.duration && (
                        <>
                          <Separator orientation="vertical" className="h-4" />
                          <span className="text-primary">{exp.duration}</span>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Areas of Interest */}
        <section>
          <h2 className="mb-6 text-3xl font-bold">Areas of Interest</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-3">
                {[
                  "Image Processing",
                  "Signals and Systems",
                  "Video Compression",
                  "Biomedical Signal Processing",
                  "Digital Signal Processing",
                ].map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
