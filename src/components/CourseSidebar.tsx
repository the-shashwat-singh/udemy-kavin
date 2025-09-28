import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Share2, Star } from "lucide-react";
import circuitImage from "@/assets/circuit-course.jpg";

const CourseSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Certificate Recipient */}
      <Card className="p-4">
        <h3 className="font-semibold text-udemy-gray-dark mb-3">Certificate Recipient:</h3>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-udemy-gray-dark rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">SS</span>
          </div>
          <span className="font-medium text-udemy-gray-dark">Shashwat Singh</span>
        </div>
      </Card>

      {/* Course Info */}
      <Card className="p-4">
        <h3 className="font-semibold text-udemy-gray-dark mb-3">About the Course:</h3>
        
        <img 
          src={circuitImage} 
          alt="Circuit Analysis Course - Electronic circuit board with components" 
          className="w-full h-32 object-cover rounded-lg mb-4"
        />
        
        <div className="space-y-2">
          <h4 className="font-semibold text-udemy-gray-dark">
            Circuit Analysis - Complete Course (64+ Hours)
          </h4>
          <div className="text-udemy-gray-medium text-sm">J P</div>
          
          <div className="flex items-center space-x-1">
            <span className="text-udemy-orange font-bold">4.5</span>
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-4 h-4 fill-udemy-orange text-udemy-orange" />
              ))}
              <Star className="w-4 h-4 text-udemy-orange" />
            </div>
            <span className="text-udemy-gray-medium text-sm">(7)</span>
          </div>
          
          <div className="text-udemy-gray-medium text-sm">
            64 total hours • 317 lectures
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-udemy-gray-dark">₹499</span>
            <span className="text-udemy-gray-medium line-through">₹799</span>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button className="w-full bg-udemy-purple hover:bg-udemy-purple/90 text-white">
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
        <Button variant="outline" className="w-full border-udemy-purple text-udemy-purple hover:bg-udemy-purple/5">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </div>

      {/* Update Certificate */}
      <div className="text-sm text-udemy-gray-medium">
        <span className="text-udemy-purple font-medium cursor-pointer hover:underline">
          Update your certificate
        </span>{" "}
        with your correct name or preferred language
      </div>
    </div>
  );
};

export default CourseSidebar;