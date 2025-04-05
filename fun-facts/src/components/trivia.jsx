import { useEffect, useState } from "react";
import { FACTS_CATEGORIES } from "../constants/constant";
import Loader from "./loader";

const Trivia = ({
  triviaData = "",
  triviaLoader,
  getRandomFacts=()=>{},
  error = "",
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { question, answer } = triviaData;
  useEffect(() => {
    setShowAnswer(false);
  }, [getRandomFacts]);

  return (
    <>
      <div className="flex mx-10 my-5 h-max">
        <div className="w-1/2 rounded-l-lg bg-yellow-200 p-3">
          <div className="flex flex-col gap-y-3">
            <h1 className="font-bold text-2xl">
              Select a category to get you riddle
            </h1>
            <div className="flex flex-col justify-center gap-3">
              <label className="text-base font-medium">
                Choose a category of the riddle
              </label>

              <div className="flex justify-center ">
                <select
                  className="capitalize p-2 rounded"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option hidden>Select a category</option>
                  {FACTS_CATEGORIES.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <label className="text-base font-medium">
                Or get your riddle even without selecting a category
              </label>
            </div>
            <div className="flex justify-center mt-3">
              <button
                className="rounded-full bg-violet-300 w-max p-2 font-medium"
                onClick={() => getRandomFacts(selectedCategory)}
              >
                Check Fact
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 rounded-r-lg bg-green-200 p-3 space-y-5">
          <h1 className="font-bold text-2xl">Riddle</h1>
          {triviaLoader ? (
            <div className="flex justify-center ">
              {" "}
              <Loader />{" "}
            </div>
          ) : error ? (
            <p className="text-red-400 font-medium">{error} </p>
          ) : (
            triviaData && (
              <div className="flex justify-center flex-col">
                <p className="font-medium normal-case">
                  {!question ? "" : question}{" "}
                </p>
                <div className="flex justify-center my-5">
                  <button
                    disabled={!Object.keys(triviaData)?.length}
                    className={
                      !Object.keys(triviaData)?.length
                        ? "rounded-full bg-gray-300 text-white w-max p-2 font-medium cursor-not-allowed"
                        : "rounded-full bg-violet-300 w-max p-2 font-medium"
                    }
                    onClick={() => setShowAnswer(true)}
                  >
                    Show answer
                  </button>
                </div>

                {showAnswer && (
                  <p className="text-blue-600 font-medium normal-case">
                    {!answer ? "" : answer}
                  </p>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Trivia;
