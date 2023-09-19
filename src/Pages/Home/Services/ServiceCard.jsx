

const ServiceCard = ({service}) => {
    const {title,img,price}=service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-16">
        <figure>
            <img src={img} alt="Shoes" className="rounded-xl"/>
            </figure>
        <div className="card-body ">
            <div style={{display: 'flex'}}>

                <div>   
                    <h2 className="card-title font-bold text-[#444]">{title}</h2>
                    <p className="text-[#FF3811] font-bold">Price:${price}</p>
                </div>

                        {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div> */}

                <div style={{marginLeft: 'auto'}}>

                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>

        </div>

</div>
    );
};

export default ServiceCard;