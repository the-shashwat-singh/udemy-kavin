import { Card } from "@/components/ui/card";

const CertificateDocument = () => {
  return (
    <Card className="bg-background border border-border shadow-lg">
      {/* Certificate proper - matching exact layout */}
      <div className="p-12 min-h-[600px] flex flex-col">
        {/* Header with logo and certificate details */}
        <div className="flex items-start justify-between mb-16">
          <div className="text-udemy-purple text-4xl font-bold">udemy</div>
          <div className="text-right text-xs text-udemy-gray-medium space-y-1">
            <div>Certificate no: UC-82f4a880-c844-c8c3-b3ab-9fdfc688cd8</div>
            <div>Certificate url: udemy.com/UC-82f4a880-c844-c8c3-b3ab-9fdfc688cd8</div>
            <div>Reference Number: 0004</div>
          </div>
        </div>

        {/* Certificate content */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-8">
            <div className="text-udemy-gray-medium text-sm font-medium tracking-[0.2em] uppercase">
              Certificate of Completion
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-udemy-gray-dark leading-tight">
                Circuit Analysis - Complete<br />
                Course (64+ Hours)
              </h1>
              
              <div className="text-udemy-gray-medium text-lg">
                <span className="font-medium">Instructors</span> J P
              </div>
            </div>
          </div>

          {/* Student info at bottom */}
          <div className="space-y-4 mt-20">
            <h2 className="text-4xl font-bold text-udemy-gray-dark">Shashwat Singh</h2>
            <div className="space-y-1 text-udemy-gray-medium text-lg">
              <div><span className="font-medium">Date</span> September 28, 2025</div>
              <div><span className="font-medium">Length</span> 64 total hours</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CertificateDocument;