import { LandPlot } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full relative p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <LandPlot className="text-green-600 text-3xl mr-2" />
          <span className="text-green-600 text-2xl font-bold">Golf Gear</span>
        </div>
        <div className="flex space-x-4">
          <Link href="/">
            <p className="text-white hover:text-gray-400">Home</p>
          </Link>
          <Link href="/about">
            <p className="text-white hover:text-gray-400">About</p>
          </Link>
          <Link href="/shop">
            <p className="text-white hover:text-gray-400">Shop</p>
          </Link>
          <Link href="/contact">
            <p className="text-white hover:text-gray-400">Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
