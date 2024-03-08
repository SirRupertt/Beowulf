import { Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Buttons from "./Buttons"
import logo from '../history.jpg'
import Footer from './Footer';

const Conclusion = () => {
    return(
        <div className="goalsContainer">
            <Navbar before='/Body2' after='/' />
            <div className="flex-grow">
                <div className="grid grid-cols-2 h-screen bg-gray-500">
                    <div className='text-4xl p-6'>
                    {/* Column Left */}
                    <div className="text-center md:text-left h-full"> {/* Added h-full for height adjustment */}
                        <div className="ml-5">
                            <h1 className="text-4xl md:text-5xl font-bold text-melon mb-4">What is the purpose?</h1>
                            <p className="lg:text-xl md:text-xl font-semibold text-gray-800 mb-8">In totality, history and the mediums in which we perceive it are extremely important and not to be left in the sands of time. We can learn from past experiences, thriving in modern day because of the work our ancestors put in. Maria Dahvana Headley’s Beowulf provides the reader with various messages, spanning from positive to negative traits, making a clear connection to today’s societal norms. The messages of masculinity and heroism in particular, can be helpful for readers to excel, while also taking some of the more extreme themes with a grain of salt. I think we can all do our part to recognize the importance of  historical texts, while keeping in mind what is still applicable in today’s society. </p>
                        </div>
                    </div>
                    </div>
                    {/* Column Right */}
                    <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center m-auto">
                        <img className="max-w-full h-auto rounded-lg shadow-lg" src={logo} alt="Old historic Pillars Photo" />
                    </div>
                    </div>
                </div>    
                <Footer />
                <Outlet />
            </div>
        </div>
        
    );}

export default Conclusion