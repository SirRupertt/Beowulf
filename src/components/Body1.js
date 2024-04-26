import { Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Buttons from "./Buttons"
import logo from '../news.jpg'
import Footer from './Footer';

const Body1 = () => {
    return(
        <div className="goalsContainer">
            <Navbar before='/' after='/Body2' />
            <div className="flex-grow">
                <div className="grid grid-cols-2 h-screen bg-gray-500">
                    <div className='text-4xl p-6'>
                    {/* Column Left */}
                    <div className="text-center md:text-left h-screen"> {/* Added h-full for height adjustment */}
                        <div className="ml-5">
                            <h1 className="text-4xl md:text-5xl font-bold text-melon mb-4 pt-10">Information Consumption</h1>
                            <p className="lg:text-xl md:text-sm font-semibold text-gray-800 mb-8 md:text-l">Consumption of information by society is ever changing. Before the dawn of technology primary sources were word of mouth and literature. Information at this time was very localized. Means of spreading information were by talking, messengers, or through books for example. Beowulf exemplifies this concept when Beowulf returns to his home after fighting foreign wars, “That Beowulf was back, was shouted man to man… I’m surprised you haven’t heard what went down, Hygelac. It was proud; already written into poems” (l.1971,2000) News of his fight and even that he had returned only was found through word of mouth and poems. Average citizens didn’t have access to up-to-date information. Eventually, civilization became increasingly more interconnected, which allowed more people to have common knowledge. In modern day society the vast majority of content is through the internet. The purpose of knowing this information is that all the historical texts are fading away due to not as much reading of physical books and lack of transformation to technological mediums such as websites. We are losing where we came from along with overwhelmingly important themes and lessons. In the future, there is no way to predict what mediums will come along, but principally we need to maintain records.
</p>
                        </div>
                    </div>
                    </div>
                    {/* Column Right */}
                    <div className="flex justify-center items-center m-auto">
                        <img className="max-w-full h-auto rounded-lg shadow-lg" src={logo} alt="Phone coffee and newspaper on table" />
                    </div>
                </div> 
                <Outlet />
            </div>
            <Footer />
        </div>
        
    );}

export default Body1