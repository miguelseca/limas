import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-l lg:text-[2.5rem] tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Feito com carinho pelo meu tutor.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="mailto: miguel.seca@gmail.com"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              miguel.seca@gmail.com
            </a>
            <a
              href="https://www.instagram.com/limas_seca?igsh=dnB5bnd1bG5neTY5"
              className="mx-3 font-bold hover:underline"
            >
              Ver no instagram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
