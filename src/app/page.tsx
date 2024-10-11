import Image from "next/image";
import CatSniff from "@/app/assets/cat_sniff_pill.png";
import StonedCat from "@/app/assets/stoned_cat.gif";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Home() {
  const headerWords: string[] = ["Don't", "Maybe", "You probably shouldn't", "Sometimes people", "My dad likes to", "I", "Never", "We like to", "We hate to"];
  const subjectWords: string[] = ["Some   bozo", "My   friend   Bobby", "My   dad", "My   uncle", "Your   mum", "That   dude   over   there", "Bro"];
  const verbWords: string[] = ["took", "ingested", "inhaled", "digested", "consumed", "looked   at"];
  const amountWords: string[] = ["a   tiny   amount   of", "a   handful   of", "a   moderate amount   of", "a   bunch   of", "a   shitton   of", "a   truckload   of"];
  const drugWords: string[] = ["crack", "coke", "ice", "meth", "shrooms", "heroin", "koufu   caifan", "sparkling   water"];
  const dayWords: string[] = ["last   month", "yesterday", "just   now", "last   week", "10   minutes   ago", "2   days   ago"];
  const resultWords: string[] = ["puked   non-stop   after", "had   explosive   diarrhea", "won   the   lottery", "died", "slept   and   never   woke   again", "are   still   addicted   to   this   day", "fainted   on   the   spot", "hated   it"]

  const headerWords2 = [{text: "What"}, {text: "are"}, {text: "drugs?"}]
  const headerWords3 = [{text: "Why"}, {text: "drugs"}, {text: "are"}, {text: "bad"}, {text: "for"}, {text: "helth"}]

  return (
    <div className="flex flex-col justify-evenly h-dvh">
      <div className="flex flex-col items-center p-8">
        <div className="font-bold text-5xl py-4"><FlipWords words={headerWords}/>do drugs kids</div>
        <p className="text-sm">drug bad</p>
      </div>
      <div className="flex flex-col items-center p-8">
        <div><Image src={CatSniff} width={500} alt="catsniff" unoptimized /></div>
        <TypewriterEffect words={headerWords2} className="font-bold text-4xl py-4" cursorClassName="bg-white" />
        <p>Drugs are a kind of ingredient known as lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="flex flex-col items-center p-8">
        <div><Image src={StonedCat} width={500} alt="stonedcat" unoptimized /></div>
        <TypewriterEffect words={headerWords3} className="font-bold text-4xl py-4" cursorClassName="bg-white" />
        <div className="text-xl mx-auto">
          <FlipWords duration={6000} words={subjectWords}/>
          <FlipWords duration={6000} words={verbWords}/>
          <FlipWords duration={6000} words={amountWords}/>
          <FlipWords duration={6000} words={drugWords}/>
          <FlipWords duration={6000} words={dayWords}/>
          ,&nbsp;&nbsp;&nbsp;and&nbsp;&nbsp;&nbsp;then&nbsp;&nbsp;&nbsp;they
          <FlipWords duration={6000} words={resultWords}/>
        </div>
      </div>
    </div>
  );
}
