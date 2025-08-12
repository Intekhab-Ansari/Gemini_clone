import React, { useEffect } from "react";
import { createContext } from "react";
import { runChat } from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) =>{

    const onSent = async (prompt) => {
    try {
      const reply = await runChat(prompt);
      console.log("Gemini response:", reply);
    } catch (error) {
      console.error("Gemini error:", error);
    }
  };

  useEffect(() => {
    onSent("what is React JS?");
  }, []);

  const contextValue = {
    onSent,
  };

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider