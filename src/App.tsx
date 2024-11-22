import React from "react";
import { useState } from "react";
import ArticleGrid from "./components/ArticleGrid";
import NavBar from "./components/NavBar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="m-auto h-auto w-full max-w-[1200px] p-3 lg:w-[80vw] lg:p-[3rem]">
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ArticleGrid />
      </div>
    </>
  );
}

export default App;
