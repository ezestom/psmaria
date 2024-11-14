import React from 'react';
import Image from "next/image";
import pyg from "/public/companies/pyg.png";
import './company-logo.css'
import { Subtitle } from "./ui/subtitle";

const CompanyLogoSection = () => {
  const companies = [
    {
      name: "PyG",
      logo: { pyg },
      url: '#'
    },
    {
      name: "PyG",
      logo: { pyg },
      url: '#'
    },
    {
      name: "PyG",
      logo: { pyg },
      url: '#'
    },
    {
      name: "PyG",
      logo: { pyg },
      url: '#'
    },
    {
      name: "PyG",
      logo: { pyg },
      url: '#'
    },
    {
      name: "PyG",
      logo: { pyg },
      url: '#'
    },

    {
      name: "PyG",
      logo: { pyg },
      url: '#'
    },
    {
      name: "PyG",
      logo: { pyg },
      url: '#'
    },
    {
      name: "PyG",
      logo: { pyg },
      url: '#'
    },
    {
      name: "PyG",
      logo: { pyg },
      url: '#'
    },
    {
      name: "PyG",
      logo: { pyg },
      url: '#'
    },
    {
      name: "PyG",
      logo: { pyg },
      url: '#'
    },

  ];

  return (
    <section className="w-full ">
      <div className="container px-4 md:px-6">
        <Subtitle subtitle="Empresas" paragraph="Que confían en nosotros" />

        <article className="flex flex-col overflow-hidden mt-2" id='brands-container'>
          <div className="flex flex-row gap-2 p-2"
            id='brands-row'>
            <div className="flex flex-row gap-12">
              {companies.map((company, i) => (
                <a
                  href={company.url}
                  key={i}
                  target="_blank"
                  className="size-24 md:size-48">
                  <div className="p-2 flex grayscale transition duration-200 hover:grayscale-0">
                    <Image
                      alt={`${company.name} logo`}
                      className="overflow-hidden rounded-lg object-cover object-center "
                      src={company.logo.pyg}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </article>
      </div>
    </section >
  );
};

export default CompanyLogoSection;