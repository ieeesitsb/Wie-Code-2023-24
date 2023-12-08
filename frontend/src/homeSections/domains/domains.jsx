import React from 'react'
import Cards from './Cards'
import './domains.css'
import test from '../../assets/images/three.png'
import cardData from './data'; 

const Domains = () => {
    return (
    <div className='card-container'>
        {cardData.map((domain) => (
        <Cards
        key = {domain.id}
        url={domain.url}
        text={domain.text}
        desc={domain.desc}
        />
        ))}
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
