import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Apology from "./components/Apology";
import Background from "./components/Background";
import FinalQuestion from "./components/FinalQuestion";
import FinalScreen from "./components/FinalScreen";
import GrillDay from "./components/GrillDay";
import HeartInteractive from "./components/HeartInteractive";
import Hero from "./components/Hero";
import LittleThings from "./components/LittleThings";
import Nickname from "./components/Nickname";
import Opening from "./components/Opening";
import RealMessage from "./components/RealMessage";
import Song from "./components/Song";
import Story from "./components/Story";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [choice, setChoice] = useState<null | "yes" | "wait">(null);

  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
    document.documentElement.style.overflow = entered ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [entered]);

  return (
    <div className="relative min-h-screen bg-[#060409] text-[#f3e7ea]">
      <Background />

      <main className="relative z-10">
        <Hero />
        <Story />
        <Nickname />
        <GrillDay />
        <Song />
        <Apology />
        <HeartInteractive />
        <LittleThings />
        <RealMessage />
        <FinalQuestion onChoose={setChoice} />
        <FinalScreen revealed={!!choice} />
      </main>

      <AnimatePresence>{!entered && <Opening onEnter={() => setEntered(true)} />}</AnimatePresence>
    </div>
  );
}
