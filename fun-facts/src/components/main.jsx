import { BASE_URL, ENDPOINTS } from "../config/appConfig";
import { GetApiHandler } from "../utilities/apiHandler";
import { useState } from "react";
import { ERROR } from "../constants/constant";
import Trivia from "./trivia";
import Riddles from "./riddles";
import {BsFillEmojiSmileFill} from 'react-icons/bs'
const Main = () => {
  const [triviaData, setTriviaData] = useState("");
  const [errorTrivia, setErrorTrivia] = useState("");
  const [triviaLoader, setTriviaLoader] = useState(false);
  const [riddleData, setRiddleData] = useState("");
  const [errorRiddle, setErrorRiddle] = useState("");
  const [riddleLoader, setRiddleLoader] = useState(false);

  function getRandomFacts(selectedCategory) {
    setTriviaLoader(true);
    const getRandomFactsURL =
      BASE_URL + ENDPOINTS.trivia + "?category=" + selectedCategory;

    GetApiHandler(getRandomFactsURL, "GET")
      .then((response) => {
        if (response?.data) {
          setTriviaData(response.data[0]);
        } else {
          setErrorTrivia(ERROR.message);
        }
        setTriviaLoader(false);
      })
      .catch((error) => {});
  }

  function getRiddles() {
    setRiddleLoader(true);
    const getFunDateFactsURL = BASE_URL + ENDPOINTS.riddles;

    GetApiHandler(getFunDateFactsURL, "GET")
      .then((response) => {
        if (response?.data) {
          setRiddleData(response.data[0]);
        } else {
          setErrorRiddle(ERROR.message);
        }
        setRiddleLoader(false);
      })
      .catch((error) => {});
  }

  return (
    <>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen flex flex-col">
       <div className="flex flex-row justify-center items-center gap-x-5"> <h1 className="font-bold text-4xl py-10 text-white">
          Riddles & Fun!! </h1>
        <BsFillEmojiSmileFill className="text-4xl text-white"/></div>
        
        <div id="sandbox" className="">
          <div id="sandbox-text">Try it out!</div>
        </div>
        <div className="flex flex-col">
          <Trivia
            triviaData={triviaData}
            triviaLoader={triviaLoader}
            getRandomFacts={getRandomFacts}
            error={errorTrivia}
          />
          <Riddles
            getRiddles={getRiddles}
            riddleData={riddleData}
            errorRiddle={errorRiddle}
            riddleLoader={riddleLoader}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
