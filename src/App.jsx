import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponents";
import Hero from "./sections/Hero";
import Clients from "./sections/Clients";
import Manage from "./sections/Manage";
import Pixelgrade from "./sections/Pixelgrade";
import BusinessStats from "./sections/BusinessStats";
import Design from "./sections/Design";
import MeetAllCustomers from "./sections/MeetAllCustomers";
import Marketing from "./sections/Marketing";
import Demo from "./sections/Demo";
import FooterComponent from "./components/FooterComponent";

function App() {
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
