import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import {
  About, Audience, Brands, Portfolio,
  Services, Pricing, Terms, Contact, Toolkit, Footer,
} from "@/components/sections";
import AosInit from "@/components/AosInit";

export default function Page() {
  return (
    <>
      <AosInit />
      <Nav />
      <main>
        <Hero />
        <About />
        <Audience />
        <Brands />
        <Portfolio />
        <Services />
        <Pricing />
        <Terms />
        <Contact />
        <Toolkit />
      </main>
      <Footer />
    </>
  );
}
