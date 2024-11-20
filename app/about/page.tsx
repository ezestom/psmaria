"use client";

import Image from "next/image";
import React from "react";
import factory from "@/public/factory.jpg";
import { Subtitle } from "@/components/ui/subtitle";
import { Button } from "@/components/ui/button";

function AboutSection() {
  return (
    <>
      <section className="w-full py-4  min-h-screen">
        <Button className="fixed top-5 right-5" onClick={() => window.location.href = '/'}>
          Volver
        </Button>
        <div className="container px-4 md:px-6">
          <Subtitle subtitle="Sobre Nosotros" paragraph="Conoce más sobre nosotros" />
          <article className="flex flex-col sm:flex-row">
            <div className="max-w-3xl mx-auto text-start text-sm w-full sm:w-1/2 p-2 sm:p-10">
              <p className="text-muted-foreground mb-6">
                En Plásticos Santa María, nos dedicamos a la fabricación y
                distribución de productos plásticos de la más alta calidad. Nuestra
                misión es ofrecer a nuestros clientes soluciones innovadoras y
                sostenibles que les permitan mejorar su calidad de vida y
                contribuir al cuidado del medio ambiente.
              </p>
              <p className="text-muted-foreground mb-6">
                Nuestro compromiso con la excelencia se refleja en cada uno de
                nuestros productos, los cuales son diseñados y fabricados con los
                más altos estándares de calidad. Además, contamos con un equipo de
                profesionales altamente capacitados que se encargan de garantizar
                que cada producto cumpla con las expectativas de nuestros
                clientes.
              </p>
              <p className="text-muted-foreground">
                En Plásticos Santa María, estamos comprometidos con la
                sostenibilidad y la responsabilidad social. Por eso, trabajamos
                constantemente en la implementación de prácticas y procesos
                ecoamigables que nos permitan reducir nuestro impacto en el medio
                ambiente y contribuir al desarrollo sostenible de nuestra
                comunidad
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-2 sm:p-10">
              <Image src={factory} alt="image company" className="rounded-lg object-cover h-full shadow"
              />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
