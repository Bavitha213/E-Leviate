export default function ClinicalPerformance() {
  return (
    <>
      {/* PLUM SECTION */}
      <section
        id="clinical"
        className="
        text-ivory bg-plum px-6 sm:px-8 md:px-12 lg:px-20 xl:px-[120px]
        pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-[160px]
        pb-16 sm:pb-20 md:pb-24 xl:pb-12
        "
      >
        <h2
          className="
          text-[38px] sm:text-[48px] md:text-[56px] lg:text-[70px] xl:text-[90px]
          leading-[0.95] font-[900]
          mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-[80px]
          max-w-[90%] sm:max-w-[600px] lg:max-w-[700px]
          xl:-ml-[80px] xl:-mt-[110px]
          "
        >
          Clinical <br />
          Performance
        </h2>

        <div
          className="
          text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px]
          leading-[1.65] font-[400]
          max-w-full sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[900px]
          space-y-4 sm:space-y-5 lg:space-y-6
          xl:ml-[540px] xl:-mt-[250px]
          text-left text-justify
          "
        >
          <p>
            A clinical trial of E-Leviate confirmed that it provides effective
            prolapse support while delivering sustained estrogen within a
            single device.
          </p>

          <p>
            Mechanical testing confirmed that the ring maintains structural
            characteristics comparable to commercially available pessaries,
            supporting its function as a prolapse support device.
          </p>

          <p>
            Estrogen release was assessed over extended periods in simulated
            vaginal fluid, demonstrating sustained localised delivery.
          </p>
        </div>
      </section>

      {/* IVORY IMAGE SECTION */}
      <section className="bg-ivory py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] px-0 lg:px-3 xl:px-[12px]">
        <div className="w-full">
          <img
            src="/src/assets/images/ELE0096 Ring Still.png"
            alt="E-Leviate ring"
            className="w-full h-auto xl:-mt-[105px]"
          />
        </div>
      </section>

      {/* CYTOLOGY COMPARISON SECTION */}
      <section className="bg-ivory px-6 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-[120px] pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-[60px] text-plum font-satoshi">
        {/* HEADING */}
        <h2
          className="
          text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[46px]
          leading-[1.05] font-[800]
          max-w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px]
          mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-[50px]
          xl:-ml-[80px] xl:-mt-[210px]
          "
        >
          Illustrative vaginal cytology <br />
          after one month of use showed:
        </h2>

        {/* BEFORE / AFTER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-[120px] items-start">
          {/* BEFORE */}
          <div className="relative">
            <div className="border-l border-plum pl-6 sm:pl-7 md:pl-8 xl:pl-[30px] xl:-ml-[77px]">
              <h3 className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[38px] xl:text-[42px] font-[700] mb-6 sm:mb-7 md:mb-8 xl:mb-[30px]">
                Before
              </h3>

              <div className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden">
                <img
                  src="/src/assets/images/E-Leviate cytology before.png"
                  className="w-full h-full object-cover"
                  alt="Vaginal cytology before treatment"
                />
              </div>
            </div>
          </div>

          {/* AFTER */}
          <div className="relative">
            <div className="border-l border-plum pl-6 sm:pl-7 md:pl-8 xl:pl-[30px] xl:-ml-[110px]">
              <h3 className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[38px] xl:text-[42px] font-[700] mb-6 sm:mb-7 md:mb-8 xl:mb-[30px]">
                After
              </h3>

              <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden">
                <img
                  src="/src/assets/images/E-Leviate cytology 1 month.png"
                  className="w-full h-full object-cover"
                  alt="Vaginal cytology after one month"
                />

                {/* CALLOUT LINES (desktop only) */}
                <div className="absolute top-[28%] left-full hidden xl:flex items-center ml-0">
                  <div className="w-[160px] h-[1px] bg-periwinkle"></div>
                  <div className="w-[10px] h-[10px] bg-periwinkle rounded-full ml-[6px]"></div>
                  <span className="ml-[14px] text-[14px] max-w-[160px]">
                    Increased superficial cells
                  </span>
                </div>

                <div className="absolute top-[50%] left-full hidden xl:flex items-center ml-0">
                  <div className="w-[160px] h-[1px] bg-periwinkle"></div>
                  <div className="w-[10px] h-[10px] bg-periwinkle rounded-full ml-[6px]"></div>
                  <span className="ml-[14px] text-[14px] max-w-[160px]">
                    Presence of lactobacilli
                  </span>
                </div>

                <div className="absolute top-[71%] left-full hidden xl:flex items-center ml-0">
                  <div className="w-[160px] h-[1px] bg-periwinkle"></div>
                  <div className="w-[10px] h-[10px] bg-periwinkle rounded-full ml-[6px]"></div>
                  <span className="ml-[14px] text-[14px] max-w-[200px]">
                    Reduced parabasal cells and inflammatory features
                  </span>
                </div>
              </div>

              {/* MOBILE CALLOUTS */}
              <div className="xl:hidden mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-[14px] sm:text-[15px] md:text-[16px]">
                <div className="flex items-start">
                  <div className="w-[8px] h-[8px] bg-periwinkle rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>Increased superficial cells</span>
                </div>
                <div className="flex items-start">
                  <div className="w-[8px] h-[8px] bg-periwinkle rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>Presence of lactobacilli</span>
                </div>
                <div className="flex items-start">
                  <div className="w-[8px] h-[8px] bg-periwinkle rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>Reduced parabasal cells and inflammatory features</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTNOTE TEXT */}
        <p
          className="
          mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-[30px]
          text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] xl:text-[20px]
          font-[900] leading-[1.6]
          max-w-full sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[900px]
          xl:-ml-[76px]
          "
        >
          These findings are consistent with local estrogen exposure and support
          its effect on vaginal tissue health. Individual responses may vary.
        </p>
      </section>
    </>
  );
}
