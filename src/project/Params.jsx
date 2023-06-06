import React from 'react'
import { useParams } from 'react-router-dom'

export const Params = () => {
    const param = useParams()
  return (
    <h1>{param.name}</h1>
//     <table border={1}>
//     <tr>
//       <th style={{padding:'5px 10px'}}>№</th>
//       <th style={{padding:'5px 10px'}}>Name</th>
//       <th style={{padding:'5px 10px'}}>Price</th>
//       <th style={{padding:'5px 10px'}}>Bed</th>
//       <th style={{padding:'5px 10px'}}>Bath</th>
//       <th style={{padding:'5px 10px'}}>Sq</th>
//     </tr>
//     <tr>
//       <td style={{padding:'5px 10px'}}>{param.id}</td>
//       <td style={{padding:'5px 10px'}}>{param.price}</td>
//       <td style={{padding:'5px 10px'}}>{param.details?.bed}</td>
//       <td style={{padding:'5px 10px'}}>{param.details?.bath}</td>
//       <td style={{padding:'5px 10px'}}>{param.details?.sq}</td>
//     </tr>
//   </table> 
  )
}

export default Params