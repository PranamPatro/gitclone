import React ,{useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const GithubHome = (props) =>{
    const [suggestionArray,updateSuggestionArray] = useState([])
    const [repodata,updaterepodata] = useState({})
    const [repoissues,updaterepoissues] = useState([])
    const [openissues,updateopenissues] = useState(0)
    const [closedissues,updateclosedissues] = useState(0)
    const [searchedvalue,updateSearchedValue] = useState("")

    const fetchdata = async (e)=>{
        updateSearchedValue(e.target.value);

        const data = await fetch(`https://api.github.com/search/repositories?q=${searchedvalue}`)
        .then(res => res.json())

        try{
            updateSuggestionArray(data.items.slice(0,10))
        }
        catch{}
    }

    const itemdetail = async (item) =>{
        const data_fullname = await fetch(`https://api.github.com/repos/${item.full_name}`)
        .then(res => res.json())

        try{
            updaterepodata(data_fullname)
        }
        catch{}
        const data_open= await fetch(`https://api.github.com/repos/${item.full_name}/issues?state=open`)
        .then(res => res.json())

        try{
            updateopenissues(data_open.length)
            updaterepoissues(repoissues.concat(data_open))
        }
        catch{}
        const data_closed = await fetch(`https://api.github.com/repos/${item.full_name}/issues?state=closed`)
        .then(res => res.json())

        try{
            updateclosedissues(data_closed.length)
        }
        catch{}
        updateSuggestionArray([]);
        updateSearchedValue(item.full_name)

    }

    const navigate = () =>{
        props.addtoselecteditem({itemname:searchedvalue,repodata:repodata,repoissues:repoissues,openissues:openissues,closedissues:closedissues})
    }
    return(
        <div className="Homepage">
        <div className="form">
            <img src="https://www.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png" className="logo"/>
            <input value={searchedvalue} onChange={(e)=>fetchdata(e)}/>
            {
              suggestionArray.length>0 ? <div className={suggestionArray.length>0?"suggestionvisible":"suggestioninvisible"}>
              {
                suggestionArray.map(item => <li onClick={()=>itemdetail(item)}>
                    {item.full_name}</li>)
              }
        </div> : <button style={{marginTop:"10px",padding:"5px"}} onClick={navigate}>
        <Link to="/issueList">Search</Link>
        </button>
            }  
        </div>
      </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        stateforcomponent:state
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addtoselecteditem:(res)=>{
            return dispatch({type:"add",payload:res})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GithubHome)