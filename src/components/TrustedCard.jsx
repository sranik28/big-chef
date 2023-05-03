import React from 'react';
import img1 from '../assets/Trusted-img/Trusted-1.jpg'
import img2 from '../assets/Trusted-img/Trusted-2.jpg'
import img3 from '../assets/Trusted-img/Trusted-3.jpg'
import img4 from '../assets/Trusted-img/Trusted-4.jpg'
import img5 from '../assets/Trusted-img/Trusted-5.jpg'

const TrustedCard = () => {
    return (
        <div className='container'>
            <section className=" mt-[140px] mb-24">
                <h2 className="text-3xl font-bold text-center mb-10 underline">Trusted <span className="text-yellow-500">By</span></h2>
                <div className="flex items-center gap-5 ui-container flex-wrap">
                    <img className="w-[200px] mt-6 md:mt-auto mx-auto" src={img1} alt="" />
                    <img className="w-[200px] mt-6 md:mt-auto mx-auto" src={img2} alt="" />
                    <img className="w-[200px] mt-6 md:mt-auto mx-auto" src={img3} alt="" />
                    <img className="w-[200px] mt-6 md:mt-auto mx-auto" src={img4} alt="" />
                    <img className="w-[200px] mt-6 md:mt-auto mx-auto" src={img5} alt="" />
                </div>

            </section>
        </div>
    );
};

export default TrustedCard;