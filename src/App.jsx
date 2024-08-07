import "./styles/index.css";
import "./styles/sass/main.scss";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { NavbarComponent, FooterComponent } from "./components";
import {
  Hero,
  Clients,
  Manage,
  Pixelgrade,
  BusinessStats,
  Design,
  MeetAllCustomers,
  Marketing,
  Demo,
} from "./sections";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
    });
  }, []);

  return (
    <>
      <header className="bg-silver">
        <NavbarComponent />
        <section className="bg-silver">
          <Hero />
        </section>
      </header>
      <section className="bg-white">
        <Clients />
        <Manage />
        <Pixelgrade />
      </section>
      <section className="bg-silver">
        <BusinessStats />
      </section>
      <section className="bg-white">
        <Design />
      </section>
      <section className="bg-silver">
        <MeetAllCustomers />
      </section>
      <section className="bg-white pb-5">
        <Marketing />
      </section>
      <section className="bg-silver mt-5">
        <Demo />
      </section>
      <footer className="bg-secondary">
        <FooterComponent />
      </footer>
    </>
  );
}

export default App;
