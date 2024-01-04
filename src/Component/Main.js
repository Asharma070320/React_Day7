import Paragraph from "./Paragraph"
import Cards from "./Cards"

function Main(){
    return(
    <>
        <div className="main">
            <input className="big" type="text" placeholder="Search resturants..." />

            <label htmlFor="">Minimum Rating:   
                <input className="side" placeholder="0" type="number" min={0} max={5}/>
            </label>
        </div>

        <div className="allCards">
            {
                Paragraph.map((data)=>{
                    return <Cards {...data} />
                })
            }
        </div>

    </>
    )
}
export default Main