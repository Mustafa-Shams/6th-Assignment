import Image from "next/image";


import Header from "./components/header/header";
import Header2 from "./components/header/header2";
import Hero from "./components/hero/hero0"
import Hero1 from "./components/hero/hero1"
import Hero2 from "./components/hero/hero2"
import Hero3 from "./components/hero/hero3"
import Hero4 from "./components/hero/hero4"
import Hero5 from "./components/hero/hero5"
import Hero6 from "./components/hero/hero6"
import Footer from "./components/footer/footer"
export default function Home() {
  return (
  <body className="w-screen" >
    
      <Header></Header>
      <Header2></Header2>
      <Hero></Hero>
      <Hero1></Hero1>
      <Hero2></Hero2>
      <Hero3></Hero3>
      <Hero4></Hero4>
      <Hero5></Hero5>
      <Hero6></Hero6>
      <Footer></Footer>

  </body>
  );
}
