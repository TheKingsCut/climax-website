import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Products />
        <Industries />
        <Services />
        <Partners />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
