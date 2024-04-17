function About() {
  return (
    <section id="about" className="mx-5 my-10 md:mx-[6rem] md:my-[6rem]">
      <h1 className="text-center text-4xl">
        Why Choose{" "}
        <span className="bg-gradient-to-l from-cyan-300 to-blue-600 inline-block text-transparent bg-clip-text font-bold">
          BLAZE
        </span>
        ?
      </h1>
      <div className=" flex flex-wrap justify-center gap-10 my-[3rem] text-center">
        <div className="relative  bg-[#070936] w-[350px] px-8 py-8 rounded-xl ">
          <div className="absolute top-0 left-0 w-full h-full z-[100] flex items-center justify-center">
            <div className="relative z-[1000] w-[50%] h-[50%] bg-blue-600/40 blur-3xl "></div>
          </div>
          <div className="flex flex-col items-center relative z-[100000]">
            <img src="/approval.png" alt="" className="w-[50px]" />
            <p className="text-xl my-4">99.9% Uptime Guarantee</p>
            <p className="text-[#b3b3b3]">
              Experience reliability like never before with our 99.9% Uptime
              Guarantee. Stay connected, stay productive
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-[#070936] w-[350px] px-8 py-8 rounded-xl  relative">
          <div className="absolute top-0 left-0 w-full h-full z-[100] flex items-center justify-center">
            <div className="relative z-[1000] w-[50%] h-[50%] bg-blue-600/40 blur-3xl "></div>
          </div>
          <div className="flex flex-col items-center relative z-[100000]">
            <img src="/secure.png" alt="" className="w-[50px]" />
            <p className="text-xl my-4">Safe and Secure</p>
            <p className="text-[#b3b3b3]">
              Protect your data with our Safe and Secure systems. Your
              information, our priority
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-[#070936] w-[350px] px-8 py-8 rounded-xl relative ">
          <div className="absolute top-0 left-0 w-full h-full z-[100] flex items-center justify-center">
            <div className="relative z-[1000] w-[50%] h-[50%] bg-blue-600/40 blur-3xl "></div>
          </div>
          <div className="flex flex-col items-center relative z-[100000]">
            <img src="/support.png" alt="" className="w-[50px]" />
            <p className="text-xl my-4">24/7 Customer Support</p>
            <p className="text-[#b3b3b3]">
              Never feel alone in your journey. Our 24/7 Customer Support team
              is here to assist you, anytime, anywhere
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
