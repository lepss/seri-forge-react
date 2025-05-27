import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="relative z-10 w-full text-white bg-background py-10">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-10 md:flex-row md:justify-between md:gap-0 md:items-start">
          <img
            src={"/images/logo/logo-xs.png"}
            width={154}
            height={98}
            alt={"logo seri forge"}
            className="self-center"
          />
          <div>
            <h2 className="uppercase text-xl font-bold mb-2.5 text-center md:text-left">
              Contact
            </h2>
            <p>
              Demande de prix à envoyer à{" "}
              <a className="font-bold" href="mailto:contact@seri-forge.fr">
                contact@seri-forge.fr
              </a>
              .
            </p>
            <p>L'offre sera envoyé en général sous 48h.</p>
          </div>
        </div>
        <div className="mt-10 mx-10 md:mx-0">
          <div className="h-[1px] bg-white"></div>
        </div>
        <div className="flex flex-col items-center text-sm gap-5 md:flex-row justify-between mt-10">
          <p>© 2025 Seri Forge. Tous droits réservés.</p>
          <Link to={"/mentions-legales"}>Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
};
