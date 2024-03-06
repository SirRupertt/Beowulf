import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import {Link} from "react-router-dom";

const Buttons = (props) => {
    return(
            <div className="flex float-right text-5xl ">
                <Link to={props.before} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white"><MdOutlineNavigateBefore /></Link> 
                <Link to={props.after} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white"><MdOutlineNavigateNext /></Link>
            </div>

        
    );}

export default Buttons;