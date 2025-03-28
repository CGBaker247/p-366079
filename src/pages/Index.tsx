
import React, { useState, useEffect } from "react";
import ProductCarousel from "@/components/product/ProductCarousel";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*');
        
        if (error) {
          throw error;
        }
        
        setProducts(data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-[#FFFBFA]">
      <header className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-[#281D1B]">
          Footwear Collection
        </h1>
        <p className="text-[#281D1B] mt-2">Discover our latest shoe designs</p>
      </header>

      {loading ? (
        <div className="container mx-auto text-center py-12">
          <p className="text-[#281D1B]">Loading products...</p>
        </div>
      ) : (
        <ProductCarousel products={products} />
      )}
    </main>
  );
};

export default Index;
