import React ,{useState , useEffect} from 'react'
import TinderCard from 'react-tinder-card' 
import "./TinderCards.css";
import axios from "./axios";

function TinderCards() {
    const [people,setPeople]=useState([]);
    useEffect(()=> {
        async function fetchData(){
            const req =await axios.get('/tinder/cards');
            console.log('/////',req)
            setPeople(req.data);
        }
        fetchData();
    },[]);

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
                            style={{ backgroundImage: `url(${aa.imgUrl})`}}
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
