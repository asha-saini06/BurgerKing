import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/BK-logo.png";

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
            <div className="footer-links">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  BK&apos;s INFO
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer hover:text-primary duration-300">
                    About BK*
                  </li>
                  <li className="cursor-pointer hover:text-primary duration-300">
                    Fresh Taste
                  </li>
                  <li className="cursor-pointer hover:text-primary duration-300">
                    Services
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-links">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  CONTACT
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-primary duration-300">
                    FAQs & Support
                  </li>
                  <li className="cursor-pointer hover:text-primary duration-300">
                    Careers
                  </li>
                  <li className="cursor-pointer hover:text-primary duration-300">
                    Customer Care
                  </li>
                  <li className="cursor-pointer hover:text-primary duration-300">
                    Franchising
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-links">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  BK* CARES
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-primary duration-300">
                    Nutrition Information
                  </li>
                  <li className="cursor-pointer hover:text-primary duration-300">
                    Creating Brighter Futures
                  </li>
                  <li className="cursor-pointer hover:text-primary duration-300">
                    Trust & Taste
                  </li>
                  <li className="cursor-pointer hover:text-primary duration-300">
                    COVID-19 Safety
                  </li>
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
