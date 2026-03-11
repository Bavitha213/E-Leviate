import ringClear from "../assets/images/ELE0096 Ring Still Clear Cut.png";
import subtract from "../assets/images/Subtract.png";
export default function AboutProduct() {
  return (
    <section className="relative bg-plum text-ivory pt-[120px] pb-[40px] px-[120px] overflow-visible max-md:px-6 max-md:pt-[0px] max-md:pb-[60px]">

      {/* LEFT TEXT */}
      <div className="max-w-[620px] text-[26px] leading-[1.45] font-[400] -ml-[80px] -mt-[200px]
      max-md:ml-0 max-md:mt-0 max-md:text-[18px] max-md:leading-[1.6] max-md:text-left max-md:text-justify">

        <p className="mb-[50px] max-md:mb-8">
          Made from biocompatible silicone <br className="max-md:hidden"/>
          elastomer, E-Leviate offers a flexible, <br className="max-md:hidden"/>
          comfortable fit. It doesn't need to be <br className="max-md:hidden"/>
          removed for sexual intercourse and <br className="max-md:hidden"/>
          can be self-managed, allowing <br className="max-md:hidden"/>
          patients the option to insert and <br className="max-md:hidden"/>
          remove the device themselves.
        </p>

        <p className="relative -top-[20px] max-md:top-0">
          E-Leviate is currently available in two <br className="max-md:hidden"/>
          sizes; 57mm and 69mm. Additional <br className="max-md:hidden"/>
          sizes are in development. Final sizing <br className="max-md:hidden"/>
          is determined on clinical examination.
        </p>

      </div>

      {/* DESKTOP PRODUCT IMAGE */}
      <img
        src={ringClear}
        className="absolute right-[-600px] top-[-310px] w-[1600px] max-w-none z-30 max-md:hidden"
      />

      {/* MOBILE PRODUCT IMAGE WITH LABELS */}
      <div className="md:hidden mt-6 relative flex justify-center">
        <div className="relative w-[90%] max-w-[420px] flex items-center gap-4">
          {/* Left side - Main white product image */}
          <img
            src={ringClear}
            className="w-[50%] mt-[20px]"
          />

          {/* Right side - Size diagram with label */}
          <div className="flex flex-col items-center">
            <span className="text-[11px] text-ivory mb-2">57mm or 69mm</span>
            <div className="flex items-center gap-1 mb-1">
              <div className="w-[6px] h-[6px] bg-periwinkle rounded-full"></div>
              <div className="h-[1.5px] w-[60px] bg-periwinkle"></div>
              <div className="w-[6px] h-[6px] bg-periwinkle rounded-full"></div>
            </div>
            <img
              src="/src/assets/images/Subtract.png"
              className="w-[70px]"
            />
          </div>
        </div>
      </div>

      {/* CALLOUT 1 (desktop only) */}
      <div className="absolute right-[420px] top-[200px] flex items-center gap-3 max-md:hidden">

        <div className="w-[8px] h-[8px] bg-periwinkle rounded-full relative -top-[248px] left-[98.841px]"></div>

        <div className="h-[40px] w-[2px] bg-periwinkle relative -top-[225px] left-[82px]"></div>

        <div className="h-[2px] w-[230px] bg-periwinkle relative -top-[205px] left-[68px]"></div>

        <span className="text-[13px] text-ivory ml-[10px] relative -top-[250px] left-[-167px]">
          Silicone Pessary Ring
        </span>

      </div>

      {/* CALLOUT 2 (desktop only) */}
      <div className="absolute right-[420px] top-[200px] flex items-center gap-3 max-md:hidden">

        <div className="w-[8px] h-[8px] bg-periwinkle rounded-full relative -top-[157px] left-[98.841px]"></div>

        <div className="h-[40px] w-[2px] bg-periwinkle relative -top-[136px] left-[82px]"></div>

        <div className="h-[2px] w-[225px] bg-periwinkle relative -top-[115px] left-[68px]"></div>

        <span className="text-[13px] leading-[1.2] text-ivory ml-[10px] relative -top-[157px] left-[-162px]">
          Sustained Estrogen <br/>
          release over 6 months
        </span>

      </div>

      {/* SIZE DIAGRAM (desktop only) */}
      <div className="absolute right-[460px] bottom-[60px] flex flex-col items-center max-md:hidden">

        <div className="w-[8px] h-[8px] bg-periwinkle rounded-full relative -top-[25px] left-[-180px]"></div>

        <div className="h-[2px] w-[155px] bg-periwinkle relative -top-[30px] left-[-105px]"></div>

        <div className="w-[8px] h-[8px] bg-periwinkle rounded-full relative -top-[35.5px] left-[-25px]"></div>

        <span className="text-[11px] text-ivory ml-[10px] relative -top-[60px] left-[-109px]">
          57mm or 69mm
        </span>

        <img
          src={subtract}
          className="w-[120px] relative -top-[40px] left-[-103px]"
        />

      </div>

    </section>
  );
}
