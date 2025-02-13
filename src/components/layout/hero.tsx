import HeaderImage from "../../assets/Illustration.png";
import Button from "../ui/Button";

function Hero() {
  return (
    <header className="bg-silver py-10">
      <section className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6">
        <div className="w-full basis-[65%] flex flex-col items-start gap-4">
          <h1 className="text-heading1 font-semibold leading-heading1">
            Lessons and insights <br />{" "}
            <span className="text-primary">from 8 years</span>
          </h1>
          <p className="text-gray">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button>Register</Button>
        </div>
        <div className="w-full basis-[35%] flex items-center justify-center">
          <img src={HeaderImage} alt="HeaderImage" className="w-full" />
        </div>
      </section>
    </header>
  );
}

export default Hero;
