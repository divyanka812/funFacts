import Loader from "./loader";

const Numbers = ({
  enteredNum,
  setEnteredNum,
  numbersData,
  getNumberFacts,
  numbersDataLoader,
  loader,
}) => {
  return (
    <>
      <div className="flex mx-10 my-5 h-36">
        {/* //NUMBER */}
        <div className="w-1/2 rounded-l-lg bg-yellow-200 p-3">
          <div className="flex flex-col gap-y-3">
            <h1 className="font-bold text-2xl">Facts about numbers</h1>
            <div className="">
              <input
                type="number"
                placeholder="Enter a number"
                className="w-1/2 px-2"
                onChange={(e) => setEnteredNum(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-3">
              <button
                className={
                  !enteredNum
                    ? "rounded-full bg-gray-400 text-white cursor-not-allowed w-1/4 font-medium"
                    : "rounded-full bg-violet-300 w-1/4 font-medium"
                }
                disabled={!enteredNum}
                onClick={getNumberFacts}
              >
                Check Fact
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 rounded-r-lg bg-green-200 p-3 space-y-5">
          <h1 className="font-bold text-2xl">Facts</h1>
          {numbersDataLoader && (
            <div className="flex justify-center">
              {" "}
              <Loader />
            </div>
          )}
          {numbersData && (
            <p className="text-orange-400 font-medium">{numbersData} </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Numbers;
