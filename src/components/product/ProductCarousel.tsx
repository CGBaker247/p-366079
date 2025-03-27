import React, { useRef } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  image: string;
  altText: string;
  name: string;
  price: string;
}

interface ProductCarouselProps {
  products: Product[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="flex flex-col items-start flex-1 relative">
      <div className="flex flex-col items-start gap-6 w-full bg-[#FFFBFA] relative px-0 py-12 max-md:px-0 max-md:py-8 max-sm:px-0 max-sm:py-6">
        <div
          ref={scrollContainerRef}
          className="flex items-start gap-6 w-full relative overflow-x-auto max-md:gap-4 max-sm:gap-3"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              altText={product.altText}
              name={product.name}
              price={product.price}
            />
          ))}
          <div className="absolute h-full flex items-center bg-gradient-to-l from-[#FFFBFA] right-0 max-md:pl-8 max-sm:pl-6">
            <button
              onClick={handleScrollRight}
              aria-label="Scroll right"
              className="flex justify-center items-center bg-[#FFFBFA] shadow-[0px_1.5px_4px_0px_rgba(0,0,0,0.16)] p-2 rounded-[18px]"
            >
              <div className="w-5 h-5 flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[24px] h-[24px]"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="#281D1B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
