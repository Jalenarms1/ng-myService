import Link from "next/link";

const Hero = () => {
    return (
      <section className=" flex flex-col items-center justify-center bg-gray-800 bg-opacity-50" style={{backgroundImage: 'url(https://wallpapers.com/images/featured/golf-background-6nog7cxut9rkov5d.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className=" w-full p-10 rounded-lg text-center  mb-8">
          <h1 className="text-5xl text-white font-bold mb-4">Premium Golf Accessories</h1>
          <h2 className="text-2xl text-gray-300 mb-4">Elevate Your Game</h2>
          <p className="text-lg text-gray-400 mb-6">
            Discover our exclusive range of high-quality golf accessories designed to enhance your performance on the course.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="#catalog" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"><p>Shop</p></Link>
            <Link href="/contact" className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-gray-200 hover:text-black"><p>Contact Us</p></Link>
          </div>
        </div>
  
        {/* Sub-Navigation */}
        <div className=" p-4 rounded-lg w-full ">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="#club-covers" className="text-white hover:text-green-500"><p>Club Covers</p></Link>
            <Link href="#balls" className="text-white hover:text-green-500"><p>Balls</p></Link>
            <Link href="#gloves" className="text-white hover:text-green-500"><p>Gloves</p></Link>
            <Link href="#apparel" className="text-white hover:text-green-500"><p>Apparel</p></Link>
          </div>
          
          {/* Search Bar */}
          <div className="flex justify-center">
            <input type="text" className="w-full max-w-lg p-2 border border-gray-600 rounded-l-lg  text-white bg-transparent" placeholder="Search for products..." />
            <button className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600">Search</button>
          </div>
        </div>
      </section>
    );
};
  
export default Hero;
  