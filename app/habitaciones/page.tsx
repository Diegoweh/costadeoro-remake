import type { Metadata } from "next";
import { Container } from "@/components/container";
import { GalleryCard } from "@/components/gallery-card";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Habitaciones | Hotel Costa de Oro",
  description: "Descubre las habitaciones y suites del Hotel Costa de Oro en la Zona Dorada de Mazatlán.",
};

const ROOMS = [
  {
    title: "Estándar Vista Jardín",
    images: ["/images/habitaciones/estandar_jardin/ej@900.webp"],
    description:
      "Ubicada en un edificio rodeado de jardines y cascadas, a unos cuantos pasos de la alberca y playa. Esta confortable habitación ofrece 2 camas matrimoniales y un baño completo.",
    cta: { label: "Reservar", href: "https://booking.hotelcostadeoro.mx/" },
  },
  {
    title: "Estándar Vista al Mar",
    images: ["/images/habitaciones/estandar_vm/costadeoro.habitaciones-081.webp"],
    description:
      "Contempla la resplandeciente vista del Océano Pacífico desde nuestras cómodas habitaciones, la cual ofrece 2 camas matrimoniales, un baño completo y balcón.",
    cta: { label: "Reservar", href: "https://booking.hotelcostadeoro.mx/" },
  },
  {
    title: "Estudio Queen",
    images: [
      "/images/habitaciones/estudio_queen/queen@900.webp",
      "/images/habitaciones/estudio_queen/queen-2@900.webp",
    ],
    description:
      "Siente la brisa del mar desde nuestra acogedora habitación que ofrece dos camas Queen size, cocineta, un baño privado y balcón vista al mar.",
    cta: { label: "Reservar", href: "https://booking.hotelcostadeoro.mx/" },
  },
  {
    title: "Estudio King",
    images: [
      "/images/habitaciones/estudio_king/king@900.webp",
      "/images/habitaciones/estudio_king/king-2@900.webp",
    ],
    description:
      "Disfruta de un bello atardecer desde el balcón de esta habitación, que ofrece 1 cama King size, cocineta y balcón vista al mar. Con capacidad para dos personas.",
    cta: { label: "Reservar", href: "https://booking.hotelcostadeoro.mx/" },
  },
  {
    title: "Junior Suite",
    images: [
      "/images/habitaciones/junior_suite/js@900.webp",
      "/images/habitaciones/junior_suite/js-2@900.webp",
    ],
    description:
      "Disfruta de la comodidad de esta amplia habitación que ofrece 2 camas matrimoniales, un baño completo, cocineta y balcón vista al mar.",
    cta: { label: "Consultar Precio", href: "mailto:consierge@hotelcostadeoro.mx" },
  },
  {
    title: "Suite Frente al Mar",
    images: [
      "/images/habitaciones/suite_fm/costadeoro.habitaciones-058.webp",
      "/images/habitaciones/suite_fm/costadeoro.habitaciones-060.webp",
      "/images/habitaciones/suite_fm/costadeoro.habitaciones-061.webp",
    ],
    description:
      "Vive los más hermosos atardeceres desde el balcón de nuestra clásica habitación, que te ofrece un dormitorio privado con dos camas matrimoniales, sala de estar con sofá cama doble, baño completo y cocineta.",
    cta: { label: "Reservar", href: "https://booking.hotelcostadeoro.mx/" },
  },
  {
    title: "Suite Vista al Mar",
    images: [
      "/images/habitaciones/suite_vm/suite_vfm@900.webp",
      "/images/habitaciones/suite_vm/suite_vfm-2@900.webp",
    ],
    description:
      "Descansa con el suave sonido del mar en nuestra habitación familiar la cual cuenta con un dormitorio con dos camas matrimoniales y un baño completo, sala de estar con dos sofás cama, comedor y cocineta equipada.",
    cta: { label: "Reservar", href: "https://booking.hotelcostadeoro.mx/" },
  },
  {
    title: "Master Suite",
    images: [
      "/images/habitaciones/master_suite/dof1@900.webp",
      "/images/habitaciones/master_suite/dof2@900.webp",
    ],
    description:
      "Desde su balcón disfruta de la espectacular vista al mar en nuestra habitación familiar con amplios espacios. Cuenta con dos dormitorios, uno con cama king size y el otro con dos camas matrimoniales, sala de estar con sofá cama doble, comedor, dos baños completos, cocineta equipada.",
    cta: { label: "Consultar Precio", href: "mailto:consierge@hotelcostadeoro.mx" },
  },
  {
    title: "Deluxe Vista Jardín",
    images: [
      "/images/habitaciones/deluxe_vj/costadeoro.habitaciones-040.webp",
      "/images/habitaciones/deluxe_vj/costadeoro.habitaciones-050.webp",
    ],
    description:
      "Experimenta el lujo y comodidad con un estilo moderno y fresco, donde podrás descansar en esta habitación con dos camas matrimoniales y un baño completo.",
    cta: { label: "Reservar", href: "https://booking.hotelcostadeoro.mx/" },
  },
  {
    title: "Suite Deluxe Ocean Front",
    images: [
      "/images/habitaciones/suite_dof/costadeoro.habitaciones-069.webp",
      "/images/habitaciones/suite_dof/costadeoro.habitaciones-072.webp",
      "/images/habitaciones/suite_dof/costadeoro.habitaciones-077.webp",
    ],
    description:
      "Disfruta del lujo y confort desde esta habitación vanguardista, la cual cuenta con 1 dormitorio privado con 2 camas matrimoniales, un baño completo, sofá cama, cocineta totalmente equipada y balcón frente al mar.",
    cta: { label: "Reservar", href: "https://booking.hotelcostadeoro.mx/" },
  },
];

export default function HabitacionesPage() {
  return (
    <>
      <PageHero image="/images/habitaciones/Habitacion.webp" eyebrow="Hotel Costa de Oro" title="Habitaciones" priority />

      <section className="bg-neutral-100 py-14 sm:py-20">
        <Container className="flex flex-col gap-10">
          {ROOMS.map((room) => (
            <GalleryCard key={room.title} images={room.images} title={room.title} cta={room.cta}>
              {room.description}
            </GalleryCard>
          ))}
        </Container>
      </section>
    </>
  );
}
