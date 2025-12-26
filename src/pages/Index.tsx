import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ZIP INTELLECTUM | Poslovne usluge i savjetovanje</title>
        <meta 
          name="description" 
          content="ZIP INTELLECTUM - obrt za poslovne usluge. Poslovne strategije, istraživanje tržišta, edukacije, marketing i savjetovanje. Vlasnik dr. sc. Zvonimir Filipović." 
        />
        <meta 
          name="keywords" 
          content="poslovne strategije, savjetovanje, istraživanje tržišta, edukacije, marketing, OPG savjetovanje, Hrvatska" 
        />
        <link rel="canonical" href="https://zipintellectum.hr" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
