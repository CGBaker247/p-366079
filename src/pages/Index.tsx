
import React from "react";
import ProductCarousel from "@/components/product/ProductCarousel";

const Index = () => {
  // Sample product data
  const products = [
    {
      id: "1",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c5fa4fd8ddab4661eb57d8d8ed27fd7bff16f716",
      altText: "Nike Air Max shoes",
      name: "Nike Air Max",
      price: "£120",
    },
    {
      id: "2",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d761d8a25d57c293602a4e76b31144b0bb330e4e",
      altText: "Adidas Ultraboost",
      name: "Adidas Ultraboost",
      price: "£180",
    },
    {
      id: "3",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8f7f428641a48198aea6676cc0d77461365f060b",
      altText: "Puma Suede Classic",
      name: "Puma Suede Classic",
      price: "£70",
    },
    {
      id: "4",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0659c67ba8da818a755f1c43ff967ed9ad19043c",
      altText: "Reebok Classic",
      name: "Reebok Classic",
      price: "£90",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFFBFA]">
      <header className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-[#281D1B]">
          Footwear Collection
        </h1>
        <p className="text-[#281D1B] mt-2">Discover our latest shoe designs</p>
      </header>

      <div className="flex w-full flex-col items-start bg-[#FFFBFA] px-12 py-0 max-md:px-6 max-md:py-0 max-sm:px-4 max-sm:py-0">
        <div className="flex items-start gap-12 w-full relative max-md:gap-6 max-sm:gap-4">
          <ProductCarousel products={products} />
        </div>
      </div>
    </main>
  );
};

export default Index;
