import type { Metadata } from "next";
import { Container } from "@/components/container";
import { GalleryCard } from "@/components/gallery-card";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Rooms | Hotel Costa de Oro",
  description: "Discover the rooms and suites at Hotel Costa de Oro in the Golden Zone of Mazatlán.",
};

const ROOMS = [
  {
    title: "Standard Garden View",
    images: ["/images/habitaciones/estandar_jardin/ej@900.webp"],
    description:
      "Located in a building surrounded by gardens and cascades, just a few steps from the pool and beach. This comfortable room has 2 Full-size beds and a full bathroom.",
    cta: { label: "Book", href: "https://booking.hotelcostadeoro.mx/" },
  },
  {
    title: "Standard Ocean View",
    images: ["/images/habitaciones/estandar_vm/costadeoro.habitaciones-081.webp"],
    description:
      "Behold the splendorous view of the Pacific Ocean from these comfortable rooms. Each offers 2 Full-size beds, a full bathroom and balcony.",
    cta: { label: "Book", href: "https://booking.hotelcostadeoro.mx/" },
  },
  {
    title: "Queen Studio",
    images: [
      "/images/habitaciones/estudio_queen/queen@900.webp",
      "/images/habitaciones/estudio_queen/queen-2@900.webp",
    ],
    description:
      "Feel the sea breeze from this welcoming room, that offers two Queen-size beds, kitchenette, private bathroom and ocean view balcony.",
    cta: { label: "Book", href: "https://booking.hotelcostadeoro.mx/" },
  },
  {
    title: "King Studio",
    images: [
      "/images/habitaciones/estudio_king/king@900.webp",
      "/images/habitaciones/estudio_king/king-2@900.webp",
    ],
    description:
      "Enjoy beautiful sunsets from this special room, that offers 1 King-size bed, kitchenette, private bathroom and ocean view balcony. Maximum capacity: 2 guests.",
    cta: { label: "Book", href: "https://booking.hotelcostadeoro.mx/" },
  },
  {
    title: "Junior Suite",
    images: [
      "/images/habitaciones/junior_suite/js@900.webp",
      "/images/habitaciones/junior_suite/js-2@900.webp",
    ],
    description:
      "Enjoy the comfort of this spacious room, that offers 2 Full-size beds, full bathroom, kitchenette and ocean view balcony.",
    cta: { label: "Book", href: "mailto:consierge@hotelcostadeoro.mx" },
  },
  {
    title: "Oceanfront Suite",
    images: [
      "/images/habitaciones/suite_fm/costadeoro.habitaciones-058.webp",
      "/images/habitaciones/suite_fm/costadeoro.habitaciones-060.webp",
      "/images/habitaciones/suite_fm/costadeoro.habitaciones-061.webp",
    ],
    description:
      "Enjoy breathtaking sunsets from the balcony of our classic room, which offers a private bedroom with two Full-size beds, living area with a double sofa bed, full bathroom and kitchenette.",
    cta: { label: "Book", href: "https://booking.hotelcostadeoro.mx/" },
  },
  {
    title: "Ocean View Suite",
    images: [
      "/images/habitaciones/suite_vm/suite_vfm@900.webp",
      "/images/habitaciones/suite_vm/suite_vfm-2@900.webp",
    ],
    description:
      "Relax to the sound of soft ocean waves in our family-style room, offering a bedroom with two Full-size beds, a full bathroom, living area with two sofa beds, dining area and equipped kitchenette.",
    cta: { label: "Book", href: "https://booking.hotelcostadeoro.mx/" },
  },
  {
    title: "Master Suite",
    images: [
      "/images/habitaciones/master_suite/dof1@900.webp",
      "/images/habitaciones/master_suite/dof2@900.webp",
    ],
    description:
      "Delight in the most spectacular ocean view from your balcony, in our spacious, family-style suite. It has two bedrooms, one with a King-size bed and the other with two Full-size beds, living area with a double sofa bed, dining area, two full bathrooms and equipped kitchenette.",
    cta: { label: "Book", href: "mailto:consierge@hotelcostadeoro.mx" },
  },
  {
    title: "Deluxe Garden View",
    images: [
      "/images/habitaciones/deluxe_vj/costadeoro.habitaciones-040.webp",
      "/images/habitaciones/deluxe_vj/costadeoro.habitaciones-050.webp",
    ],
    description:
      "Experience stylish, modern luxury and comfort, where you can relax in this room that offers two Full-size beds and a full bathroom.",
    cta: { label: "Book", href: "https://booking.hotelcostadeoro.mx/" },
  },
  {
    title: "Deluxe Oceanfront Suite",
    images: [
      "/images/habitaciones/suite_dof/costadeoro.habitaciones-069.webp",
      "/images/habitaciones/suite_dof/costadeoro.habitaciones-072.webp",
      "/images/habitaciones/suite_dof/costadeoro.habitaciones-077.webp",
    ],
    description:
      "Enjoy the high luxury and comfort of this state-of-the-art room, offering a private bedroom with two Full-size beds, a full bathroom, sofa bed, totally-equipped kitchenette and beachfront balcony.",
    cta: { label: "Book", href: "https://booking.hotelcostadeoro.mx/" },
  },
];

export default function HabitacionesPageEn() {
  return (
    <>
      <PageHero image="/images/habitaciones/Habitacion.webp" eyebrow="Hotel Costa de Oro" title="Rooms" priority />

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
