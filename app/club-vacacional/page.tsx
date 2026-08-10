import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Club Vacacional | Hotel Costa de Oro",
  description: "Costa de Oro Vacation Club: membresías, beneficios exclusivos y programa de referidos.",
};

const BENEFITS_LEFT = [
  { icon: "/images/clubv/iconos/regalo.svg", label: "Regalo bienvenida." },
  { icon: "/images/clubv/iconos/calendario.svg", label: "Libertad de elección de fechas, semanas y destinos." },
  { icon: "/images/clubv/iconos/comida.svg", label: "Servicio de concierge durante su estancia." },
  { icon: "/images/clubv/iconos/check_out.svg", label: "Late check out sin costo, previa solicitud y sujeto a disponibilidad." },
];

const BENEFITS_RIGHT = [
  { icon: "/images/clubv/iconos/diamante.svg", label: "30% de descuento en Joyerías Rubio." },
  { icon: "/images/clubv/iconos/gancho.svg", label: "10% de descuento en Boutique Gaviota." },
  { icon: "/images/clubv/iconos/resturante.svg", label: "20% de descuento en Alimentos y Bebidas en Plan Europeo." },
  { icon: "/images/clubv/iconos/infinito.svg", label: "Tarifa preferencial en Plan Europeo o Plan Todo Incluido." },
  { icon: "/images/clubv/iconos/star.svg", label: "Trato personalizado antes, durante y después de su estancia." },
];

export default function ClubVacacionalPage() {
  return (
    <>
      <PageHero image="/images/clubv/background1920px.webp" eyebrow="Hotel Costa de Oro" title="Club Vacacional" priority />

      <section
        className="bg-cover bg-center py-16 sm:py-20"
        style={{ backgroundImage: "linear-gradient(rgba(249,249,249,.92),rgba(249,249,249,.92)), url(/images/clubv/bacground_huesded.webp)" }}
      >
        <Container className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:text-left">
          <div className="lg:w-1/3">
            <h1 className="font-serif text-3xl italic text-brand-gold-dark sm:text-4xl">De huésped a Familia</h1>
            <p className="mt-2 text-xl text-[#494949]">Conoce una mejor manera de viajar, única y diferente</p>
            <hr className="mx-auto mt-4 w-24 border-brand-gold-dark lg:mx-0" />
          </div>
          <div className="flex flex-col gap-4 lg:w-2/3">
            <p className="text-lg text-[#878787]">
              Costa de Oro Beach Hotel presenta a Costa de Oro Vacation Club, su club vacacional que ofrece un programa a medida, con ventajas y beneficios exclusivos para todos sus socios.
            </p>
            <p className="text-lg text-[#878787]">
              Como Socio, Costa de Oro Vacation Club te ofrece la libertad de elegir el destino de tu preferencia y el nivel de membresía que mejor se adepte a tu estilo de vida, desde 5 hasta 30 años, pensando en que disfrutes al máximo tu estancia con nosotros.
            </p>
          </div>
        </Container>

        <div className="mx-auto mt-12 flex max-w-[1400px] flex-wrap justify-center gap-2 px-4">
          <div className="relative aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-xl sm:w-[45%]">
            <Image src="/images/clubv/imgl.png" alt="Club Vacacional Costa de Oro" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-xl sm:w-[45%]">
            <Image src="/images/clubv/imgr.png" alt="Club Vacacional Costa de Oro" fill className="object-cover" />
          </div>
        </div>

        <Container className="mt-16 flex flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:text-left">
          <div className="lg:w-1/3">
            <h2 className="font-serif text-2xl text-[#494949] sm:text-3xl">Comparte tus momentos</h2>
            <h1 className="font-serif text-3xl italic text-brand-gold-dark sm:text-5xl">más especiales</h1>
          </div>
          <div className="lg:w-2/3">
            <p className="mb-4 text-lg text-[#878787]">
              Costa de Oro Vacation Club te otorga acceso a una membresía con numerosas posibilidades que cambiarán tu manera de viajar para siempre, conoce los diferentes niveles de membresías desde 20 semanas o más, para que viajes a todos los lugares que siempre has soñado.
            </p>
            <ul className="flex flex-col gap-3 text-left text-lg text-brand-gold-dark">
              <li className="list-disc pl-1 marker:text-brand-gold-dark">Acceso a más de 1,000,000 de diferentes hoteles.</li>
              <li className="list-disc pl-1 marker:text-brand-gold-dark">Flexibilidad total para elegir cómo, cuándo y dónde viajar.</li>
              <li className="list-disc pl-1 marker:text-brand-gold-dark">Prioridad de reservas en nuestro Hotel.</li>
              <li className="list-disc pl-1 marker:text-brand-gold-dark">Posibilidad de compartir la membresía con familiares y amigos.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="relative h-[45vh] min-h-[280px] w-full">
        <Image src="/images/clubv/bacground_pareja.png" alt="" fill className="object-cover" />
      </section>

      <section className="bg-[#eae9e5] px-4 py-16 sm:py-20">
        <Container className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="lg:w-1/2">
            <h1 className="mb-2 text-3xl font-medium text-[#494949] sm:text-4xl">
              <span className="text-brand-gold-dark">BENEFICIOS</span> EXCLUSIVOS
            </h1>
            <hr className="mb-8 w-24 border-brand-gold-dark" />
            <ul className="flex flex-col gap-5">
              {BENEFITS_LEFT.map((b) => (
                <li key={b.label} className="flex items-center gap-4 text-lg text-[#494949]">
                  <Image src={b.icon} alt="" width={56} height={56} className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
                  {b.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:mt-24 lg:w-1/2">
            <ul className="flex flex-col gap-5">
              {BENEFITS_RIGHT.map((b) => (
                <li key={b.label} className="flex items-center gap-4 text-lg text-[#494949]">
                  <Image src={b.icon} alt="" width={56} height={56} className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
                  {b.label}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white px-4 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-10 lg:flex-row">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl lg:w-1/2">
            <Image src="/images/clubv/refe_background.webp" alt="Programa de referidos" fill className="object-cover" />
          </div>
          <div className="flex flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
            <h1 className="font-serif text-3xl italic text-[#494949] sm:text-4xl">
              <span className="text-brand-gold-dark">Programa de</span> referidos
            </h1>
            <hr className="my-4 w-16 border-brand-gold-dark" />
            <p className="mb-4 text-lg text-[#878787]">
              Premiamos tu fidelidad recibiendo valiosas recompensas, a través de nuestro programa de referidos, invitando a tus familiares o amigos a conocer los beneficios de viajar como Socio de Costa de Oro Vacation Club.
            </p>
            <p className="mb-4 text-lg text-brand-gold-dark">
              Aprovecha la oportunidad de compartir momentos inolvidables, multiplicar tu diversión y vivir una muy grata estancia con tus familiares o amigos.
            </p>
            <p className="text-[#878787]">Puedes consultar cómo participar en este programa en</p>
            <a href="mailto:concierge@hotelcostadeoro.mx" className="mb-4 font-extrabold text-[#878787]">
              costatiempo@hotelcostadeoro.mx
            </a>
            <a
              href="mailto:ventasvaclub@hotelcostadeoro.mx"
              className="rounded-md bg-brand-gold-dark px-9 py-3 font-bold text-white shadow-lg shadow-black/20 transition hover:bg-brand-gold-accent"
            >
              Consultar
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
