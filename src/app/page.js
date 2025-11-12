import Image from "next/image";
import FAQ from "./(home)/FAQ";
import DreamsInThrissur from "./(home)/DreamsInThrissur";
import Footer from "./Components/Footer";
import Testiminials from "./(home)/Testiminials";

export default function Home() {
  return (
    <div>
      <Testiminials />
      <DreamsInThrissur />
      <FAQ />
      <Footer />
    </div>
  );
}
