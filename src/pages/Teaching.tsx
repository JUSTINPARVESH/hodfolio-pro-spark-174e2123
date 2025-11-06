import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Award } from "lucide-react";

export default function Teaching() {
  const courses = [
    "Microwave Engineering",
    "Data Communication",
    "Telecommunication Switching Techniques",
    "Transmission Lines and Networks",
    "Signals and Networks",
    "Display System Engineering",
    "Embedded Architecture",
    "Electromagnetic Field",
    "Satellite Communication",
    "Medical Electronics",
    "Wireless Communication",
    "Television and Video Engineering",
    "Digital Signal Processing",
    "Signals and Systems",
    "High Speed Networks",
    "Electronic Circuits",
    "Electron Devices",
    "Image Processing",
    "Computer Networks",
    "Communication Engineering",
    "Wireless Networks",
    "Professional Ethics and Human Values",
  ];

  const responsibilities = [
    {
      role: "IQAC Coordinator",
      institution: "Selvam College of Technology",
      period: "June 2017 - March 2023",
    },
    {
      role: "SPOC - Naan Mudhalvan Programme",
      institution: "Selvam College of Technology",
      period: "Since inception",
    },
    {
      role: "IETE Students' Chapter Coordinator",
      institution: "Selvam College of Technology",
      period: "January 2021 - March 2023",
    },
    {
      role: "Vice Chairman - Women Entrepreneur Cell",
      institution: "Selvam College of Technology",
    },
    {
      role: "Ladies Hostel Warden",
      institution: "Selvam College of Technology",
      period: "January 2021 - March 2023",
    },
  ];

  const grants = [
    {
      title: "Hybrid-Based Wireless Power Transfer for Electric Vehicles While in Motion",
      amount: "Rs. 7,500",
      agency: "Tamil Nadu State Council for Science and Technology (TNSCST)",
      refNo: "EEE1644",
      year: "2023",
    },
    {
      title: "Effective Recognition of Maize Plant Leaf Using Deep Learning Techniques",
      amount: "Rs. 7,500",
      agency: "Tamil Nadu State Council for Science and Technology (TNSCST)",
      refNo: "EEE2214",
      year: "2024-2025",
    },
    {
      title: "Six-Day FDP: Greener, Smarter, Faster - Organic Semiconductors in EVs",
      amount: "Rs. 1,00,000",
      agency: "AICTE Training and Learning (ATAL) Academy",
    },
  ];

  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold">Teaching & Leadership</h1>

        {/* Courses Handled */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Courses Handled</h2>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 rounded-lg border bg-muted/30 p-3 text-sm"
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Administrative Responsibilities */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Administrative Responsibilities</h2>
          </div>
          <div className="space-y-4">
            {responsibilities.map((resp, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{resp.role}</h3>
                  <p className="text-muted-foreground">{resp.institution}</p>
                  {resp.period && (
                    <p className="mt-1 text-sm text-primary">{resp.period}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Grants */}
        <section>
          <h2 className="mb-6 text-3xl font-bold">Research Grants & Funding</h2>
          <div className="space-y-4">
            {grants.map((grant, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{grant.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium">Amount:</span>{" "}
                      <span className="text-primary">{grant.amount}</span>
                    </p>
                    <p>
                      <span className="font-medium">Agency:</span> {grant.agency}
                    </p>
                    {grant.refNo && (
                      <p>
                        <span className="font-medium">Ref No:</span> {grant.refNo}
                      </p>
                    )}
                    {grant.year && (
                      <p>
                        <span className="font-medium">Year:</span> {grant.year}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
