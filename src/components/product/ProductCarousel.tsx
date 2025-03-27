
import React, { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    // Check if scroll buttons should be displayed on mount
    checkScrollButtons();
    
    // Add scroll event listener
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons);
      
      // Re-check when window resizes
      window.addEventListener("resize", checkScrollButtons);
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScrollButtons);
      }
      window.removeEventListener("resize", checkScrollButtons);
    };
  }, []);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

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
        <div className="container mx-auto flex justify-between w-full mb-4">
          <h2 className="text-xl font-semibold text-[#281D1B]">Popular Products</h2>
          <div className="flex gap-2">
            <button
              onClick={handleScrollLeft}
              aria-label="Scroll left"
              disabled={!canScrollLeft}
              className={`flex justify-center items-center bg-[#FFFBFA] border border-gray-200 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12)] p-3 rounded-full hover:bg-gray-50 transition-all ${
                !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ArrowLeft size={20} className="text-[#281D1B]" />
            </button>
            <button
              onClick={handleScrollRight}
              aria-label="Scroll right"
              disabled={!canScrollRight}
              className={`flex justify-center items-center bg-[#FFFBFA] border border-gray-200 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12)] p-3 rounded-full hover:bg-gray-50 transition-all ${
                !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ArrowRight size={20} className="text-[#281D1B]" />
            </button>
          </div>
        </div>
        
        <div className="container mx-auto">
          <div
            ref={scrollContainerRef}
            className="flex items-start gap-6 w-full relative overflow-x-auto scrollbar-hide max-md:gap-4 max-sm:gap-3 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
