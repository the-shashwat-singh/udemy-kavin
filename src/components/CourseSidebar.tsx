import { Download, Share2, Star } from "lucide-react";
import thumbnailImage from "@/assets/thumbnail.webp";

const CourseSidebar = () => {
  return (
    <div className="space-y-4 w-full lg:w-80 lg:flex-shrink-0">
      {/* Certificate Recipient */}
      <div className="p-4">
        <h3 className="font-semibold text-udemy-gray-dark mb-3 text-sm sm:text-base">Certificate Recipient:</h3>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white text-xs sm:text-sm font-medium">KP</span>
          </div>
          <span className="font-bold text-udemy-gray-dark text-sm sm:text-base">Kavin Pillay</span>
        </div>
      </div>

      {/* Course Info */}
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-udemy-gray-dark mb-3 text-sm sm:text-base">About the Course:</h3>
        
        <img 
          src={thumbnailImage} 
          alt="Course Thumbnail" 
          className="w-full h-32 sm:h-48 object-cover rounded-lg"
        />
        
        <div className="space-y-2">
          <h4 className="text-sm sm:text-base font-medium text-udemy-gray-dark leading-tight">
            Analog Electronics - Complete Course (35+ Hours)
          </h4>
          <div className="text-udemy-gray-medium text-xs">J P</div>
          
          <div className="flex items-center space-x-1">
            <span className="text-xs font-medium text-amber-700">4.1</span>
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-2.5 h-2.5 fill-current" style={{ color: 'oklch(65% 0.08 51.53deg)' }} />
              ))}
              <Star className="w-2.5 h-2.5" style={{ color: 'oklch(65% 0.08 51.53deg)' }} />
            </div>
            <span className="text-udemy-gray-medium text-xs">(159)</span>
          </div>
          
          <div className="text-udemy-gray-medium text-xs">
            35.5 total hours • 212 lectures
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm sm:text-base font-medium text-udemy-gray-dark">₹589</span>
            <span className="text-gray-500 line-through text-xs sm:text-sm">₹2,759</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4">
        <button 
          className="border font-bold text-sm flex items-center justify-center rounded-md transition-colors duration-200 hover:bg-opacity-10 w-full px-4 py-2" 
          style={{ 
            borderColor: 'oklch(48.41% 0.2342 293.93deg)', 
            color: 'oklch(48.41% 0.2342 293.93deg)',
            backgroundColor: 'transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'oklch(48.41% 0.2342 293.93deg / 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/src/assets/certificate.png';
            link.download = 'certificate-kavin.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          <Download width="16" height="16" className="mr-2" />
          Download
        </button>
      </div>

    </div>
  );
};

export default CourseSidebar;