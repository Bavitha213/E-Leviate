import wordmark from "../assets/logos/E-LEVIATE_WORDMARK_LILAC_(no_bg).png";
import ringImage from "../assets/images/ELE0096 Ring Still.png";

export default function Hero() {
  return (
    <section className="relative bg-plum min-h-screen lg:min-h-screen md:min-h-0 sm:min-h-0 max-sm:min-h-0 overflow-hidden pb-8 md:pb-12 lg:pb-0">

      {/* BIG WORDMARK */}
      <img
        src={wordmark}
        alt="E-leviate"
        className="
        absolute
        lg:top-20 lg:left-[40px] lg:w-[1200px] lg:translate-x-0
        md:top-16 md:left-1/2 md:-translate-x-1/2 md:w-[700px]
        sm:top-20 sm:left-1/2 sm:-translate-x-1/2 sm:w-[520px]
        max-sm:top-[72px] max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:w-[88%] max-sm:max-w-[400px]
        z-20 pointer-events-none
        "
      />

      {/* PRODUCT IMAGE */}
      <div
        className="
        relative z-10 pt-[257px] flex justify-center
        lg:pt-[257px]
        md:pt-[195px]
        sm:pt-[160px]
        max-sm:pt-[140px]
        "
      >
        <img
          src={ringImage}
          alt="Pessary"
          className="
          w-[1400px] max-w-[94.6%] translate-x-[7px]
          lg:w-[1400px] lg:max-w-[94.6%] lg:translate-x-[7px]
          md:w-[90%] md:max-w-[850px] md:translate-x-0
          sm:w-[92%] sm:max-w-[620px] sm:translate-x-0
          max-sm:w-[94%] max-sm:translate-x-0
          "
        />
      </div>

{/* 
      DESKTOP & TABLET TEXT
      <div
        className="
        absolute left-[46px] top-[60%] z-30 flex items-start gap-6 max-w-[420px]
        lg:left-[46px] lg:top-[60%] lg:gap-6
        md:left-8 md:top-[56%] md:gap-4 md:max-w-[380px]
        max-md:hidden
        "
      >
        <div className="
          w-[16px] h-[16px] bg-periwinkle rounded-full relative -top-[26px] left-[38.6px]
          lg:w-[16px] lg:h-[16px] lg:-top-[26px] lg:left-[38.6px]
          md:w-[14px] md:h-[14px] md:-top-[20px] md:left-[0px]
        "></div>

        <p className="
          text-[18px] text-plum leading-[1.2] font-satoshi font-[300] tracking-[0.01em]
          lg:text-[18px]
          md:text-[16px] md:leading-[1.35] max-md:text-justify
        ">
          Vaginal pessary that combines<br/>
          prolapse support with sustained,<br/>
          localised estrogen over a<br/>
          6-month period.
        </p>
      </div>

      MOBILE TEXT
      <div className="
        md:hidden px-5 mt-8 flex gap-3 items-start max-w-[380px] mx-auto
        sm:px-6 sm:mt-10 sm:gap-4 sm:max-w-[440px]
        max-sm:px-5 max-sm:mt-6
      ">

        <div className="
          w-[12px] h-[12px] bg-periwinkle rounded-full mt-[8px] flex-shrink-0
          sm:w-[14px] sm:h-[14px] sm:mt-[9px]
        "></div>

        <p className="
          text-[17px] text-ivory leading-[1.5] font-satoshi font-[300]
          sm:text-[18.5px] sm:leading-[1.55]
          max-sm:text-[16.5px]
        ">
          Vaginal pessary that combines prolapse support
          with sustained, localised estrogen over a 6-month period.
        </p>

      </div>
*/}

    </section>
  );
}
