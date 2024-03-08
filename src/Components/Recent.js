import React from 'react'

export default function Recent (props) {
    let data = '';
    if(props.recent != null){
        data = props.recent.map((recent, id) => {
            return <li key={id}  onClick={()=> props.research(recent.lat, recent.lon)} className='btn btn-dark my-1'>{recent.city}</li>
        })
    }
  return (
    <div className='card mt-3'>
        <div className='card-header'>
            <h5>Recent Search</h5>
        </div>
        <ul className="list-group px-1">
            {data}
        </ul>
    </div>
  )
}
