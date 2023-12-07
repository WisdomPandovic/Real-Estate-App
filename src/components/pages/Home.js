import Nav from "../Nav";
import Hero from "../Hero"
import HouseList from '../HouseList';
import ApartmentTypes from '../ApartmentTypes';
import Background from '../Background';
import PropertiesComponent from '../PropertiesComponent';
import RealEstateAgentComponent from '../RealEstateAgentComponent';
import RealEstateInquiryComponent from '../RealEstateInquiryComponent';
import Footer from '../Footer';
function Home (){
    return(
        <div>
            <Nav/>
            <Hero/>
            <HouseList />
            <ApartmentTypes/>
            <Background/>
            <PropertiesComponent/>
            <RealEstateAgentComponent/>
            <RealEstateInquiryComponent/>
            <Footer/>
        </div>
    )
}
export default Home;