import React from 'react'

export default function Recent (props) {
    let data = '';
    // console.log(props.recent)
    if(props.recent != null){
        data = props.recent.map((recent, id) => {
            return <li key={id} className='list-group-item'>{recent.city}</li>
        })
    }
  return (
    <div className='card mt-3'>
        <div className='card-header'>
            <h5>Recent Search</h5>
        </div>
        <ul className="list-group">
            {data}
        </ul>
    </div>
  )
}
