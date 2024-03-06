import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";
import logo from './BeowulfImg1.jpg';
import contact from './contact.jpg';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
import logo2 from './TechImg.jpg'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
  <Navbar before="/Conclusion" after="/Body1" />
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-16">
    {/* Left Column */}
    <div className="text-center md:text-left h-full"> {/* Added h-full for height adjustment */}
      <div className="ml-5">
        <h1 className="text-4xl md:text-5xl font-bold text-melon mb-4">Connecting Beowulf to a Modern Society</h1>
        <p className="text-xl md:text-xl font-semibold text-gray-800 mb-8">  Why do we even need history in the modern day? History allows humankind to soar above other species alive here on earth. We have written and visual records of times past, others experience and a breadth of knowledge. Audiences can learn by living vicariously through others which permits advancements in sciences, society, really anything that you can think of. Adding on to this, medieval texts such as Beowulf have messages from over six-hundred years ago that still apply to today. Maria Davhana Headley interprets this text to a modern day audience passing the torch to yet another generation of people. Beowulf is a didactic tale of a heroic protagonist Beowulf grappling with monsters and mortality while questioning masculinity and heroism in a fantasy world filled with chaos. Here I want to give just one more medium that can spur on readers attention to Beowulf. 
</p>
      </div>
    </div>
    {/* Right Column */}
    <div className="flex justify-center items-center">
      <ul>
        <li><img className="md:max-w-full lg:scale-60 h-auto rounded-lg pb-5" src={logo} alt="Beowulf Fighting" /></li>
        <li><img className="md:max-w-full lg:scale-80 h-auto rounded-lg shadow-lg" src={logo2} alt="Tech Photo" /></li>
      </ul>
    </div>
  </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
