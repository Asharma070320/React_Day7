import './Cards.css'
import Paragraph from './Paragraph'

function Cards(props){

    return(
    <div className="cards">
        <div className="innerCard">
            <div className="star">
                 <p className="size">{props.name}</p>
                <div className="icons">
                <i class="ri-star-fill"></i>
                 <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                </div>
            </div>
                <div className="cardMiddle">
                    <i class="ri-map-pin-fill"></i> &nbsp;
                    <p className="address">{props.address}</p>
                    
                </div>
                <p className="little">{props.outcode} {props.postcode}</p>
        </div>

        <div className="outerCard">
            <div className="cutlery">
              <i className="material-icons">flatware</i>
              <p>{props.type_of_food}</p>
            </div>
            <a className="tasu" href="">Visit Menu</a>
        </div>
            
     </div>
    )
}
export default Cards