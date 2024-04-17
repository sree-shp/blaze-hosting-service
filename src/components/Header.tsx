import { useState } from "react";

function Header() {
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
  return (
    <section className="flex justify-between mx-5 md:mx-[6rem] my-10">
      <h1 className="bg-gradient-to-l from-cyan-300 to-blue-600 inline-block text-transparent bg-clip-text text-3xl font-bold">
        BLAZE
      </h1>

      <div
        className="flex flex-col justify-center gap-1 md:hidden relative z-[100000]"
        onClick={() => setHamburgerMenu((state) => !state)}
      >
        <div
          className={`w-[30px] h-[3px] bg-gradient-to-l from-cyan-300 to-blue-600 rounded-lg`}
        ></div>
        <div
          className={`w-[30px] h-[3px] bg-gradient-to-l from-cyan-300 to-blue-600 rounded-lg`}
        ></div>
        <div
          className={`w-[30px] h-[3px] bg-gradient-to-l from-cyan-300 to-blue-600 rounded-lg`}
        ></div>
      </div>

      {hamburgerMenu && (
        <>
          <div
            className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-black/50 z-[100]"
            onClick={() => setHamburgerMenu((state) => !state)}
          ></div>
          <div className="fixed top-0  right-0 w-[75%] h-screen  z-[10000] bg-[#070936] px-5 pt-[6rem]">
            <div
              className="mb-5"
              onClick={() => setHamburgerMenu((state) => !state)}
            >
              <a href="#home">Home</a>
            </div>
            <div
              className="mb-5"
              onClick={() => setHamburgerMenu((state) => !state)}
            >
              <a href="#services">Services</a>
            </div>
            <div
              className="mb-5"
              onClick={() => setHamburgerMenu((state) => !state)}
            >
              <a href="#about">About</a>
            </div>
            <div
              className="mb-5"
              onClick={() => setHamburgerMenu((state) => !state)}
            >
              <a href="#form">Contact</a>
            </div>
          </div>
        </>
      )}

      <div className="  hidden md:flex md:gap-12">
        <div className="">
          <a href="#home">Home</a>
        </div>
        <div className="services">
          <a href="#services">Services</a>
        </div>
        <div className="about">
          <a href="#about">About</a>
        </div>
        <div className="contact">
          <a href="#form">Contact</a>
        </div>
      </div>
    </section>
  );
}

export default Header;
