import React from 'react';
import { Subtitle } from './ui/subtitle';
import { BentoGridSecondDemo } from './bento-grid-demo';

interface Category {
  name: string;
  icon: string;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <section className="w-full bg-white" id="categories-section">
      {/* <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid grid-cols-2 grid-rows-2 gap-8 bg-red-100">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center text-center">
          <a href='#' className="w-full h-full hover:scale-105 transition hover:grayscale-0  grayscale mb-4 flex items-center justify-center text-5xl text-gray-800 bg-gray-100 rounded-md ">
          {category.icon}
          </a>
          <h3 className="text-base   text-gray-900">{category.name}</h3>
          </div>
          ))}
          </div>
          </div> */}
      <Subtitle subtitle='Categorias' paragraph='Variedad de productos' />
      <BentoGridSecondDemo />
    </section>
  );
};

export default CategorySection;
