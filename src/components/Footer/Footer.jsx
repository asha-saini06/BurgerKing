import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/BK-logo.png";

const FooterLinks = [
  {
    id: 1,
    title: "BK's INFO",
    links: [
      {
        id: 1,
        name: "About BK*",
      },
      {
        id: 2,
        name: "Fresh Taste",
      },
      {
        id: 3,
        name: "Services",
      },
    ],
  },
  {
    id: 2,
    title: "Contact",
    links: [
      {
        id: 1,
        name: "FAQs & Support",
      },
      {
        id: 2,
        name: "Careers",
      },
      {
        id: 3,
        name: "Customer Care",
      },
      {
        id: 4,
        name: "Franchising",
      },
    ],
  },
  {
    id: 3,
    title: "BK* CARES",
    links: [
      {
        id: 1,
        name: "Nutrition Information",
      },
      {
        id: 2,
        name: "Creating Brighter Futures",
      },
      {
        id: 3,
        name: "Trust & Taste",
      },
      {
        id: 4,
        name: "COVID-19 Safety",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div data-aos="fade-up" className="bg-gray-100">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          {/* details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="w-16" />
              Burger King
            </h1>
            <p className="footer-content">
              Savor the flame-grilled perfection at Burger King – Where Whopper
              dreams come true. Indulge in royal taste, bite after bite.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>New Delhi</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          {/* footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            {/* First Column */}
            <div className="footer-links">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  BK&apos;s INFO
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks[0].links.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary duration-300"
                      key={link.id}
                    >
                      <a href={link.link}> {link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Second Column */}
            <div className="footer-links">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contact
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks[1].links.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary duration-300"
                      key={link.id}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Third Column */}
            <div className="footer-links">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  BK* CARES
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks[2].links.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary duration-300"
                      key={link.id}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @ 2024. All Rights Reserved
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
