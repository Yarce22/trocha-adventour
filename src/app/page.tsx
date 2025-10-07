import { Hero } from "@/components/Hero"
import { Routes } from "@/components/Routes"
import { About } from "@/components/About"
import { Alliance } from "@/components/Alliance"

export default function Home() {
  return (
    <>
      <Hero />
      <Routes />
      <About />
      <Alliance />
    </>
  );
}
