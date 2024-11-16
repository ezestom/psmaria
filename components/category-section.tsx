import React from 'react';
import { Subtitle } from './ui/subtitle';

interface Category {
  name: string;
  icon: string;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <section className="w-full py-20 bg-white" id="categories-section">
      <div className="max-w-screen-xl mx-auto px-8">
        <Subtitle subtitle='Categorias' paragraph='Variedad de productos' />
        <div className="flex flex-wrap justify-center gap-10">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <a href='#' className="size-20 hover:scale-105 transition hover:grayscale-0 sm:size-32 grayscale mb-4 flex items-center justify-center text-5xl text-gray-800 bg-gray-100 rounded-full">
                {category.icon}
              </a>
              <h3 className="text-base   text-gray-900">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
