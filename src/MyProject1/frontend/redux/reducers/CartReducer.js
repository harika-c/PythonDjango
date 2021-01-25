

export const CartReducer=(state=[],action)=>{
    switch(action.type){
        case "addtocart":
            console.log('addtocart reducer..',state,'..',state.item,'........data..',action.data)
            var atc=[]
                if(state.length!=0){
                    console.log('defined',action.data,'....',state.count)
                    atc= [...state,
                    
                    // state: [action.data + parseInt(state.state, 10)],
                    action.payload,
                        
                    
                
                    ]
                console.log('atc reducer',atc)
                return atc;
            }else return [...state,
                 action.payload,
              
            ]

        case "removefromcart":
            return{
                state:  action.payload,
            }
         default:
             return state;   
    }

}