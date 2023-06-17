import Loader from "./loader";

const Dates = ({ datesData, datesDataLoader, getDateFacts }) => {
  return (
    <>
      <div className="flex mx-10 my-5 h-36">
        <div className="w-1/2 rounded-l-lg bg-yellow-200 p-3">
          <div className="flex flex-col gap-y-3">
            <h1 className="font-bold text-2xl">Facts about Dates</h1>

            <div className="flex justify-center mt-7">
              <button
                className="rounded-full bg-violet-300 w-1/4 font-medium"
                onClick={getDateFacts}
              >
                Check Fact
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 rounded-r-lg bg-green-200 p-3 space-y-5">
          <h1 className="font-bold text-2xl">Facts</h1>
          {datesDataLoader && (
            <div className="flex justify-center">
              {" "}
              <Loader />
            </div>
          )}
          {datesData && (
            <p className="text-orange-400 font-medium">{datesData} </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Dates;
