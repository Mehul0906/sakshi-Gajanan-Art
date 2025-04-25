import backgroundImage from "../assets/banner3.png";

function Hero() {
  return (
    <section id="home">
      {/* –– Desktop: image BG, only from lg (1024px) up */}
      <div
        className="hidden lg:flex relative bg-cover bg-center bg-no-repeat h-[600px] items-center justify-end"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* dark overlay for contrast */}
        <div className="absolute inset-0 " />

        {/* right-aligned text/button with some right padding */}
        <div className="relative z-10  text-center px-4 md:px-8 max-w-2xl pr-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mr-16">
            Welcome to <br />
            Shree Sakshi Gajanan Art
          </h2>
          <p className="text-xl text-white mb-6">
            Your trusted destination for beautifully crafted Ganpati Murti
          </p>
          <a
            href="#products"
            className="
              bg-orange-600 text-white
              px-6 py-3 rounded-full
              hover:bg-white hover:text-orange-600
              transition duration-300 font-semibold mr-16
            "
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* –– Tablet & Phone: no image, grey-backed box */}
      <div className="block lg:hidden flex items-center justify-center py-20" style={{ backgroundColor: "#e46a11" }}>
        <div className="text-center px-4 md:px-8 max-w-2xl rounded-md">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to <br />
            Shree Sakshi Gajanan Art
          </h2>
          <p className="text-xl text-white mb-6">
            Your trusted destination for beautifully crafted Ganpati Murti
          </p>
          <a
            href="#products"
            className="
              bg-orange-600 text-white
              px-6 py-3 rounded-full
              hover:bg-white hover:text-orange-600
              font-semibold" style={{transition: 'all 0.6s ease-in-out'}}>
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
