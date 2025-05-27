export const OfferTable = ({ offers, info, title = "Nos offres" }) => {
  return (
    <div className="relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-lg text-white uppercase bg-[#1E1E1E]">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              {title} {info && "( " + info + " )"}
            </th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer, _index) => {
            return (
              <tr key={_index} className="odd:bg-[#292929]  even:bg-[#1E1E1E]">
                <th
                  scope="row"
                  className="px-6 py-4 text-white font-medium whitespace-nowrap "
                >
                  {offer}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
