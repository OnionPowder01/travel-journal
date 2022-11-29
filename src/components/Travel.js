import React from "react";

import checkIn from '../images/PngItem_235870.png'



export default function Travel(props){
    
    return (
        <div className='card'  style={((props.length - 1) === props.index) ? {borderBottom: 'initial'} : {borderBottom: '2px solid #e6e3ef'} } >
            <div className="left-side">
            <img src={props.item.imageUrl} alt="place" className="card--image" />
            </div>
            <div className="right-side">
                <div className="header-details">
                <img src={checkIn} alt="checkIn" className="card--checkin" />
                <span className="card--location">{props.item.location}</span>
                <a href={props.item.googleMapsUrl} className="card--maps">View on Google Maps</a>
                </div>
                <h1 className="card--h1">{props.item.title}</h1>
                <p className="card--period">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--description">{props.item.description}</p>

            </div>

        </div>
    )

}

