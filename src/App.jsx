import React, { useContext, UserContext, useState } from "react";
import "./App.css";
import { UserContext1 } from "./usecontext";

function App() {
  const [clickedCardId, setClickedCardId] = useState(null);
  const {
    state,
    deleitem,
    setState,
    postData,
    setTitleInput,
    setPriceInput,
    setImgInput,
  } = useContext(UserContext1);

  const addData = () => {
    postData();
  };

  const deleteCard = (id) => {
    deleitem(id);
    const newData = state.filter((item) => item.id !== id);
    setState(newData);
  };

  const handleCardClick = (id) => {
    setClickedCardId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="mt-10">
      <div>
        <div className="flex gap-5">
          <input
            className="border text-gray w-[550px] h-[50px] pl-[10px] text-[20px]"
            type="text"
            onChange={(e) => setTitleInput(e.target.value)}
            placeholder="front"
          />
          <input
            className="border text-gray w-[550px] h-[50px] pl-[10px] text-[20px]"
            type="text"
            onChange={(e) => setPriceInput(e.target.value)}
            placeholder="back"
          />
          <input
            className="border text-gray w-[550px] h-[50px] pl-[10px] text-[20px]"
            type="text"
            onChange={(e) => setImgInput(e.target.value)}
            placeholder="pronunciation"
          />
        </div>

        <div>
          <button
            onClick={addData}
            className="bg-green-500 text-white w-[100%] mt-5 h-[40px]"
          >
            add
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-10 mt-10">
        {state.map((val) => (
          <div key={val.id}>
            <div
              className={`border h-[300px] w-[300px] p-4 rounded-2xl text-center transition-ease duration-1000 ${
                clickedCardId === val.id ? "rotate" : ""
              }`}
              onClick={() => handleCardClick(val.id)}
            >
              <button
                onClick={() => deleteCard(val.id)}
                className={`transition-all duration-700 w-[10%] ml-[240px] h-[30px] mt-[-40px] bg-red-500 text-white rounded-[50%] ${
                  clickedCardId !== val.id? '':'none'
                }`}
              >
                x
              </button>
              <div className={`transition-ease duration-700 text-container  ${clickedCardId !== val.id ? "" : "none"}`}>
                <h1 className="text-2xl">{val.front}</h1>
                <p>{val.back}</p>
              </div>
              <div className={`transition-ease duration-1000 text-container ${clickedCardId !== val.id ? "none" : "flex1"}`}>
                <p className="text-gray-400 text-2xl">{val.pronunciation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
