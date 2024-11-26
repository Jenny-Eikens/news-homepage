interface ContentProps {
  mainTitle: string;
  mainArticle: string;
  sideArticles: any;
  bottomArticles: any;
}

export default function ArticleGrid({
  mainTitle,
  mainArticle,
  sideArticles,
  bottomArticles,
}: ContentProps) {
  return (
    <>
      <div className="main-content">
        {/* Main image */}
        <picture className="image">
          <source
            srcSet={`${process.env.PUBLIC_URL}/images/image-web-3-desktop.jpg`}
            media="(min-width: 768px)"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/image-web-3-mobile.jpg`}
            alt="image of colorful building blocks"
            className="h-full w-full object-cover"
          />
        </picture>

        {/* Main title */}
        <h1
          id="title"
          className="text-[4rem] font-800 leading-[4rem] text-very-dark-blue"
        >
          {mainTitle}
        </h1>
        {/* Main article */}
        <article id="main-text" className="flex flex-col justify-between pr-1">
          <p className="leading-7">{mainArticle}</p>
          <a
            href="#"
            className="mt-8 w-full max-w-[200px] bg-soft-red p-4 text-center text-sm font-700 tracking-[0.3em] text-very-dark-blue transition-colors duration-150 hover:cursor-pointer hover:bg-very-dark-blue hover:text-off-white focus:bg-very-dark-blue focus:text-off-white md:mt-0 lg:mt-8"
          >
            READ MORE
          </a>
        </article>

        {/* Side articles */}
        <div
          id="side"
          className="my-3 flex flex-col justify-between bg-very-dark-blue px-6 py-4 text-left text-off-white md:my-0"
        >
          <h2 className="text-[3rem] font-700 tracking-wider text-soft-orange">
            New
          </h2>
          {sideArticles.map((article: any, index: number) => (
            <article key={index}>
              <h3>
                <a href="#">{article.title}</a>
              </h3>
              <p>{article.content}</p>
              {index !== sideArticles.length - 1 && (
                <hr className="border-dark-gray-blue pb-6" />
              )}
            </article>
          ))}
        </div>

        {/* Bottom articles */}
        {bottomArticles.map((article: any) => (
          <article id={article.id} className="bottom">
            <img
              src={`${process.env.PUBLIC_URL}${article.image.src}`}
              alt={article.image.alt}
            />
            <div>
              <p className="text-3xl font-700 text-soft-red">
                {article.number}
              </p>
              <h4>
                <a href="#">{article.title}</a>
              </h4>
              <p className="leading-6">{article.content}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
