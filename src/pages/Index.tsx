import Header from "@/components/Header";
import CertificateDocument from "@/components/CertificateDocument";
import VerificationText from "@/components/VerificationText";
import CourseSidebar from "@/components/CourseSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-udemy-gray-light">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        <div 
          className="flex flex-row items-start gap-4 lg:gap-6"
          style={{ width: '1340px', height: '788.13px' }}
        >
          {/* Main Certificate Area */}
          <div className="flex flex-col">
            <CertificateDocument />
            <div className="mt-4">
              <VerificationText />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="flex-shrink-0">
            <CourseSidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
