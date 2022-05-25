import './Home.css'
import '../../components/ProductCategories/ProductCategories'
import '../../components/HomeCarousel/HomeCarousel'
import ProductCategories from '../../components/ProductCategories/ProductCategories'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import Secondarybar from '../../components/SecondaryBar/SecondaryBar'

function Home() {

    return (
        <div className='home'>
            <Secondarybar />
            <HomeCarousel />
            <ProductCategories />
        </div>
    )
}

export default Home