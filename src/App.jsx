import About from './About';
import { Details } from './Details';
import { Intro } from './Intro';
import { Navbar } from './Navbar';
import Speakers from './Speakers';
import Tickets from './Tickets';
import Footer from './Footer';

function App() {
  return (
    <div className="bg-backgroundBlack w-full flex flex-col">
      <Navbar />
      <Intro />
      <Details />
      <Speakers />
      <Tickets />
      <About />
      <Footer />
    </div>
  );
}

export default App;
