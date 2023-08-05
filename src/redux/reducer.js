const initialState = "kajal";
const namechange = (state = initialState,action)=>{
   switch (action.type){
    case 'NAME': "Baisakh";
    default : return state;
   }
}
export default namechange;