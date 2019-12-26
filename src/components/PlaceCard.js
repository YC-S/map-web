import React from 'react';
import { Card, Rate } from 'antd';


class PlaceCard extends React.Component {
    onClick = () => {
        this.props.setPlaceCardVisibility(false);
    }
    render() {
        const { placeCardData } = this.props;
        console.log(placeCardData);
        return (
            <div className="place-card">
                <Card title="" extra={<a href="#" onClick={this.onClick}>Close</a>} style={{ width: 600 }}>
                    <div className="place-card-content">
                        <img src={placeCardData.imgURL} alt="" style={{width: "100%", height: "auto"}}></img>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                            <h1 style={{fontSize: "1.1rem", margin: "0"}}>{placeCardData.name}</h1>
                            {/* <p>Rating: {placeCardData.rating}</p> */}
                            <div>Rating: <Rate disabled value={placeCardData.rating} /></div>
                        </div>
                        <p>{placeCardData.description}</p>
                    <p>Contact: {placeCardData.display_phone}</p>
                    {placeCardData.is_closed? <p>Closed Now</p> : <p>Open Now</p>}
                    </div>       
                </Card>
            </div>
        );
    }
}

export default PlaceCard;
