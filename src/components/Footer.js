import { FaTwitter, FaInstagram, FaMailBulk } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footerContainer bg-bluegray text-white py-3 ">
            <nav className="container mx-auto px-4 flex items-center justify-between">
                <span className="text-xl font-semibold">Beowulf</span>
                <ul className="inline-block space-x-10 justify-between text-lg flex items-center justify-between relative">
                    <li><a href="/" className="hover:text-white">Intepretation of Literature 2024 ENGL:1200</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Footer;
