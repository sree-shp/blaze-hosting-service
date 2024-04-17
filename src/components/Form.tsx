import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  companyName: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    companyName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };
  return (
    <section id="form" className="mx-5 my-10 md:mx-[6rem] md:my-[6rem]">
      <h1 className="text-4xl text-center font-semibold">
        Get in Touch with{" "}
        <span className="bg-gradient-to-l from-cyan-300 to-blue-600 inline-block text-transparent bg-clip-text font-bold">
          BLAZE
        </span>
      </h1>
      <div className="flex flex-col md:flex-row gap-5 my-[3rem]">
        <div className="md:w-[60%] relative">
          <video autoPlay loop muted className="rounded-xl">
            <source src="/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=" md:w-[40%] md:px-10 flex flex-col gap-5 ">
          <h1 className="text-3xl font-semibold">Let's Talk!</h1>
          <h3 className="text-[#b3b3b3]">
            We will reach out to you within 24 hours
          </h3>
          <form onSubmit={handleSubmit} className="w-full my-3">
            <div className="flex flex-col  gap-2 mb-5">
              <input
                type="text"
                id="name"
                className="bg-[#070936] px-4 py-2 rounded-md"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <input
                type="email"
                id="email"
                className="bg-[#070936] px-4 py-2 rounded-md"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <input
                type="text"
                id="companyName"
                className="bg-[#070936] px-4 py-2 rounded-md"
                placeholder="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full md:max-w-[150px] bg-gradient-to-l from-cyan-500 to-blue-700 px-4 py-2  rounded-3xl my-5"
            >
              Get in Touch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
