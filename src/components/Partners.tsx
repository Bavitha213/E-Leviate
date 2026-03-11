import pregna from "../assets/images/pregna grey.png";
import outset from "../assets/images/outset.png";
import akraa from "../assets/images/Akraa.png";
import callaghan from "../assets/images/callaghan.png";
import br from "../assets/images/BR grey.png";
import icehouse from "../assets/images/icehouse.png";
export default function Partners() {

  const partners = [
    {
      name: "Pregna",
      logo: pregna,
      link: "https://pregna.com"
    },
    {
      name: "Outset",
      logo: outset,
      link: "https://outset.ventures"
    },
    {
      name: "Akra Team",
      logo: akraa,
      link: "https://akrateam.com"
    },
    {
      name: "Callaghan Innovation",
      logo: callaghan,
      link: "https://callaghaninnovation.govt.nz"
    },
    {
      name: "BR",
      logo: br,
      link: "https://bespokeclinicalresearch.com.au/"
    },
    {
      name: "Icehouse Ventures",
      logo: icehouse,
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
