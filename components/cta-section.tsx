import React from 'react';
import { Subtitle } from './ui/subtitle';
import { Form } from './Form/Form';

const CTASignUpSection = () => {

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <Subtitle subtitle='Estamos aquí para ayudarte' paragraph='Envianos tus consultas y te responderemos a la brevedad' />
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              No dejes de escribirnos para consultas, dudas, sugerencias, cotizaciones o cualquier otro tipo de información que necesites. Estamos aquí para ayudarte.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Form
              h1='hola'
              subtitle='subtitle'
              button='Enviar consulta'
              toast_message='toast_message'
              name='nombre'
              company='empresa'
              email='email'
              email_placeholder='email_placeholder'
              message='mensaje'
              message_placeholder='message_placeholder'
              send='Enviar'
              message_2='message_2'
            />


          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASignUpSection;
