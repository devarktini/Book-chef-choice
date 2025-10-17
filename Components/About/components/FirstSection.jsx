import styles from "../styles/aboutUs.module.css";

function FirstSection({ className }) {
  const heading = <p className={styles.cardHeading}>WHO WE ARE</p>;

  const titleParagraph = (
    <p className="text-base md:text-lg para text-white">
      We are a collective of culinary experts, food enthusiasts, and
      professional chefs with one vision — to bring authentic, homely, and
      unforgettable dining experiences right to your doorstep. Our journey began
      with a simple idea: that hiring a chef in India should be as easy as
      <span className="text-orange-500"> Over the years</span>. we have served
      countless families, hosted large weddings, designed curated corporate
      menus, and partnered with some of the best kitchens in the country. From
      traditional Indian thalis to international gourmet platters, our chefs
      blend authenticity with innovation, ensuring that every meal feels like a
      story told through taste.
    </p>
  );

  const cardContactAndTimeData = [
    {
      type: "Lunch Time",
      data: ["Monday To Sunday", "11.00 AM - 3.00 PM"],
    },
    {
      type: "Dinner Time",
      data: ["Monday To Sunday", "6.30 PM - 11.00 PM"],
    },
    {
      type: "Contact Us",
      data: [
        "B-99, 5th Floor, Phase-I Panchsheel Park Malviya Nagar, Near Triveni Complex New Delhi - 110017",
      ],
    },
  ];

  return (
    <div className={`${styles.sectionContainer} ${className} py-10`}>
      {/* Top right decoration */}
      <div className={`${styles.decorTopRight}`}>
        <img
          className="w-20 sm:w-28 md:w-40 mb-[30px] -mt-[20px] sm:mt-0"
          src="https://res.cloudinary.com/dzvvb0z0h/image/upload/v1757953144/08_or6jqw.png"
        />
      </div>

      {/* Bottom left decoration */}
      <div className={`${styles.decorBottomLeft}`}>
        <img
          className="w-50 sm:w-28 md:w-40"
          src="https://res.cloudinary.com/dzvvb0z0h/image/upload/v1757953146/56325_vulakb.png"
        />
      </div>

      {/* Heading + Title */}
      <div className="flex flex-col items-center space-x-2 text-center px-4">
        <span className="text-base md:text-lg titleFont text-orange-500">
          {heading}
        </span>
        <span>
          <img
            className="w-16 sm:w-20 md:w-28"
            src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953167/preview2_f5uba6.png"
          />
        </span>
        <span className="w-full sm:w-4/5 md:w-9/20 text-center">
          {titleParagraph}
        </span>
      </div>

      {/* Content grid */}
      <div className="px-4 sm:px-8 md:px-12 pt-10 md:pt-24 grid gap-6 md:grid-cols-3">
        {/* Left text + image */}
        <div className="item1 flex flex-col items-center space-y-4 md:block">
          <div>
            <p className="text-sm md:text-base para text-white">
              What sets us apart is our attention to detail — not just in
              cooking but in the entire dining experience. Each chef we onboard
              undergoes rigorous training, background verification, and skill
              assessments. This means when you book a chef with us, you’re not
              only choosing convenience but also trust, professionalism, and
              quality. Our services extend from small family gatherings to
              high-end events, making sure your guests always remember the food
              and hospitality. After all, food in India is not just nourishment
              — it’s culture, emotion, and celebration.
            </p>
          </div>
          <img
            className="w-full md:w-auto rounded-lg mt-20"
            src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953143/06_avtcm3.png"
          />
        </div>

        {/* Middle image */}
        <div className="item2 hidden md:block">
          <img
            className="rounded-lg"
            src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953145/563251_bq4cwz.png"
          />
        </div>

        {/* Right card (time & contact info) */}
        <div className={`item3 ${styles.parentContainer}`}>
          <div
            className={`${styles.childContainer1} border py-12 border-orange-500`}
          >
            {cardContactAndTimeData.map((item, index) => (
              <div
                className="my-5 text-center flex flex-col items-center px-2"
                key={index}
              >
                {/* Type heading in #FC7000 + Julius Sans One */}
                <p className={styles.cardHeading}>{item.type}</p>

                {/* Data lines in white + Roboto */}
                {Array.isArray(item.data) ? (
                  item.data.map((val, idx) => (
                    <p className={styles.cardData} key={idx}>
                      {val}
                    </p>
                  ))
                ) : (
                  <p className={styles.cardData}>{item.data}</p>
                )}

                {/* Icon after Dinner Time */}
                {index === 1 && (
                  <img
                    className="w-10 mt-2"
                    src="https://res.cloudinary.com/dzvvb0z0h/image/upload/v1757953159/hexagon1_yt9zuw.svg"
                  />
                )}
              </div>
            ))}
          </div>
          <div
            className={`${styles.childContainer2} border border-orange-500`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
