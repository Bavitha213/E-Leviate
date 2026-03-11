export default function Partners() {

  const partners = [
    {
      name: "Pregna",
      logo: "/src/assets/images/pregna grey.png",
      link: "https://pregna.com"
    },
    {
      name: "Outset",
      logo: "/src/assets/images/outset.png",
      link: "https://outset.ventures"
    },
    {
      name: "Akra Team",
      logo: "/src/assets/images/Akraa.png",
      link: "https://akrateam.com"
    },
    {
      name: "Callaghan Innovation",
      logo: "/src/assets/images/callaghan.png",
      link: "https://callaghaninnovation.govt.nz"
    },
    {
      name: "BR",
      logo: "/src/assets/images/BR grey.png",
      link: "https://bespokeclinicalresearch.com.au/"
    },
    {
      name: "Icehouse Ventures",
      logo: "/src/assets/images/icehouse.png",
      link: "https://icehouseventures.co.nz"
    }
  ];

  return (
    <section className="bg-plum text-ivory pt-[60px] pb-[50px] max-md:pt-[40px]">

      {/* SECTION CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-[40px] lg:px-[120px] -mt-[80px] max-md:mt-0 max-md:px-6">

        {/* HEADING */}
        <h2 className="text-4xl lg:text-5xl font-[700] text-center mb-[100px] max-md:mb-[60px]">
          Our Partners
        </h2>

        {/* LOGO ROW */}
        <div className="flex flex-wrap justify-between items-center gap-y-[60px] max-md:justify-center max-md:gap-[40px]">

          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center opacity-90 hover:opacity-100 transition"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-[55px] lg:h-[70px] w-auto object-contain max-md:h-[45px]"
              />
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}