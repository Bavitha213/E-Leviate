export default function Timeline() {
  const milestones = [
    { period: 'Q1 2024', title: 'R&D completed' },
    { period: 'Q2 2024', title: 'Prototype testing' },
    { period: '2025', title: 'Pre-Clinical trials' },
    { period: '2026', title: 'Clinical trials' },
    { period: 'Q4 2026', title: 'Initial NZ market entry' },
    { period: '2027', title: 'Full market entry' },
  ];

  return (
    <section id="timeline" className="bg-plum text-ivory py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* HEADING */}
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center -mt-[70px] max-md:mt-0">
          Timeline
        </h2>

        <div className="relative">

          {/* DESKTOP TIMELINE LINE */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-periwinkle hidden lg:block -mt-[22px]"></div>

          {/* GRID */}
          <div
            className="
            grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 -mt-[-140px]

            max-md:mt-0
            "
          >

            {milestones.map((milestone, index) => (
              <div key={index} className="relative text-center">

                {/* DOT */}
                <div className="mb-4 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-periwinkle -mt-[6px] max-md:mt-0"></div>
                </div>

                {/* PERIOD */}
                <div className="text-base font-medium mb-2 text-periwinkle -mt-[68px] max-md:mt-2">
                  {milestone.period}
                </div>

                {/* TITLE */}
                <div className="text-xs -mt-[-50px] max-md:mt-1 max-md:text-sm">
                  {milestone.title}
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}