import Burger1 from "../../assets/burger/Boss Whopper Veg.png";
import Burger2 from "../../assets/burger/Veg Whopper.png";
import Burger3 from "../../assets/burger/Veg Whopper with Cheese.png";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

const ServicesData = [
  {
    id: 1,
    img: Burger1,
    name: "Boss Whopper Veg",
    description:
      "The biggest Whopper ever, Boss Whopper, with Premium buns, extra crunchy veg patty, cheese, crunchy chips, loads of veggies & sauces. Big on flavours, big on bite.",
    aosDelay: "100",
  },

  {
    id: 2,
    img: Burger3,
    name: "Veg Whopper with Cheese",
    description:
      "Our tribute to classic American taste. BK veg patty with cheese slice, garden fresh crispy lettuce, juicy tomato (seasonal) & our signature sauce.",
    aosDelay: "500",
  },
  {
    id: 3,
    img: Burger2,
    name: "Veg Whopper",
    description:
      "Our signature Whopper with 7 layers between the buns in a convenient size. Extra crunchy veg Patty, fresh onion, crispy lettuce, juicy tomatoes(seasonal), tangy gherkins, creamy and smoky sauces.",
    aosDelay: "300",
  },
];
const Services = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-12 lg:py-20">
        <div className="container">
          <HeaderTitle
            title="Specials"
            subtitle="BK's"
            description={"Big on Flavours, Big on Bite"}
          />
          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-500 group max-w-[300px]"
                key={service.id}
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-16
                   group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-500 text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
