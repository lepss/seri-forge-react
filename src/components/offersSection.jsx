import { Link } from "react-router-dom";

export const OffersSection = ({ offers }) => {
  return (
    <div id="offers" className="container mx-auto py-20 px-5">
      <h2 className="text-4xl font-bold mb-10">Nos offres</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 ">
        {offers.map((offer, _index) => {
          return (
            <Link
              to={offer.href}
              key={_index}
              className="rounded-2xl bg-white overflow-hidden shadow-lg flex flex-col"
            >
              <h2 className="text-center text-black text-xl font-bold py-3 px-6 flex items-center justify-center whitespace-nowrap overflow-ellipsis">
                {offer.name}
              </h2>
              <div className="w-full h-40 relative">
                <img
                  src={offer.image}
                  loading="lazy"
                  alt={`${offer.name} image`}
                  className="fill w-full h-full object-cover"
                />
              </div>
              <div className="text-black font-semibold text-center text-lg bg-custom-yellow px-6 py-2">
                Voir plus
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
