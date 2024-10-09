import Image from "next/image";
import CatSniff from "@/app/assets/cat_sniff_pill.png";
import StonedCat from "@/app/assets/stoned_cat.gif";

export default function Home() {
  return (
    <div className="flex flex-col justify-evenly h-dvh">
      <div className="flex flex-col items-center p-8">
        <p className="font-bold text-5xl py-4">Don&apos;t do drugs kids</p>
        <p className="text-sm">drug bad</p>
      </div>
      <div className="flex flex-col items-center p-8">
        <div><Image src={CatSniff} width={500} height={500} alt="catsniff" /></div>
        <p className="font-bold text-4xl py-4">What are drugs?</p>
        <p>Drugs are substances that alter the normal functioning of the body or mind. They can be naturally occurring or synthetically produced and are used for various purposes, such as treating illnesses, relieving pain, or improving mental and physical performance. Drugs come in different forms, including pills, liquids, and powders, and can be classified into categories such as prescription drugs, over-the-counter medications, and illicit drugs. While some drugs are beneficial when used as prescribed by a doctor, others, especially when misused or abused, can have harmful effects on the body and mind.</p>
      </div>
      <div className="flex flex-col items-center p-8">
        <div><Image src={StonedCat} width={500} height={500} alt="stonedcat" /></div>
        <p className="font-bold text-4xl py-4">Why drugs are bad for helth</p>
        <p>Drugs can be harmful to health when they are misused or abused. Illicit drugs or the misuse of prescription drugs can lead to physical dependence, addiction, and a wide range of negative health effects. Prolonged use of certain drugs can damage vital organs like the liver, heart, and brain, impair cognitive functions, and weaken the immune system. Additionally, drugs can cause psychological issues such as anxiety, depression, and paranoia. Overdose is a significant risk, which can lead to severe health complications or death. The impact on health is often long-term, affecting both the body and mental well-being.</p>
      </div>
    </div>
  );
}
