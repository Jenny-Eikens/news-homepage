import { useState } from "react";
import ArticleGrid from "./components/ArticleGrid";
import NavBar from "./components/NavBar";
import {
  bottomArticles,
  mainArticle,
  mainTitle,
  sideArticles,
} from "./components/data";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="m-auto h-auto min-h-[100vh] w-[100vw] max-w-[1200px] p-3 lg:w-[90vw] lg:p-[2rem] xl:w-[80vw] xl:p-[3rem]">
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main>
          <ArticleGrid
            mainTitle={mainTitle}
            mainArticle={mainArticle}
            sideArticles={sideArticles}
            bottomArticles={bottomArticles}
          />
        </main>
      </div>
      <footer className="mt-4 p-2 text-center">
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/Jenny-Eikens" target="_blank">
            Jennifer Eikens
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
