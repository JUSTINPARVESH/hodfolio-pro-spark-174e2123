import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";

export default function Contact() {
  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Contact Information</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:vidyavathiece.2010@gmail.com"
                className="text-lg text-primary hover:underline"
              >
                vidyavathiece.2010@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="tel:+919952199821"
                className="text-lg text-primary hover:underline"
              >
                +91-9952199821
              </a>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Current Affiliation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-lg font-medium">Professor</p>
              <p className="text-muted-foreground">
                Department of Electronics and Communication Engineering
              </p>
              <p className="text-muted-foreground">Gnanamani College of Technology</p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <address className="not-italic text-muted-foreground">
                6/381 E, SAI Bhavan
                <br />
                Thiruvalluvar Colony
                <br />
                Bodhuppatti Road
                <br />
                Namakkal District
                <br />
                Tamil Nadu, India - 637 001
              </address>
            </CardContent>
          </Card>
        </div>

        {/* Research Collaboration */}
        <Card className="mt-8 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle>Research Collaboration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Interested in research collaboration in Image Processing, Signal Processing, 
              Video Compression, or Biomedical applications? Feel free to reach out via email 
              to discuss potential opportunities.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
