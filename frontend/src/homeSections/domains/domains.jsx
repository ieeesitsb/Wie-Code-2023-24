import React from 'react'
import Cards from './Cards'
import './domains.css'
import cardData from './data'; 
import Aos from 'aos'
import Fade from 'react-reveal/Fade';

const Domains = () => {
    return (

    <div className='domain-container'>
        <div className='dom-heading'>
        <h1>DOMAINS</h1>
        </div>
        <div className='domain-mini-container'>
        <Fade bottom distance="20%" duration={1000} >

        <div data-aos="fade-up"  className='card-d-container'>
            {cardData.map((domain) => (
            <Cards
            key = {domain.id}
            url={domain.url}
            text={domain.text}
            desc={domain.desc}
            />
            ))}
        </div>
        </Fade>
        </div>
    </div>
    );
};
export default Domains

















// import React from 'react'
// import Cards from './Cards'
// import './domains.css'
// import test from '../../assets/images/three.png'
// import cardData from './data'; 

// const Domains = () => {
//     return (
//     <div className='card-container'>
//         {cardData.map((domain) => (
//         <Cards
//         key = {domain.id}
//         // url={test}
//         url={domain.url}
//         text={domain.text}
//         desc={domain.desc}
//         />
//         ))}
//     </div>
//     );
// };
// export default Domains
