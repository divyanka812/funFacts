import { useEffect, useState } from "react";
import Loader from "./loader";

const Riddles = ({ getRiddles, riddleData, riddleLoader, errorRiddle = "" }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const { question, answer } = riddleData;

  useEffect(() => {
    setShowAnswer(false);
  }, [getRiddles]);
  return (
    <>
      <div className="flex mx-10 my-5 h-max">
        <div className="w-full rounded bg-yellow-200 p-3">
          <div className="flex flex-col gap-y-3">
            <h1 className="font-bold text-2xl">Random Riddles</h1>

            <div className="flex justify-center mt-7">
              <button
                className="rounded-full bg-violet-300 w-max p-2 font-medium"
                onClick={getRiddles}
              >
                Get your Riddle
              </button>
            </div>
            <div className="flex justify-center mt-7">
              {riddleLoader ? (
                <Loader />
              ) : errorRiddle ? (
                <p className="text-red-400 font-medium">{errorRiddle} </p>
              ) : (
                riddleData && (
                  <div className="flex justify-center flex-col">
                    <p className="font-medium normal-case">
                      {question}{" "}
                    </p>
                    <div className="flex justify-center my-5">
                      <button
                        disabled={!Object.keys(riddleData).length}
                        className={
                          !Object.keys(riddleData).length
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
                        {answer}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Riddles;
