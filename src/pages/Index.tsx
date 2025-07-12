import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import StickyProductNav from "@/components/StickyProductNav";
import BackToTopButton from "@/components/BackToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <StickyProductNav />
      <main>
        <Hero />
        <WhyChoose />
        <Products />
        <Industries />
        <Services />
        <Partners />
        <Contact />
      </main>
      <BackToTopButton />
    </div>
  );
};

export default Index;
