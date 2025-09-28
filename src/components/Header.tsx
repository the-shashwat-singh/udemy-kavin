import { Search, ShoppingCart, Heart, Bell, User, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import UdemyLogo from "@/assets/Udemy_Logo_0.svg";

const Header = () => {
  return (
    <header className="bg-background border-b border-border px-4 py-3 font-['Udemy_Sans']">
      <div className="w-full flex items-center justify-between gap-4">
        {/* Left side - Logo and Explore */}
        <div className="flex items-center space-x-6 flex-shrink-0">
          <img src={UdemyLogo} alt="Udemy" className="h-8" />
          <Button variant="ghost" className="text-udemy-gray-dark hover:text-udemy-purple font-normal">
            Explore
          </Button>
        </div>

        {/* Search - Responsive with proper spacing */}
        <div className="flex-1 max-w-2xl mx-4 xl:mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-udemy-gray-medium h-4 w-4" />
            <Input
              placeholder="Search for anything"
              className="pl-10 bg-white border-gray-300 focus:border-udemy-purple rounded-full w-full"
            />
          </div>
        </div>

        {/* Right side - Navigation items with reduced spacing */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Button variant="ghost" className="hidden lg:flex text-udemy-gray-dark hover:text-udemy-purple font-normal px-2">
            Plans & Pricing
          </Button>
          <Button variant="ghost" className="hidden lg:flex text-udemy-gray-dark hover:text-udemy-purple font-normal px-2">
            Udemy Business
          </Button>
          <Button variant="ghost" className="hidden lg:flex text-udemy-gray-dark hover:text-udemy-purple font-normal px-2">
            Teach on Udemy
          </Button>
          
          {/* Cart icon */}
          <Button variant="ghost" size="sm">
            <ShoppingCart className="h-5 w-5 text-udemy-gray-medium" />
          </Button>
          
          {/* Login and Sign Up buttons with increased font weight */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="font-semibold" style={{ borderColor: 'oklch(48.41% 0.2342 293.93deg)', color: 'oklch(48.41% 0.2342 293.93deg)' }}>
              Log in
            </Button>
            <Button className="text-white font-semibold" style={{ backgroundColor: 'oklch(48.41% 0.2342 293.93deg)' }}>
              Sign up
            </Button>
          </div>
          
          {/* Globe button for language selection */}
          <Button variant="ghost" size="sm">
            <Globe className="h-5 w-5 text-udemy-gray-medium" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;