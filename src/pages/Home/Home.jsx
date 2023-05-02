import { Navbar } from "react-bootstrap";
import banner from "../../assets/banner-home.png";
import { ConteudosHome } from "../../components/ConteudosHome/ConteudosHome";

export function Home() {
    return (
        <div className="home">
            <img src={banner} alt="SoulPet Banner" className="w-100" />
        
        <div>
            <ConteudosHome />
        </div>
        </div>
    );
}