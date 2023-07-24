import './App.css';
import './assets/css/bootstrap.css';
import './assets/css/fontawesome-all.css';
import './assets/css/swiper.css';
import './assets/css/magnific-popup.css';
import './assets/css/styles.css';




import logo from './assets/images/logo.svg';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Branding from './components/Branding';
import DesignSection from './components/DesignSection';
import Marketing from './components/Marketing';
import OurStrength from './components/OurStrength';
import Mission from './components/Mission';
import Projects from './components/Projects';
import AboutUs from './components/AboutUs';
import Invitation from './components/Invitation';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import MetaTags from './components/MetaTags';

function App(props) {
  return (
  <>
  {/* Include MetaTags  */}
  <MetaTags title="Spify" />
  {/* Include MetaTags  */}

  {/* Include Navigation  */}
  <Navigation logoFile={logo} />
  {/* Include Navigation */}

  {/* Include Header */}
  <Header logoFile={logo} heading="Transforming Visions into Digital Reality: Your Web Solutions Partner! "/>
  {/* Include Header */}

  {/* Include Branding */}
  <Branding heading="Branding & Strategy"/>
  {/* Include Branding */}
   
  {/* Include DesignSection */}
  <DesignSection heading="Design & Development" />
  {/* Include DesignSection */}

  {/* Include Marketing */}
  <Marketing heading="Marketing Strategy" />
  {/* Include Marketing */}

  {/* Include Mission */}
  <Mission mission="Our mission is to empower businesses and individuals with cutting-edge web-based solutions that drive innovation, efficiency, and growth through expert development, seamless user experiences. "/>
  {/* Include Mission */}

  {/*Include Our Strength */}
  <OurStrength/>
  {/*Include Our Strength */}
  
  {/*Include Our Projects */}
  <Projects/>
  {/*Include Our Projects */}

  {/*Include About Us */}
  <AboutUs/>
  {/*Include About Us */}

  {/*Include Invitation */}
  <Invitation message="We invite you to book a consultation call with one of our Key
          Account Managers and we guarantee it will not be a waste of time."/>
  {/*Include Invitation */}
    
  {/*Include Contact Us */}
  <ContactUs />
  {/*Include Contact Us */}
    
  {/*Include Footer */}
  <Footer />
  {/*Include Footer */}

  
  {/* Scripts */}
  {/* jQuery for Bootstrap's JavaScript plugins */}
  {/* Bootstrap framework */}
  {/* jQuery Easing for smooth scrolling between anchors */}
  {/* Swiper for image and text sliders */}
  {/* Magnific Popup for lightboxes */}
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
  {/* Custom scripts */}
    </>
  );
}

export default App;
