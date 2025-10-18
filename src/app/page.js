import Image from "next/image";
import FAQ from "./(home)/FAQ";
import DreamsInThrissur from "./(home)/DreamsInThrissur";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div >
      <DreamsInThrissur />
      <FAQ />
      <Footer />
    </div>
  );
}
