import React, { useReducer } from 'react'
const arr=require("./data.json")
const Body = () => {
    function reducerfun(state,action){
        switch(action.type){
            case "remove":
                return{
                    ...state,
                    data: state.data.map((e) =>
                        e.id === action.payload.id
                        ? { ...e,count:action.payload.count-1,
                              
                        }
                        :e
                        
                        
                    ),
                   cart:[...state.cart,action.payload]
                  
                   
                };
                    case "ADD":
                    return{
                        ...state,
                        data: state.data.map((e) =>
                            e.id === action.payload.id
                            ? { ...e,count:action.payload.count+1,
                              
                                }
                            : e
                            
                          
                        ),
                        
                     
                      
                        
                       
                       
                    }
                   
                    
        }
       

    }
    const[state,dispatch]=useReducer(reducerfun,arr)
    const total=state.data.reduce(
        (acc, member) => acc +Math.floor(member.value*member.count),
        0
    )
    console.log(state)

  return (
    <div>
        <div id="main">
          <div id="leftdiv">
         {state.data.map((e,index)=>{
            return(
            <div key={index}>
                <span>{e.product}</span>
                <span>{e.value}</span>
                {e.count>0 &&(
                <button  onClick={() =>
              dispatch({ type: "remove", payload:e})
            }>-</button>
         )}
          {e.count===0 &&(
                <button >-</button>
         )}
                <span>{e.count}</span>
                <button
                  onClick={() =>
                    dispatch({ type: "ADD", payload:e})
                  }>+</button>
            </div>)
         })}
          </div>
          <div>
          <div id="rightdiv">
          {state.data.map((e,index)=>{
            return(
            <div key={index}>
                <span>{e.product}</span>
                <span>{e.value}</span>  X
                <span>{e.count}</span>
              
            </div>)
         })}
          </div>
          <div>Total:{total}</div>
          </div>
        </div>
    </div>
  )
}

export default Body