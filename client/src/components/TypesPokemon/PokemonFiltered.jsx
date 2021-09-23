// import React from 'react'
// import {Link} from 'react-router-dom'
// import img from '../../helpers/powerType'

// export const PokemonFiltered = ({ id, name, sprite, types }) => {
//     return (
//         <div className='pokemonCard'>
//             <Link to={'pokemon/' + name}>
//                 <a>
//                     <div>
//                         <h3 className='name'>{name.replace(/\b[a-z]/g,c=>c.toUpperCase())}</h3>
//                         <ul className='typeList'>
//                             {types.map(type => (
//                                 <img src={img[type.name]} alt={`Type: ${type.name}`}/>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className='image'>
//                         <img src={sprite}
//                             width={200}
//                             height={130}
//                             alt={name}    
//                         />
//                     </div>
//                 </a>
//             </Link>
//         </div>
//     )
// }
