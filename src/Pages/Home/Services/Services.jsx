import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
       <div className="mt-14">
         <div className="text-center space-y-3">
            <h1 className="font-bold text-[#FF3811]">Services</h1>
            <h3 className="text-3xl font-bold">Our Service Area</h3>
            <p className="">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2">
            {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>

       </div>
    );
};

export default Services;