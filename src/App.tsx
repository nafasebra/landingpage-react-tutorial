import About1 from "./components/layout/about1";
import About2 from "./components/layout/about2";
import Hero from "./components/layout/hero";
import Navbar from "./components/layout/navbar";
import OurClient from "./components/layout/our-client";
import Reach from "./components/layout/reach";
import Services from "./components/layout/services";
import Comment from "./components/layout/Comment";
import Blog from "./components/layout/blog";
import Footer from "./components/layout/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurClient />
      <Services />
      <About1 />
      <Reach />
      <About2 />
      <Comment />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
