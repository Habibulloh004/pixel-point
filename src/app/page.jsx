import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Solutions from "@/components/Solutions";
// import Testimonials from "@/components/Testimonials";
import dynamic from 'next/dynamic'

const About = dynamic(() => import("@/components/About"))
const Solutions = dynamic(() => import("@/components/Solutions"))
const Testimonials = dynamic(() => import("@/components/Testimonials"))

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Solutions />
      <Testimonials />
    </main>
  );
}
