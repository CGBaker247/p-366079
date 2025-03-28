
import React from "react";

interface ProductCardProps {
  id: string;
  image: string;
  altText: string;
  name: string;
  price: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  altText,
  name,
  price,
}) => {
  return (
    <article className="flex min-w-[336px] flex-col items-start gap-3 max-md:min-w-[280px] max-sm:min-w-60">
      <img
        src={image}
        alt={altText}
        className="w-full aspect-square rounded-[8px] border-[1.5px_solid_rgba(0,_0,_0,_0.00)]"
      />
      <div className="flex flex-col items-start w-full">
        <h3 className="text-[#281D1B] text-[15px] font-semibold leading-5 w-full overflow-hidden text-ellipsis">
          {name}
        </h3>
        <p className="text-[#281D1B] text-[15px] font-normal leading-5">
          {price}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
