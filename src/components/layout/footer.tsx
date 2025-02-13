import React from "react";
import ArrowRightWhite from "../../assets/icons/arrow-right-white.svg";
import Button from "../ui/Button";
import WhiteLogo from "../../assets/Logo-white.png";

import Instagram from "../../assets/icons/instagram.svg";
import Dribbble from "../../assets/icons/dribbble.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Youtube from "../../assets/icons/youtube.svg";

import SendIcon from "../../assets/icons/send.svg"

const mediaLinks = [
  {
    id: 10,
    icon: Instagram,
  },
  {
    id: 20,
    icon: Dribbble,
  },
  {
    id: 30,
    icon: Twitter,
  },
  {
    id: 40,
    icon: Youtube,
  },
];

function Footer() {
  return (
    <>
      <section className="bg-silver py-10">
        <div className="max-w-[887px] mx-auto flex flex-col items-center gap-6">
          <h2 className="text-heading1 leading-heading1 font-semibold text-center">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <Button>
            <span>Get a Demo</span>
            <img src={ArrowRightWhite} className="w-[24px]" />
          </Button>
        </div>
      </section>
      <footer className="bg-black py-10">
        <section className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full basis-[40%] flex flex-col gap-4 text-white">
            <img src={WhiteLogo} alt="logo" className="w-[191px]" />
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
            <ul className="flex items-center gap-3">
              {mediaLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-full w-[32px] h-[32px] bg-white/10"
                  >
                    <img src={link.icon} alt="icon" className="w-[17px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full basis-[60%] flex flex-col lg:flex-row gap-8 text-white">
            <div className="w-full basis-[30%] flex flex-col gap-4">
              <p className="text-heading4 leading-heading4 font-semibold">
                Company
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="w-full basis-[30%] flex flex-col gap-4">
              <p className="text-heading4 leading-heading4 font-semibold">
                Support
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Help center</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
              </ul>
            </div>
            <div className="w-full basis-[40%] flex flex-col gap-4">
              <p className="text-heading4 leading-heading4 font-semibold">
                Stay up to date
              </p>
              <form action="">
                <div className="relative">
                  <input type="text" name="email" id="email" className="bg-white/30 py-3 pl-4 pr-20 rounded-md" placeholder="Your email address" />
                  <button type="submit" className="absolute top-[50%] -translate-y-[50%] right-3 flex items-center justify-center">
                    <img src={SendIcon} alt="send icon" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
