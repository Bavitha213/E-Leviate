import wordmark from "../assets/logos/E-LEVIATE_WORDMARK_LILAC_(no_bg).png";
export default function About() {
  return (
    <section id="about" className="bg-plum py-[140px] max-md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-[160px] items-start max-md:grid-cols-1 max-md:gap-12">

          {/* LEFT SIDE */}
          <div className="-ml-[7px] -mt-[140px] max-md:ml-0 max-md:mt-0 max-md:text-center">
            <h2 className="text-[135px] font-[1000] text-ivory max-md:text-[70px] max-md:leading-none">
              About
            </h2>

            <img
              src={wordmark}
              alt="E-Leviate"
              className="w-[500px] mt-[-20px] max-md:w-[280px] max-md:mx-auto max-md:mt-[-10px]"
            />
          </div>

          {/* RIGHT SIDE TEXT */}
          <div className="max-w-[700px] -ml-[20px] -mt-[80px] max-md:ml-0 max-md:mt-0 max-md:max-w-full max-md:px-4">
            <p className="text-[27.3px] font-[580] text-ivory leading-[1.2] max-md:text-[19px] max-md:leading-[1.6] max-md:text-left max-md:text-justify">
              Developed by specialist gynaecologist Dr <br className="max-md:hidden" />
              Prathima Chowdary in collaboration with <br className="max-md:hidden" />
              pelvic floor experts, E-Leviate is a vaginal <br className="max-md:hidden" />
              pessary combining prolapse support with <br className="max-md:hidden" />
              sustained, localised estrogen over a <br className="max-md:hidden" />
              6-month period.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-[70px] h-[1px] bg-ivory opacity-60 max-md:mt-16"></div>
      </div>
    </section>
  );
}
