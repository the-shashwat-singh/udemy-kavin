import { Search, ShoppingCart, Heart, Bell, User, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import UdemyLogo from "@/assets/Udemy_Logo_0.svg";

const Header = () => {
  return (
    <header className="bg-background border-b border-border px-2 sm:px-4 py-3 font-['Udemy_Sans']">
      <div className="w-full flex items-center justify-between gap-2 sm:gap-4">
        {/* Left side - Logo and Explore */}
        <div className="flex items-center space-x-2 sm:space-x-6 flex-shrink-0">
          <img src={UdemyLogo} alt="Udemy" className="h-6 sm:h-8" />
          <Button variant="ghost" className="hidden sm:flex text-udemy-gray-dark hover:text-udemy-purple font-normal text-sm">
            Explore
          </Button>
        </div>

        {/* Search - Hidden on mobile, visible on tablet+ */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-4 xl:mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-udemy-gray-medium h-4 w-4" />
            <Input
              placeholder="Search for anything"
              className="pl-10 bg-white border-gray-300 focus:border-udemy-purple rounded-full w-full"
            />
          </div>
        </div>

        {/* Right side - Navigation items with responsive visibility */}
        <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
          <Button variant="ghost" className="hidden xl:flex text-udemy-gray-dark hover:text-udemy-purple font-normal px-2 text-sm">
            Plans & Pricing
          </Button>
          <Button variant="ghost" className="hidden xl:flex text-udemy-gray-dark hover:text-udemy-purple font-normal px-2 text-sm">
            Udemy Business
          </Button>
          <Button variant="ghost" className="hidden xl:flex text-udemy-gray-dark hover:text-udemy-purple font-normal px-2 text-sm">
            Teach on Udemy
          </Button>
          
          {/* Cart icon */}
          <Button variant="ghost" size="sm" className="p-2">
            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-udemy-gray-medium" />
          </Button>
          
          {/* Login and Sign Up buttons - responsive sizing */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Button variant="outline" className="font-semibold text-xs sm:text-sm px-2 sm:px-4" style={{ borderColor: 'oklch(48.41% 0.2342 293.93deg)', color: 'oklch(48.41% 0.2342 293.93deg)' }}>
              Log in
            </Button>
            <Button className="text-white font-semibold text-xs sm:text-sm px-2 sm:px-4" style={{ backgroundColor: 'oklch(48.41% 0.2342 293.93deg)' }}>
              Sign up
            </Button>
          </div>
          
          {/* Globe button for language selection */}
          <Button variant="ghost" size="sm" className="hidden sm:flex p-2">
            <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-udemy-gray-medium" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;