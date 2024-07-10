import Header from "../components/Header";
import About from "../components/AboutCard";
import BlogLayout from "../components/BlogLayout";
import Navbar from "../components/Navbar";
import '../css/style.css'
import Footer from "../components/Footer";
import StillDev from "../components/StillDev";

function Home(){
    return(
        <>
            <Navbar/>
            <StillDev/>
            <Header/>
            
            <Footer/>
            
        </>
    )
}

export default Home