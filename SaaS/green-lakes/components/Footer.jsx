const Footer = () => {
    return (
      <footer className="bg-blue-950 mx-8 p-4 mt-12 rounded-tl-md rounded-tr-md">
        <div className="container mx-auto text-center text-white">
          <p>&copy; {new Date().getFullYear()} Golf Gear. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  