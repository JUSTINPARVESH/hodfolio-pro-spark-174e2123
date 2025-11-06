import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Award, BookOpen } from "lucide-react";

export default function Research() {
  const patents = [
    {
      title: "ADVANCING BREAST CANCER DETECTION WITH MACHINE LEARNING AND MASS IMAGING",
      appNo: "202441059668 A",
      date: "09/08/2024",
    },
    {
      title: "A SYSTEM AND METHOD OF PLANNING AND BREEDING BASED ON INTERNET OF THINGS WITH CLOUD SERVICE",
      appNo: "201911045633",
      date: "15/11/2019",
    },
    {
      title: "INTERNET OF THINGS AND INTELLIGENT ENVIRONMENTAL MANAGEMENT AND SMART AGRICULTURE SYSTEM",
      appNo: "201941029357",
      date: "09/08/2019",
    },
  ];

  const recentPublications = [
    {
      title: "Real time risk monitoring system for Oil and gas Industry Using AI and IOT",
      journal: "Indica Journal",
      year: "2025",
      doi: "10.141448",
      type: "UGC Care",
    },
    {
      title: "Enhanced X-wave recognition in ECG signal using Max-Min Thresholds and detection of QRS complex",
      journal: "Journal of Intelligent & Fuzzy Systems",
      year: "2024",
      doi: "10.3233/JIFS-241456",
    },
    {
      title: "Enhancing Signal Processing Measurement for Pulse Rate Variability by Novel Algorithm",
      journal: "International Journal of Intelligent Systems and Applications in Engineering",
      year: "2024",
      issn: "2147-6799",
    },
    {
      title: "Exploring the Feasibilities of Applying Min-Max Threshold Analysis with Machine Learning",
      journal: "IEEE Xplore",
      year: "2023",
      doi: "10.1109/ICECAA58104.2023.10212176",
    },
    {
      title: "Hessian Distributed Ant Optimized Perron–Frobenius Eigen Centrality for Social Networks",
      journal: "ISPRS Int. J. Geo-Inf.",
      year: "2023",
      doi: "10.3390/ijgi12080316",
    },
  ];

  const books = [
    {
      title: "Ethics and Social Implications of AI",
      publisher: "Leilani Katie Publication",
      isbn: "978-93-6348-472-6",
      year: "2025",
    },
    {
      title: "Solar and Wind Energy",
      publisher: "Scientific International Publishing House",
      isbn: "978-93-6674-125-3",
      year: "2025",
    },
    {
      title: "Wireless Communications",
      publisher: "Charulatha Publications",
      isbn: "9788194315209",
    },
    {
      title: "Circuit Theory",
      publisher: "Charulatha Publication",
    },
    {
      title: "Basic Electrical, Electronics & Instrumentation Engineering",
      publisher: "Charulatha Publication",
    },
  ];

  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold">Research & Publications</h1>

        <Tabs defaultValue="publications" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="patents">Patents</TabsTrigger>
            <TabsTrigger value="books">Books</TabsTrigger>
          </TabsList>

          <TabsContent value="publications" className="mt-6">
            <div className="mb-6 flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">International Journal Publications</h2>
            </div>
            <p className="mb-6 text-muted-foreground">
              Total Publications: <span className="font-semibold text-primary">25+</span>
            </p>
            <div className="space-y-4">
              {recentPublications.map((pub, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{pub.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">Journal:</span> {pub.journal}
                      </p>
                      <p>
                        <span className="font-medium">Year:</span> {pub.year}
                      </p>
                      {pub.doi && (
                        <p>
                          <span className="font-medium">DOI:</span> {pub.doi}
                        </p>
                      )}
                      {pub.issn && (
                        <p>
                          <span className="font-medium">ISSN:</span> {pub.issn}
                        </p>
                      )}
                      {pub.type && (
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {pub.type}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Showing recent publications. Contact for complete publication list.
            </p>
          </TabsContent>

          <TabsContent value="patents" className="mt-6">
            <div className="mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Patents Filed</h2>
            </div>
            <div className="space-y-4">
              {patents.map((patent, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{patent.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">Application No:</span> {patent.appNo}
                      </p>
                      <p>
                        <span className="font-medium">Publication Date:</span> {patent.date}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="books" className="mt-6">
            <div className="mb-6 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Books Published</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {books.map((book, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{book.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">Publisher:</span> {book.publisher}
                      </p>
                      {book.isbn && (
                        <p>
                          <span className="font-medium">ISBN:</span> {book.isbn}
                        </p>
                      )}
                      {book.year && (
                        <p>
                          <span className="font-medium">Year:</span> {book.year}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
