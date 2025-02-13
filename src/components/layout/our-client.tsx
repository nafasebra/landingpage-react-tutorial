import React from "react";
import Logo1 from "../../assets/logos/Logo.png";
import Logo2 from "../../assets/logos/Logo-1.png";
import Logo3 from "../../assets/logos/Logo-2.png";
import Logo4 from "../../assets/logos/Logo-3.png";
import Logo5 from "../../assets/logos/Logo-4.png";
import Logo6 from "../../assets/logos/Logo-5.png";
import Logo7 from "../../assets/logos/Logo-6.png";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

function OurClient() {
  return (
    <section className="container mx-auto flex flex-col gap-4 py-6">
      <div className="text-center flex flex-col gap-3">
        <h2 className="text-heading2 leading-heading2">Our Clients</h2>
        <p className="text-gray">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-6">
        {
          logos.map((logo, index) => (
            <div key={`logo-${index}`} className="flex items-center justify-center">
              <img src={logo} alt="logo" />
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default OurClient;
