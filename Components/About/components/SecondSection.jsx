import styles from "../styles/aboutUs.module.css";

function SecondSection() {
  const arr = [
    {
      num: 500,
      str: "Daily Order Served",
    },
    {
      num: 150,
      str: "Happy Families Across India",
    },
    {
      num: 15,
      str: "Cities Covered",
    },
    {
      num: 150,
      str: "Professional Chefs Onboarded",
    },
  ];

  return (
    <div
      className={`${styles.secondSectionContainer} py-20 flex justify-around px-5 flex-wrap gap-6`}
    >
      {arr.map((val, index) => (
        <div className="text-center w-1/2 sm:w-auto" key={index}>
          {/* Number */}
          <p className={styles.secondSectionNumber}>{val.num}+</p>

          {/* Text */}
          <p className={styles.secondSectionText}>{val.str}</p>
        </div>
      ))}
    </div>
  );
}

export default SecondSection;
