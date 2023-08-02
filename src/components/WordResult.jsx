import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Meanings } from "./Meanings";
import { Example } from "./Example";
import { Synonym } from "./Synonym";
import { Antonym } from "./Antonym";
import { InputContext } from "../App";

// Import Loading Animation
import { Loading } from "./Loading";

axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en";

export const WordResult = () => {
  const { inputValue } = useContext(InputContext);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (index) => {
    try {
      setLoading(true);
      const res = await axios(index);
      setResponse(res.data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  //// Save response to local storage when it changes

  //useEffect(() => {
  //  if (response) {
  //    localStorage.setItem("wordResponse", JSON.stringify(response));
  //  }
  //}, [response]);
  //
  //// Retrieve response from local storage on component mount
  //useEffect(() => {
  //  const storedResponse = localStorage.getItem("wordResponse");
  //  if (storedResponse) {
  //    setResponse(JSON.parse(storedResponse));
  //  }
  //}, []);

  useEffect(() => {
    if (inputValue.length) {
      fetchData(inputValue);
    }
  }, [inputValue]);

  if (loading) {
    return (
      <div className="text-center flex items-center justify-center h-[40vh]">
          <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center flex items-center justify-center h-[40vh]">
        <h1 className="text-semibold text-4xl">The Word does not Exist </h1>
      </div>
    );
  }

  return (
    <section className="m-auto w-[80%] ">
      <div> {/* Ternary Operator showing No data if the search result is empty */}
        {response ? (
          <div>
            <h1 className="text-start font-semibold mt-5 text-2xl">
              Results for the word "{inputValue}"
            </h1>
            <div className="mt-5">
              <h1 className="text-xl font-semibold">Meaning & Definition:</h1>
              <Meanings meaning={response} />
              <h1 className="text-xl font-semibold mt-5">Example:</h1>
              <Example example={response} />
              <h1 className="text-xl font-semibold mt-5">Synonym:</h1>
              <Synonym synonym={response} />
              <h1 className="text-xl font-semibold mt-5">Antonym:</h1>
              <Antonym antonym={response} />
            </div>
          </div>
        ) : (
          <div className="lg:flex items-center justify-center  mt-20">
        
            <div className=" rounded-md border-2 border-blue-600 p-5 overflow-hidden  ">
              <div className="relative ">
                <h1 className="font-bold text-[18px]">WORD OF THE DAY</h1>
                <div className="absolute top-0 hidden md:block right-5 rounded-full w-[50px]">
                  <img className="w-full h-full object-cover rounded-full" src="/sound.png" alt="" />
                </div>
                <h1 className="font-bold text-[36px]">quiddity</h1>
                <br/>
                <div className="flex items-center gap-5">
                  <p className="font-bold">{`[kwid-i-tee]`}</p>
                  <p className="text-blue-600 font-semibold underline">Meaning and Examples</p>
                </div>
                <p>Start each day with the word of the Day in your inbox!</p>
              </div>
            </div>
            <div className="w-[320px] hidden lg:block">
              <img className="w-full h-full object-cover" src="/Dictionary.jpg" alt="" />
            </div>
          </div>
        )}
      </div>
      {/* It can also use Logical Operator &&  */}
      {/* {!response && (<div> No Data </div>)} */}
    </section>
  );
};
