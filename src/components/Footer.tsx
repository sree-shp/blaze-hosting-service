function Footer() {
  return (
    <section className="flex flex-col gap-5 justify-center items-center bg-[#070936] px-5 py-5 md:px-[6rem] md:pt-[3rem] md:pb-[3rem]">
      <h1 className="bg-gradient-to-l from-cyan-300 to-blue-600 inline-block text-transparent bg-clip-text text-3xl font-bold">
        BLAZE
      </h1>
      <div className="flex gap-10">
        <div className="text-[#b3b3b3]">
          <a href="#home">Home</a>
        </div>
        <div className="text-[#b3b3b3]">
          <a href="#services">Services</a>
        </div>
        <div className="text-[#b3b3b3]">
          <a href="#about">About</a>
        </div>
        <div className="text-[#b3b3b3]">
          <a href="#form">Contact</a>
        </div>
      </div>
      <div className="text-gray-600">
        © 2024 Blaze Inc. All rights reserved. Crafted with passion and fueled
        by innovation. Let's ignite the future together
      </div>
    </section>
  );
}

export default Footer;
