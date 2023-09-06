import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "60%",
          height: "100%",
          width: "100%",
          backgroundColor: "hsl(195deg, 20%, 86%)",
        }}
      ></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
