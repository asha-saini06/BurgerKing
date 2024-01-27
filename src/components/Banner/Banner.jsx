import BurgerImg from "../../assets/burger/burger.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[500px] ">
      <div className="min-h-[500px] flex justify-center items-center">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* image section  */}
            <div>
              <img
                src={BurgerImg}
                alt="floating burger"
                className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
              />
            </div>
            {/* text content section  */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl font-bold">
                Your taste buds deserve nothing less!
              </h1>
              <p className="text-gray-500 text-sm tracking-wide leading-5">
                Savor the extraordinary at Burger King! Our flame-grilled
                burgers are a tantalizing blend of bold flavors and quality
                ingredients. <br />
                <br /> Join us for a royal feast where innovation meets
                tradition, and each bite is a masterpiece. Treat yourself to the
                ultimate flavor experience at Burger King – where satisfaction
                is served with every bite!
              </p>
              <div className="flex gap-6">
                <div>
                  <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100" />
                </div>
                <div>
                  <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100" />
                </div>
                <div>
                  <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100" />
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="500">
                <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
