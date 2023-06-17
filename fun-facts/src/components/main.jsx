import { baseUrl, endPoints } from "../config/appConfig";
import { GetApiHandler } from "../utilities/apiHandler";
import { useState } from "react";
import { ERROR } from "../constants/constant";
import Numbers from "./numbers";
import Maths from "./maths";
import Dates from "./dates";

const Main = () => {
  const [enteredNum, setEnteredNum] = useState();
  const [numbersData, setnumbersData] = useState("");
  const [numbersDataLoader, setnumbersDataLoader] = useState(false);
  const [funRandomData, setfunRandomData] = useState(false);
  const [funRandomLoader, setfunRandomLoader] = useState("");
  const [datesData, setdatesData] = useState("");
  const [datesDataLoader, setdatesDataLoader] = useState(false);

  function getNumberFacts() {
    setnumbersDataLoader(true);
    const getNumberFactsURL =
      baseUrl + endPoints.funNumber.replace("<number>", enteredNum);

    GetApiHandler(getNumberFactsURL, "GET")
      .then((response) => {
        if (response?.data) {
          setnumbersData(response.data);
        } else {
          setnumbersData(ERROR.message);
        }
        setnumbersDataLoader(false);
      })
      .catch((error) => {});
  }
  function getRandomFacts() {
    setfunRandomLoader(true);
    const getRandomFactsURL = baseUrl + endPoints.randomTrivia;

    GetApiHandler(getRandomFactsURL, "GET")
      .then((response) => {
        if (response?.data) {
          setfunRandomData(response.data);
        } else {
          setfunRandomData(ERROR.message);
        }
        setfunRandomLoader(false);
      })
      .catch((error) => {});
  }
  function getDateFacts() {
    setdatesDataLoader(true);
    const getFunDateFactsURL = baseUrl + endPoints.randomDate;

    GetApiHandler(getFunDateFactsURL, "GET")
      .then((response) => {
        if (response?.data) {
          setdatesData(response.data);
        } else {
          setdatesData(ERROR.message);
        }
        setdatesDataLoader(false);
      })
      .catch((error) => {});
  }

  return (
    <>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen flex flex-col">
        <h1 className="font-bold text-4xl py-10 text-white">
          Fun facts about mathematics!!
        </h1>
        <div id="sandbox" className="">
          <div id="sandbox-text">Try it out!</div>
        </div>
        <div className="flex flex-col">
          <Numbers
            enteredNum={enteredNum}
            setEnteredNum={setEnteredNum}
            numbersData={numbersData}
            getNumberFacts={getNumberFacts}
            numbersDataLoader={numbersDataLoader}
          />
          <Maths
            setfunRandomData={setfunRandomData}
            funRandomData={funRandomData}
            funRandomLoader={funRandomLoader}
            getRandomFacts={getRandomFacts}
          />
          <Dates
            setdatesData={setdatesData}
            datesData={datesData}
            datesDataLoader={datesDataLoader}
            getDateFacts={getDateFacts}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
