import './App.css';
import Navbar from './components/navbar/Navbar';
import SectionTwo from './components/sectionTwo/SectionTwo';
import SectionOne from './components/sectionOne/SectionOne';
import Testimonial from './components/testimonial/Testimonial';
import Letschat from './components/letschat/LetsChat';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne/>
      <SectionTwo />
      <Letschat />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
