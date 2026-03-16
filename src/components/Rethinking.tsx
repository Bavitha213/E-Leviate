export default function Rethinking() {
  return (
    <section
      id="rethinking"
      className="
      bg-periwinkle text-plum px-[120px] py-[160px] pb-[60px]

      lg:px-[120px]
      md:px-[60px]
      sm:px-[30px]

      max-md:px-6
      max-md:py-[80px]
      "
    >

      <div
        className="
        grid lg:grid-cols-[1.15fr_0.85fr] gap-[120px] items-start

        max-md:grid-cols-1
        max-md:gap-10
        "
      >

        {/* LEFT SIDE HEADING */}
        <h2
          className="
          leading-[0.95]
          text-[250px]
          font-[1000]
          max-w-[1100px]
          -ml-[80px]
          -mt-[90px]

          lg:text-[50px]
          md:text-[80px]
          sm:text-[48px]

          max-md:text-[44px]
          max-md:ml-0
          max-md:-mt-6
          max-md:leading-[1.05]
          "
        >
          Rethinking Prolapse <br/>
        </h2>

        {/* RIGHT SIDE TEXT */}
        <div
          className="
          max-w-[1000px]
          text-[8px]
          leading-[1.2]
          font-[400]
          -ml-[100px]
          -mt-[90px]
          space-y-[20px]

          lg:text-[20px]
          md:text-[18px]
          sm:text-[16px]

          max-md:text-[16px]
          max-md:ml-0
          max-md:mt-2
          max-md:max-w-full
          max-md:leading-[1.6]
          max-md:text-left
          max-md:text-justify
          max-md:space-y-4
          "
        >

          <p>
            Pessary support and vaginal estrogen are both effective treatments for prolapse. Together, they provide structural support while improving tissue comfort and tolerance.
          </p>

          <p>
            For long-term outcomes, consistency is key. Yet today's approach often depends on regular, self-administered estrogen therapy—something that can be difficult to sustain over time. When treatment becomes inconsistent, tissue quality may decline and symptoms can recur, affecting comfort, tolerance and increasing the likelihood of discontinuation.
          </p>

          <p>
            E-Leviate is designed to provide comfortable fit for treatment of pelvic organ prolapse and incontinence.
          </p>

        </div>

      </div>

    </section>
  )
}
