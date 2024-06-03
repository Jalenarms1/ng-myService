import Image from "next/image";

const products = [
    { id: 1, name: 'Golf Club Cover', price: '$29.99', image: '/images/cover.jpg' },
    { id: 2, name: 'Golf Ball Set', price: '$19.99', image: '/images/balls.jpg' },
    { id: 3, name: 'Golf Glove', price: '$14.99', image: '/images/glove.jpg' },
    // Add more products as needed
];
  
const Catalog = () => {
    return (
        <section id="catalog" className="py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Shop Our Collection</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {products.map(product => (
                    <div key={product.id} className="border p-4 rounded-lg">
                    <Image src={product.image} alt={product.name} width={50} height={50} className="w-full h-64 object-cover mb-4 rounded"/>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.price}</p>
                    <a href="#" className="bg-green-500 text-white px-4 py-2 rounded">View Product</a>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default Catalog;
