
import { BsPersonCheck } from "react-icons/bs";
const Header = (props) => {
    const { username } = props;
    return(
        <div className="bg-gray-900 flex justify-left">
           <div className="flex flex-col items-center mt-0.5 ml-2">
            <p className="text-5xl font-serif font-bold inline-flex flex-wrap p-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-pink-500 italic font-cursive p-2">Quotes</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 italic font-cursive p-2">Hive</span>
            </p>
            <p className="text-sm font-serif tracking-wide">
                <span className="text-orange-800 ml-2">THINK DEEP. FLY HIGH.</span>
                <span className="text-pink-500 ml-1">QUOTE ON</span>
            </p>
            </div>
            <div className="flex items-center justify-center ml-auto mr-2">
                <BsPersonCheck className="text-3xl text-lime-500 ml-2 mt-1" />
                <span className="text-yellow-500 text-base font-serif font-bold ml-1">Hello {username?.split('@')[0]}</span>
            </div> 
        </div>
    )
}

export default Header;