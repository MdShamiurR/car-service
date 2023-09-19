import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const About = () => {
    return (
        <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <div className="lg:w-1/2 relative">
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={parts} className="w-1/2 absolute right-7 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
    </div>
    <div className="lg:w-1/2 space-y-3 p-[50px]">
      <h3 className="text-[#FF3811] font-bold">About  us</h3>
      <h1 className="text-4xl font-bold w-2/3">We are qualified & of experience in this field</h1>
      <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p> 
      <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p> 
      <button className="btn btn-primary w-[170px] h-[56px] font-semibold border-white bg-[#FF3811]">Get More Info</button>
                   </div>
  </div>
</div>
    );
};

export default About;