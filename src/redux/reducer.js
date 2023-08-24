const initialState = {name:"kajal",
loader:true};
const reducer = (state = initialState,action)=>{
   let {name,loader}= state;
  let value;
   console.log("action.type",value)
   switch (action.type){
     case "NAME": return{
      ...state,
      name : "hii"+action.payload
     }  ; 
     case "LOADER" : return{
      ...state,
      loader :false
     };
     
    default : return state;
   }
   // console.log("action.type",value)
}
export default reducer; 