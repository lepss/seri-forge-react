import { Mail } from "lucide-react";

export const ContactCard = () => {
  return (
    <div
      id="contact"
      className="bg-white text-black text-center flex flex-col w-full h-full md:text-left justify-center items-center gap-10 py-20 px-20 md:px-20"
    >
      <h2 className="text-5xl uppercase font-bold">Nous contacter</h2>
      <div className="flex flex-col w-full h-full md:flex-row md:text-left justify-center items-center gap-10 md:gap-20">
        <Mail size={150} className="" />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5 text-xl">
            <p>
              Demande de prix à envoyer à{" "}
              <a
                className="font-bold whitespace-nowrap underline-offset-2 underline"
                href="mailto:contact@seri-forge.fr"
              >
                contact@seri-forge.fr
              </a>
            </p>
            <p>
              L'offre sera envoyée en général sous{" "}
              <span className="font-bold">48h</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
