import { Card } from "@/components/ui/card";
import CertificateImage from "@/assets/certificate.png";

const CertificateDocument = () => {
  return (
    <Card className="border border-border shadow-lg overflow-hidden w-full">
      {/* Certificate Image */}
      <div className="w-full">
        <img 
          src={CertificateImage} 
          alt="Certificate of Completion" 
          className="w-full h-auto object-contain max-h-[70vh] sm:max-h-[80vh]"
        />
      </div>
    </Card>
  );
};

export default CertificateDocument;