const initialstate = {
    selectedrepo:"",
    repoDetails:{},
    repoissues:[],
    openissues:0,
    closedissues:0,
    item:{}
}


const reporeducer = (state = initialstate, action) =>{
    switch(action.type){
        case "add":
            return{
                ...state,selectedrepo:action.payload.itemname,repoDetails:action.payload.repodata,repoissues:action.payload.repoissues,openissues:action.payload.openissues,closedissues:action.payload.closedissues
            }
        case "addcomments":
            return{
                ...state,item:action.payload.item
            }
        default:
            return state
    }

}

export default reporeducer