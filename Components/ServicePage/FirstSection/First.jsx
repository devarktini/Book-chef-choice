import style from "./First.module.css";

const First = () => {
  return (
    <>
      <div className={style.parent}>
        <div className={style.first}>
          <div className={style.firstLeft}>
            <div className={style.firstL}>
              <h2 className={style.firstL1}>5+</h2>
            </div>
            <div className={style.firstR}>
              <h2 className={style.firstR1}>
                Years of <br></br>Experience
              </h2>
            </div>
          </div>
          <div className={`  flex flex-col xl:flex-row lg:flex-row items-center justify-center`}>
            <img
              className="responsive-img"
              src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/chef_d1mmdd.png"
              alt="Chef-Image 1"
            />
            {/* <img
              className="responsive-img"
              src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/chef2_yiqn6d.png"
              alt="Chef-Image 2"
            /> */}
          </div>
        </div>
        <div className={style.second}>
          <div className={style.secondLeft}>
            <div className={style.card}>
              <img
                className="responsive-img"
                src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953144/05about_q7e5re.png"
                alt="Card 1"
              />
            </div>
          </div>
          <div className={style.secondRight}>
            <h2>Dine Differently: Private Chefs at Your Service</h2>
            <img
              className="responsive-img"
              src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953159/image_reswea.png"
              alt="Decor Image"
            />
            <p className={style.firstR25}>
              At Chef Choice Menu, we bring exceptional culinary experiences
              right to your doorstep. Whether you're hosting a small dinner
              party, planning a corporate event, or craving a private
              fine-dining evening, our team of professional chefs and
              hospitality experts is here to serve unforgettable moments through
              food and service.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default First;
