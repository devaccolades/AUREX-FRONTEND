import Image from "next/image";
import FAQ from "./(home)/FAQ";
import Footer from "./(home)/Footer";
import DreamsInThrissur from "./(home)/DreamsInThrissur";

export default function Home() {
  return (
    <div >
      <DreamsInThrissur />
      <FAQ />
      <Footer />
    </div>
  );
}
