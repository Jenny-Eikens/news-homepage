export default function ArticleGrid() {
  return (
    <>
      <main>
        {/* Main image */}
        <picture className="image">
          <source
            srcSet={`${process.env.PUBLIC_URL}/images/image-web-3-desktop.jpg`}
            media="(min-width: 768px)"
          />
          <img
            src="{`${process.env.PUBLIC_URL}/images/image-web-3-mobile.jpg"
            alt="image of colorful building blocks"
            className="h-full w-full object-cover"
          />
        </picture>

        {/* Main title and text */}
        <h1
          id="title"
          className="text-[3rem] font-800 leading-[3rem] text-very-dark-blue"
        >
          The Bright Future of Web 3.0?
        </h1>
        <div id="main-text" className="flex flex-col justify-between">
          <p className="leading-6">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="mt-6 w-full max-w-[200px] bg-soft-red p-4 text-sm font-700 tracking-[0.3em] text-very-dark-blue transition-colors duration-150 hover:cursor-pointer hover:bg-very-dark-blue hover:text-off-white focus:bg-very-dark-blue focus:text-off-white md:mt-0 lg:mt-8">
            READ MORE
          </button>
        </div>

        {/* Side articles */}
        <div
          id="side"
          className="my-3 flex flex-col justify-evenly bg-very-dark-blue px-6 py-4 text-left text-off-white md:my-0"
        >
          <h2 className="text-[2rem] font-700 tracking-wider text-soft-orange">
            New
          </h2>
          <div className="py-6">
            <h3>
              <a href="#">Hydrogen VS Electric Cars</a>
            </h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <hr />
          <div className="py-6">
            <h3>
              <a href="#">The Downsides of AI Artistry</a>
            </h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <hr />
          <div className="py-6">
            <h3>
              <a href="#">Is VC Funding Drying Up?</a>
            </h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>

        {/* Bottom articles */}
        <div id="bottom1" className="bottom flex items-stretch gap-4">
          <img
            src={`${process.env.PUBLIC_URL}/images/image-retro-pcs.jpg`}
            alt="Retro PC"
          />
          <div className="flex h-full flex-col justify-between">
            <p className="text-3xl font-700 text-soft-red">01</p>
            <h4 className="text-lg font-800 text-very-dark-blue">
              <a href="#">Reviving Retro PCs</a>
            </h4>
            <p className="leading-6">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div id="bottom2" className="bottom flex items-stretch gap-4">
          <img
            src={`${process.env.PUBLIC_URL}/images/image-top-laptops.jpg`}
            alt="Image of a laptop keyboard"
          />
          <div className="flex h-full flex-col justify-between">
            <p className="text-3xl font-700 text-soft-red">02</p>
            <h4 className="text-lg font-800 text-very-dark-blue">
              <a href="#">Top 10 Laptops of 2022</a>
            </h4>
            <p className="leading-6">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div id="bottom3" className="bottom flex items-stretch gap-4">
          <img
            src={`${process.env.PUBLIC_URL}/images/image-gaming-growth.jpg`}
            alt="Image of a gaming controller"
          />
          <div className="flex h-full flex-col justify-between">
            <p className="text-3xl font-700 text-soft-red">03</p>
            <h4 className="text-lg font-800 text-very-dark-blue">
              <a href="#">The Growth of Gaming</a>
            </h4>
            <p className="leading-6">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
