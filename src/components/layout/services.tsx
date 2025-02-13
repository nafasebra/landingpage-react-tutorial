import React from "react";
import GroupIcon from "../../assets/icons/group.svg";
import BuildingIcon from "../../assets/icons/building.svg";
import CollabIcon from "../../assets/icons/collaboration.svg";

const services = [
  {
    id: 123,
    icon: GroupIcon,
    title: "Membership Organisations",
    subTitle:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 234,
    icon: BuildingIcon,
    title: "National Associations",
    subTitle:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 456,
    icon: CollabIcon,
    title: "Clubs And Groups",
    subTitle:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

function Services() {
  return (
    <section className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
      {services.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center text-center gap-4"
        >
          <div className="relative h-[50px]">
            <img src={item.icon} alt="icon" />
            <div className="-z-1 absolute top-1 -right-3 bg-tint-5 rounded-tl-[10px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[18px] w-[50px] h-[49px]"></div>
          </div>
          <h3 className="text-heading3 leading-heading3 font-bold">
            {item.title}
          </h3>
          <p className="text-gray">{item.subTitle}</p>
        </div>
      ))}
    </section>
  );
}

export default Services;
