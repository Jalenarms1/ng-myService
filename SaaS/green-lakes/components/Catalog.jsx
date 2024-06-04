import Image from "next/image";
import { products } from "@/data/products";


  
const Catalog = () => {
    return (
        <section id="catalog" className="py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Shop Our Collection</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {products.slice(0,4).map(product => (
                    <div key={product.id} className="border p-4 rounded-lg shadow-md shadow-zinc-200 hover:shadow-zinc-400 cursor-pointer flex flex-col justify-between">
                    <Image src={product.image} alt={product.name} width={75} height={75} className="w-full h-64 object-cover mb-4 rounded"/>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.price}</p>
                    <a href="#" className="bg-green-500 text-white px-4 py-2 rounded text-center">View Product</a>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default Catalog;
