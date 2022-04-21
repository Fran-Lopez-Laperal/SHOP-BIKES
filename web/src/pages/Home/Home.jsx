import './Home.css'
import '../../components/ProductCategories/ProductCategories'
import '../../components/HomeCarousel/HomeCarousel'
import ProductCategories from '../../components/ProductCategories/ProductCategories'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'

function Home() {

    return (
        <div className='home'>
            <HomeCarousel />
            <ProductCategories />
        </div>
    )
}

export default Home