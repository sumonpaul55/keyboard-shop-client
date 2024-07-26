
const FeaturedBrands = ({ brands }: any) => {
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Featured Brands</h2> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {brands.map((brand: any, index: number) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="w-full h-40 object-cover mb-4 rounded-md"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{brand.name}</h3>
                            {/* <p className="text-gray-600">{brand.description}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedBrands;
