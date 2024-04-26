import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Buttons from "./Buttons";
import logo from "../rethink.jpg";
import Footer from "./Footer";

const Body2 = () => {
  return (
    <div className="goalsContainer">
      <Navbar before="/Body1" after="/Conclusion" />
      <div className="flex-grow container mx-auto">
        {/* Row for content and image */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-4xl p-6">
            <div className="text-center md:text-left h-full">
              <div className="ml-5">
                <h1 className="text-4xl md:text-5xl font-bold text-melon mb-4">
                  Principals in Literature
                </h1>
                <p className="lg:text-xl md:text-sm font-semibold text-gray-800 mb-8">
                Beowulf has messages that are hundreds of years old, such as masculinity, heroism, and what is good and evil, that many today would benefit from understanding. There is no reason to grapple with these concepts that others have already explored and can expedite/improve our situation. For example, in Headley’s words “everyone knew what men were: brave, bold, glory-bound. Only stories now, but I’ll sound the Spear Danes’ song, hoarded for hungry times”.(l.2-3) At first glance it seems to just reminisce on what once was and how men acted. When reflecting and delving deeper into this quote one can realize it’s illustrating a dynamic of when we approach “hungry” or hard times we can look back to men before us to see what worked for them and what didn’t. How heroic feats went well or poorly, if being masculine was positive or negative depending on what aspects, ect. We shouldn’t repeat the mistakes of old over and over. There is no progress being made if we repeat the same actions as the people before us. Headley demonstrates that being “bold, glory-bound” was rewarded and what worked for these people. Implementation of these traits allowed Beowulf to be included in history and save countless lives. Had he been a coward his life would have been drastically different. Although Beowulf was written in a very different time, there are still takeaways for modern day life. Being a leader, pursuing your vision, and taking pride in yourself is a very powerful combination and valuable lesson. Taking charge of your life and pursuing what you want is one of Headley’s messages demonstrated by Beowulf’s relentlessness. Beowulf showed strength in knowing what he wanted and fighting for what he believed in. We can utilize these positive aspects of masculinity in our lives today. On the contrary, toxic traits of masculinity are shown as well by illustrating superiority over women or forcing conformity to what is societally accepted. We have come to understand that this is unacceptable, we can pick and choose what values we decide to take from these passages. This is but just one small example of what could be found through literature. Overall we can come to understand that there are key lessons inside of medieval/historical literature. Although, as stated before not every lesson is applicable to today as times have changed. How can we ride on the shoulders of giants before us rather than struggling reinventing the wheel. 
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <img
              className="w-full h-auto max-h-70 object-cover rounded-lg shadow-lg pb-10"
              src={logo}
              alt="Think about things differently picture"
            />
          </div>
        </div>

        {/* Footer below the content and image */}
        <Footer />
        <Outlet />
      </div>
    </div>
  );
};

export default Body2;
