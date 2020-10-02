import React ,{useState} from 'react'
import TinderCard from 'react-tinder-card' 
import "./TinderCards.css";

function TinderCards() {
    const [people,setPeople]=useState([
        
    ])
    const swiped=(re,name)=>{
        console.log(re,name)
    }
    const outOfFrame=(name)=>{
        console.log(name,"left the screen")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {
                people.map((aa)=>(
                    <TinderCard
                        className="swipe"
                        key={aa.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir)=> swiped(dir,aa.name)}
                        onCardLeftScreen={()=>outOfFrame(aa.name)}

                    >
                        <div 
                            style={{ backgroundImage: `url(${aa.image33})`}}
                            className="card"
                        >
                        
                            <h1>{aa.name}</h1>
                        </div>
                    </TinderCard>
                ))}            
            </div>
        </div>
    )
}

export default TinderCards
