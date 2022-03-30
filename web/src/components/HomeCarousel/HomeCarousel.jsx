import './HomeCarousel.css'
import img1 from '../../assets/CarouselImages/ASSOS-action1-600x400-1.jpeg'
import img2 from '../../assets/CarouselImages/bicis.jpeg'
import img3 from '../../assets/CarouselImages/sram_x01_eagle_2021_accion_1.jpeg'

function HomeCarousel() {

    return (
        <>
            <div className='home-carousel mt-5'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block" alt={img1} />                    
                        </div>
                        
                        <div className="carousel-item">
                            <img src={img2} className="d-block" alt={img2} />                      
                        </div>

                        <div className="carousel-item">
                            <img src={img3} className="d-block" alt={img3} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default HomeCarousel