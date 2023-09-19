// import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";


const Banner = () => {
    return (
        <div className="carousel  h-[600px]">
        
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img5} className="w-full  rounded-lg" />
          <div className="absolute flex  -translate-y-1/2 bottom-2">

            <div className="pl-12 mb-10  text-white space-y-7 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]" >
            {/* mr-auto ml-24 mt-48 */}
              <h2 className="text-4xl font-bold">Affordable  Price For Car Servicing</h2>
              <p className="mt-4">There are many variations of passages of available, but the majority have suffered alteration in some form</p>

              <div className="">
                {/* space-x-4  mt-5 */}
                <button className="btn sm:btn-sm md:btn-md btn-outline w-36 mr-5 text-black">Discover More</button>
                <button className="btn sm:btn-sm md:btn-md btn-outline w-36 text-black">Latest Project</button>
             </div>
             </div>

          </div>
          <div className="absolute  justify-end flex space-x-6  transform -translate-y-1/2 left-5 right-5 bottom-2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full  rounded-lg" />
          <div className="absolute flex  -translate-y-1/2 bottom-2">

            <div className="pl-12 mb-10  text-white space-y-7 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]" >
            {/* mr-auto ml-24 mt-48 */}
              <h2 className="text-4xl font-bold">Affordable  Price For Car Servicing</h2>
              <p className="mt-4">There are many variations of passages of available, but the majority have suffered alteration in some form</p>

              <div className="">
                {/* space-x-4  mt-5 */}
                <button className="btn sm:btn-sm md:btn-md btn-outline w-36 mr-5 text-black">Discover More</button>
                <button className="btn sm:btn-sm md:btn-md btn-outline w-36 text-black">Latest Project</button>
             </div>
             </div>

          </div>
          <div className="absolute  justify-end flex space-x-6  transform -translate-y-1/2 left-5 right-5 bottom-2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full  rounded-lg" />
          <div className="absolute flex  -translate-y-1/2 bottom-2">

            <div className="pl-12 mb-10  text-white space-y-7 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]" >
            {/* mr-auto ml-24 mt-48 */}
              <h2 className="text-4xl font-bold">Affordable  Price For Car Servicing</h2>
              <p className="mt-4">There are many variations of passages of available, but the majority have suffered alteration in some form</p>

              <div className="">
                {/* space-x-4  mt-5 */}
                <button className="btn sm:btn-sm md:btn-md btn-outline w-36 mr-5 text-black">Discover More</button>
                <button className="btn sm:btn-sm md:btn-md btn-outline w-36 text-black">Latest Project</button>
             </div>
             </div>

          </div>
          <div className="absolute  justify-end flex space-x-6  transform -translate-y-1/2 left-5 right-5 bottom-2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full  rounded-lg" />
          <div className="absolute flex  -translate-y-1/2 bottom-2">

            <div className="pl-12 mb-10  text-white space-y-7 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]" >
            {/* mr-auto ml-24 mt-48 */}
              <h2 className="text-4xl font-bold">Affordable  Price For Car Servicing</h2>
              <p className="mt-4">There are many variations of passages of available, but the majority have suffered alteration in some form</p>

              <div className="">
                {/* space-x-4  mt-5 */}
                <button className="btn sm:btn-sm md:btn-md btn-outline w-36 mr-5 text-black">Discover More</button>
                <button className="btn sm:btn-sm md:btn-md btn-outline w-36 text-black">Latest Project</button>
             </div>
             </div>

          </div>
          <div className="absolute  justify-end flex space-x-6  transform -translate-y-1/2 left-5 right-5 bottom-2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
        {/* <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> */}
      </div>
    );
};

export default Banner;

{/* <div className="absolute flex justify-end space-x-6  transform -translate-y-1/2 bottom-2">

<div className="mr-auto ml-24 mt-48">
  <h2 className="text-5xl text-white font-bold">Affordable <br /> Price For Car <br />Servicing</h2>
  <p className=" text-white mt-4">There are many variations of passages of available, but <br /> the majority have suffered alteration in some form</p>

  <div className="space-x-4">
    <button className="btn sm:btn-sm md:btn-md btn-outline mt-5 w-36 text-black">Discover More</button>
    <button className="btn sm:btn-sm md:btn-md btn-outline mt-5 w-36 text-black">Latest Project</button>
 </div>
 </div>
 
</div> */}