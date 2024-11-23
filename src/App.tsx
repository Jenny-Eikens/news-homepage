import { useState } from "react";
import ArticleGrid from "./components/ArticleGrid";
import NavBar from "./components/NavBar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="m-auto h-auto w-full max-w-[1200px] p-3 lg:w-[90vw] lg:p-[2rem] xl:w-[80vw] xl:p-[3rem]">
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ArticleGrid />
      </div>
    </>
  );
}

export default App;
