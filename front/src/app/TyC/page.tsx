import React from "react";

const TyC = () => {
  return (
    <div className="flex flex-col min-h-screen pt-44 pb-20 items-center ">
      <h1 className="text-2xl font-tenor font-normal lg:text-3xl mb-12  text-center">
        Terminos y Condiciones
      </h1>
      <p className=" w-[80%] lg:w-[40%] items-center text-justify leading-7 mb-16 ">
        Bienvenido(a) a nuestro taller de fabricación de muebles a medida. Antes
        de realizar su pedido, por favor lea cuidadosamente los <span className="font-semibold">términos y
        condiciones</span> que rigen nuestra relación comercial. Al realizar un pedido,
        usted acepta estos términos.
      </p>

      <section className="flex flex-col min-h-screen w-[80%] lg:w-[40%] items-center gap-4">
        <p className="w-full text-justify leading-8">
          <span className="font-medium">1. Naturaleza del Servicio</span>
          <br />
          1.1. Somos un taller especializado en la fabricación de muebles
          personalizados, incluyendo sofás, sillas, poltronas, sofá-cama y otros
          muebles similares. <br />
          1.2. La personalización incluye selección de colores, materiales y
          diseños. <br />
          1.3. Nos encargamos exclusivamente de la fabricación del mueble. El
          transporte o retiro del producto corre por cuenta y responsabilidad
          del cliente.
        </p>
        <p className="w-full text-justify leading-8 ">
          <span className="font-medium">2. Pedido y Pago</span>
          <br />
          2.1. Para iniciar la fabricación de su mueble, se requiere un anticipo
          del 30% del costo total del pedido. Este anticipo no es reembolsable.{" "}
          <br />
          2.2. El saldo restante debe ser cancelado antes de la entrega del
          mueble o en el momento del retiro del mismo. <br />
          2.3. Cualquier solicitud de modificación en los materiales, colores o
          diseño original puede generar un costo adicional, el cual deberá ser
          cubierto por el cliente.
        </p>
        <p className="w-full text-justify leading-8 ">
          <span className="font-medium">3. Tiempos de Entrega</span> <br />
          3.1. El tiempo de fabricación será estipulado al momento de confirmar
          el pedido y puede variar según la complejidad del diseño y la
          disponibilidad de materiales. <br /> 3.2. En caso de demoras por
          motivos de fuerza mayor, el cliente será notificado de inmediato y se
          ajustará el tiempo de entrega de manera razonable.
        </p>
        <p className="w-full text-justify leading-8 ">
          <span className="font-medium">4. Garantía</span> <br />
          4.1. Ofrecemos una garantía de 6 meses que cubre los siguientes
          aspectos: Costuras defectuosas. Daños en la estructura del mueble,
          evaluados según el tipo de daño. Bisagras y mecanismos. <br /> 4.2. La
          garantía no cubre: Daños físicos causados por mascotas. Exposición a
          humedad o derrame de sustancias. Daños ocasionados por incendios,
          desastres naturales o negligencia del cliente. <br /> 4.3. Para hacer
          válida la garantía, el cliente debe presentar el comprobante de compra
          y el mueble debe ser evaluado por nuestro equipo técnico.
        </p>
        <p className="w-full text-justify leading-8 ">
          <span className="font-medium">5. Revisión del Producto</span> <br />
          5.1. Es responsabilidad del cliente inspeccionar el mueble en nuestras
          instalaciones antes de retirarlo. <br /> 5.2. Una vez que el mueble
          haya sido entregado o retirado del almacén, no se aceptarán reclamos
          por rayones materiales, colores, manchas u otros daños superficiales.          
        </p>
        <p className="w-full text-justify leading-8">
          <span className="font-medium">
            6. Limitaciones de Responsabilidad
          </span>
          <br />
          6.1. No nos hacemos responsables por daños que puedan ocurrir durante
          el transporte del mueble. <br /> 6.2. Los costos adicionales por
          almacenamiento del mueble, si no es retirado en la fecha estipulada,
          correrán por cuenta del cliente.
        </p>
        <p className="w-full text-justify leading-8 ">
          <span className="font-medium">
            7. Modificaciones a los Términos y Condiciones
          </span>
          <br />
          7.1. Nos reservamos el derecho de actualizar o modificar estos
          términos y condiciones sin previo aviso. Las modificaciones serán
          aplicables solo a pedidos realizados después de la fecha de
          actualización.
        </p>
        <p className="w-full text-justify leading-8 ">
          <span className="font-medium">8. Contacto</span>
          <br />
          Para cualquier consulta o reclamación, puede comunicarse con nosotros
          a través de los canales oficiales proporcionados en su comprobante de
          pedido.
        </p>
        <p className="w-full text-justify leading-8 ">
          <span className="font-medium">Aceptación de Términos</span> <br />
          Al confirmar su pedido, usted declara haber leído, comprendido y
          aceptado estos términos y condiciones en su totalidad.
          <br />
          <br />
          Gracias por confiar en nosotros para la fabricación de sus muebles
          personalizados. Estamos comprometidos en ofrecer productos de alta
          calidad que cumplan con sus expectativas.
        </p>
      </section>
    </div>
  );
};

export default TyC;
