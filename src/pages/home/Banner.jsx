import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1}
                    className="w-full h-[600px]" />

                <div 
                className="absolute left-0 right-5 space-y-7 text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full flex flex-col justify-center">
                    <h1 className='text-5xl font-bold w-1/3'>Affordable Price For Car Servicing</h1>
                    <p className='w-2/5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div >
                        <button className='btn btn-primary'>Discover</button>
                        <button className='btn btn-outline text-white ml-5'>Latest letter</button>
                    </div>
                </div>

                <div className="absolute left-5 right-5  flex justify-end bottom-0 space-x-4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">

                <img src={img2}
                    className="w-full h-[600px]" />
                <div className="absolute left-5 right-5  flex justify-end bottom-0 space-x-4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3}
                    className="w-full h-[600px]" />
                <div className="absolute left-5 right-5  flex justify-end bottom-0 space-x-4">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4}
                    className="w-full h-[600px]" />
                <div className="absolute left-5 right-5  flex justify-end bottom-0 space-x-4">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;