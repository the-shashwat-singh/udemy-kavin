import Header from "@/components/Header";
import CertificateCard from "@/components/CertificateCard";
import CourseSidebar from "@/components/CourseSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-udemy-gray-light">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Certificate Area */}
          <div className="lg:col-span-2">
            <CertificateCard />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CourseSidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
