import { Card } from "@/components/ui/card";

const CertificateCard = () => {
  return (
    <Card className="p-8 bg-background shadow-sm border border-border">
      {/* Certificate Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-udemy-purple text-3xl font-bold">udemy</div>
        <div className="text-right text-xs text-udemy-gray-medium">
          <div>Certificate no: UC-82f4a880-c844-c8c3-b3ab-9fdfc688cd8</div>
          <div>Certificate url: udemy.com/UC-82f4a880-c844-c8c3-b3ab-9fdfc688cd8</div>
          <div>Reference Number: 0004</div>
        </div>
      </div>

      {/* Certificate Content */}
      <div className="space-y-6">
        <div className="text-udemy-gray-medium text-sm font-medium tracking-wider uppercase">
          Certificate of Completion
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-udemy-gray-dark leading-tight">
          Circuit Analysis - Complete Course (64+ Hours)
        </h1>
        
        <div className="text-udemy-gray-medium">
          <span className="font-medium">Instructors</span> J P
        </div>
      </div>

      {/* Student Info */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-udemy-gray-dark">Shashwat Singh</h2>
          <div className="space-y-1 text-udemy-gray-medium">
            <div><span className="font-medium">Date</span> September 28, 2025</div>
            <div><span className="font-medium">Length</span> 64 total hours</div>
          </div>
        </div>
      </div>

      {/* Certificate Description */}
      <div className="mt-8 text-udemy-gray-medium leading-relaxed">
        This certificate above verifies that <span className="text-udemy-purple font-medium">Shashwat Singh</span> successfully completed the course{" "}
        <span className="text-udemy-purple font-medium">Mastering Data Structures & Algorithms using C and C++</span> on 03/24/2025 as taught by{" "}
        <span className="text-udemy-purple font-medium">Abdul Bari</span> on Udemy. The certificate indicates the entire course was completed as validated by 
        the student. The course duration represents the total video hours of the course at time of most recent completion.
      </div>
    </Card>
  );
};

export default CertificateCard;