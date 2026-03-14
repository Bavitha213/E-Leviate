import wordmarkPlum from "../assets/logos/E-LEVIATE_WORDMARK_PLUM.png";
export default function Footer() {
  return (
    <footer>

      {/* TOP PLUM STRIP */}
      <div className="bg-plum h-[70px] w-full"></div>

      {/* MAIN FOOTER */}
      <section
        id="contact"
        className="
        bg-periwinkle text-plum
        px-[40px] lg:px-[120px]
        pt-[-40px] pb-[100px]

        max-md:px-6
        "
      >

        {/* EMAIL SIGNUP */}
        <div
          className="
          max-w-[900px] mb-[90px] -ml-[90px] relative top-[80px]

          max-md:ml-0
          max-md:top-0
          max-md:text-center
          "
        >

          <p className="text-[20px] leading-[1.6] mb-[26px] font-[900] pt-10  md:pt-0 max-md:text-[18px]">
            To be updated on E-Leviate please sign up with your email address here
          </p>

          <form
            action="https://formsubmit.co/bavithapeddineni@gmail.com"
            method="POST"
            className="flex flex-col lg:flex-row gap-[14px] max-md:items-center"
          >

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="flex-1 px-[20px] py-[14px] rounded-md border border-plum bg-transparent placeholder:text-plum focus:outline-none max-md:w-full"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="flex-1 px-[20px] py-[14px] rounded-md border border-plum bg-transparent placeholder:text-plum focus:outline-none max-md:w-full"
            />

            {/* SIGNUP BUTTON */}
            <button
              type="submit"
              className="bg-plum text-ivory px-[34px] py-[14px] rounded-md hover:opacity-90 transition max-md:w-full"
            >
              Sign Up
            </button>

          </form>

        </div>


        {/* FOOTER CONTENT */}
        <div
          className="
          flex items-end justify-between

          max-md:flex-col
          max-md:items-center
          max-md:gap-10
          "
        >

          {/* LEFT LOGO */}
          <div className="flex items-end max-md:justify-center">
            <img
              src={wordmarkPlum}
              alt="E-Leviate"
              className="
              w-[600px] -ml-[90px] relative top-[70px]

              max-md:w-[260px]
              max-md:ml-0
              max-md:top-0
              "
            />
          </div>


          {/* CENTER CONTACT */}
          <div
            className="
            max-w-[200px] text-[14px] leading-[1.2] font-[900] -ml-[80px] relative top-[26px]

            max-md:ml-0
            max-md:top-0
            max-md:text-center
            "
          >

            <p className="mb-[14px]">
              Clinician enquiries and <br/>
              further information:
            </p>

            <p className="font-[600] text-[12px]">
              E-Leviate Pharma Ltd
            </p>

            <p className="font-[500] text-[12px]">
              211 Ponsonby Road
              <br/>
              Ponsonby, Auckland 1011
            </p>

          </div>


          {/* RIGHT CONTACT */}
          <div className="text-[12px] leading-[1.2] max-md:text-center">

            <div className="mb-[30px] relative top-[85px] left-[90px] max-md:top-0 max-md:left-0">

              <p className="font-[700] text-[13px]">Email</p>
              <a
                href="mailto:info@e-leviate.com"
                className="opacity-80 hover:opacity-100"
              >
                info@e-leviate.com
              </a>

            </div>

            <div className="mb-[50px] text-[12px] relative top-[70px] left-[90px] max-md:top-0 max-md:left-0">

              <p className="font-[700] text-[13px]">Instagram</p>
              <a
                href="https://instagram.com/E_Leviate"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100"
              >
                @E_Leviate
              </a>

            </div>


            {/* SOCIAL DOTS */}
            <div className="flex gap-[20px] relative top-[40px] left-[60px] max-md:top-0 max-md:left-0 max-md:justify-center">

              <div className="w-[28px] h-[28px] bg-plum rounded-full"></div>
              <div className="w-[28px] h-[28px] bg-plum rounded-full"></div>
              <div className="w-[28px] h-[28px] bg-plum rounded-full"></div>

            </div>

          </div>

        </div>

      </section>

    </footer>
  );
}
