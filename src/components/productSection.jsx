import EmblaCarousel from "../ui/emblaCarousel";
import { OfferTable } from "../ui/offerTable";

export const ProductSection = ({
  title,
  children,
  images,
  OPTIONS,
  offers,
  offersInfos,
}) => {
  return (
    <div className="container mx-auto px-5">
      <div className="text-white uppercase my-10">
        <h2 className="text-4xl font-bold text-center">{title}</h2>
      </div>
      <div className="">
        <div className="flex flex-col gap-10">
          <div className="w-full">
            <EmblaCarousel slides={images} options={OPTIONS} />
          </div>
        </div>
        <div className="flex flex-col-reverse gap-10 my-20 lg:flex-row">
          <div className="lg:flex-1 w-full flex flex-col h-full">
            <OfferTable offers={offers} />
            <div className="flex flex-col mt-5 ml-5">
              <ul className="list-disc">
                {offersInfos &&
                  offersInfos.map((offerInfo, _index) => {
                    return (
                      <li className="text-lg" key={_index}>
                        {offerInfo}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="w-full lg:flex-1 text-lg">{children}</div>
        </div>
      </div>
    </div>
  );
};
