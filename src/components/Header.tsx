import { Search, ShoppingCart, Heart, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <div className="text-udemy-purple text-2xl font-bold">udemy</div>
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-udemy-gray-dark hover:text-udemy-purple">
              Explore
            </Button>
          </nav>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-udemy-gray-medium h-4 w-4" />
            <Input
              placeholder="Search for anything"
              className="pl-10 bg-udemy-gray-light border-udemy-gray-light focus:border-udemy-purple"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:flex text-udemy-gray-dark hover:text-udemy-purple">
            Udemy Business
          </Button>
          <Button variant="ghost" className="hidden md:flex text-udemy-gray-dark hover:text-udemy-purple">
            Teach on Udemy
          </Button>
          <Button variant="ghost" className="hidden md:flex text-udemy-gray-dark hover:text-udemy-purple">
            My learning
          </Button>
          
          <Button variant="ghost" size="sm">
            <Heart className="h-5 w-5 text-udemy-gray-medium" />
          </Button>
          <Button variant="ghost" size="sm">
            <ShoppingCart className="h-5 w-5 text-udemy-gray-medium" />
          </Button>
          <Button variant="ghost" size="sm">
            <Bell className="h-5 w-5 text-udemy-gray-medium" />
          </Button>
          
          <div className="w-8 h-8 bg-udemy-gray-dark rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">SS</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;