function Home() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse gap-5 mx-5 md:flex-row md:mx-[6rem] md:my-[6rem]"
    >
      <div className="md:w-[50%]">
        <h1 className="text-5xl md:text-6xl font-semibold mb-4">
          The Fastest Cloud Hosting Platform
        </h1>
        <div className="mb-8 text-[#4f547e] font-medium">
          <p className="">
            High performance dedicated servers with cloud flexibility and
            scalability.{" "}
          </p>
          <p className="">
            A ton of website hosting options. 99.9% uptime gurantee
          </p>
        </div>
        <div className="flex justify-center md:justify-stretch gap-4">
          <a href="#form" className=" w-full max-w-[150px] ">
            <button className="w-full max-w-[150px] bg-gradient-to-l from-cyan-500 to-blue-700 px-4 py-2  rounded-3xl ">
              Get in Touch
            </button>
          </a>
          <button className="w-full max-w-[150px] border-2 border-[#183faf] px-4 py-2  rounded-3xl ">
            Discover More
          </button>
        </div>
      </div>
      <div className="md:w-[50%]">
        <video autoPlay loop muted className="rounded-xl">
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default Home;
