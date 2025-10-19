import styles from "../styles/aboutUs.module.css";

const FourthSection = () => {
  const sectionTitle = "Our Services";
  const sectionHeading = "Redefining Dining Experiences in India";
  const dataArr = [
    {
      id: 1,
      iconImg:
        "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953176/s-icon-1_1_nt6jyp.png",
      title: "Private Chef at Home",
      text: "Skip the hassle of restaurants and enjoy gourmet dining in your own living room. Our private chefs handle everything — from planning the menu, sourcing fresh ingredients, cooking at your home, serving your family or guests, and even cleaning up afterward. Perfect for anniversaries, small family gatherings, or when you just want to pamper yourself.",
    },
    {
      id: 2,
      iconImg:
        "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953177/s-icon-2_1_uops5f.png",
      title: "Wedding & Event Catering",
      text: "Big fat Indian weddings deserve equally grand food. We specialize in creating diverse menus that represent the richness of Indian traditions. From live dosa counters to Mughlai buffets, from chaat corners to exotic desserts, our team ensures every guest leaves satisfied. Whether your event hosts 50 or 5000, we scale seamlessly.",
    },
    {
      id: 3,
      iconImg:
        "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953177/s-icon-3_2_anlsuq.png",
      title: "Corporate Dining Solutions",
      text: "Food plays a key role in building lasting impressions at work. From boardroom lunches to festive office parties, our chefs create professional, high-quality meals designed to delight. Companies across India trust us for punctual service, customizable packages, and an unmatched dining experience.",
    },
    {
      id: 4,
      iconImg:
        "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953177/s-icon-4_1_ow08kr.png",
      title: "Outdoor & Festive Catering",
      text: "Turn your terrace, lawn, or farmhouse into a mini food festival. We provide live barbeque stations, festive tandoors, chaats, and even regional street food experiences. Perfect for Diwali parties, birthday bashes, or casual weekend get-togethers with friends and family.",
    },
  ];
  return (
    <div className="flex flex-col pt-15 items-center">
      <p
        className={`titleFont text-base sm:text-lg ${styles.fourthSectionTitle}`}
      >
        {sectionTitle}
      </p>
      <img
        className="w-16 sm:w-20 md:w-28"
        src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953167/preview2_f5uba6.png"
      />
<p
  className={`titleFont text-2xl sm:text-3xl my-5 text-center px-4 ${styles.fourthSectionHeading} text-primary`}
>
  {sectionHeading}
</p>

      <div className="grid my-10 px-5 sm:px-10 md:px-20 grid-col-3 grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-24 gap-x-6">
        <div
          className={`${styles.gridItemcontainer} row-start-1 col-start-2 row-span-4`}
        >
          <div className={styles.gridSubcontainer1}>
            <img
              className="max-w-[220px] md:max-w-none"
              src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953160/pattern-8_1_tbdard.png"
            />
          </div>
          <div className={styles.gridSubcontainer2}>
            <img
              className="max-w-[260px] md:max-w-none"
              src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953176/service-image_1_fbk6rt.png"
            />
          </div>
        </div>
        {dataArr.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center text-center md:text-left gap-4"
          >
            <div className="bg-black w-20 h-20 md:w-25 md:h-25 flex items-center justify-center self-center rounded-full p-3">
              <img className="max-w-full" src={item.iconImg} />
            </div>
            <div className="px-2">
              <p className={styles.fourthSectionServiceTitle}>{item.title}</p>
<p className={`${styles.fourthSectionServiceText} text-primary`}>{item.text}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourthSection;
