import { Card } from "@/components/ui/card";
import CertificateImage from "@/assets/certificate.png";

const CertificateDocument = () => {
  return (
    <Card 
      className="border border-border shadow-lg overflow-hidden"
      style={{ width: '945px', height: '703.35px' }}
    >
      {/* Certificate Image */}
      <div className="w-full h-full">
        <img 
          src={CertificateImage} 
          alt="Certificate of Completion" 
          className="w-full h-full object-contain"
        />
      </div>
    </Card>
  );
};

export default CertificateDocument;