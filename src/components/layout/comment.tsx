import React from "react";
import TeslaImage from "../../assets/tesla.png";
import Logo1 from "../../assets/logos/Logo.png";
import Logo2 from "../../assets/logos/Logo-1.png";
import Logo3 from "../../assets/logos/Logo-2.png";
import Logo4 from "../../assets/logos/Logo-3.png";
import Logo5 from "../../assets/logos/Logo-4.png";
import Logo6 from "../../assets/logos/Logo-5.png";
import Logo7 from "../../assets/logos/Logo-6.png";
import ArrowRightIcon from "../../assets/icons/arrow-right.svg"

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

function Comment() {
  return (
    <section className="bg-silver py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-5">
        <div className="w-full basis-[30%] flex items-center justify-center">
          <img src={TeslaImage} alt="tesla-image" />
        </div>
        <div className="w-full basis-[70%] flex flex-col gap-4">
          <p className="text-gray">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className="text-primary">Tim Smith</p>
          <p className="text-light-gray">
            British Dragon Boat Racing Association
          </p>
          <div className="flex items-center flex-wrap gap-4">
            {logos.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex items-center justify-center"
              >
                <img src={logo} alt="logo" />
              </div>
            ))}
            <a href="#" className="flex items-center gap-3">
              <p className="text-primary">Meet all customers</p>
              <img src={ArrowRightIcon} alt="arrow icon" className="w-[24px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comment;
