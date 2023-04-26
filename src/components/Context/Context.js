import React from "react";

const Context = React.createContext();

function Provider(props) {
  return <Context.Provider value={{
    props
  }}>{props.children}</Context.Provider>;
}

export { Provider };
