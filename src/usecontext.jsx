import React, { createContext, useState, useEffect } from "react";
export const UserContext1 = createContext();

const UseProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [imgInput, setImgInput] = useState("");

  useEffect(() => {
    fetch("https://1d41ca8dc14b1b0d.mokky.dev/data21")
      .then((response) => response.json())
      .then((result) => setState(result));
  }, []);

  const deleitem = (id) => {
    fetch(`https://1d41ca8dc14b1b0d.mokky.dev/data21/${id}`, {
      method: "DELETE",
    });
  };
  const postData = () => {
    fetch("https://1d41ca8dc14b1b0d.mokky.dev/data21", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        front: titleInput,
        back: priceInput,
        pronunciation: imgInput,
      }),
    })
      .then((response) => response.json())
      .then((result) => setState([result, ...state]));
  };

  return (
    <UserContext1.Provider
      value={{
        state,
        deleitem,
        setState,
        postData,
        setTitleInput,
        setPriceInput,
        setImgInput,
      }}
    >
      {children}
    </UserContext1.Provider>
  );
};

export default UseProvider;
