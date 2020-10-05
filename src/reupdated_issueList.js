import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const IssueList = (props) =>{

    const [prev,updateprev] = useState(0)
    const[updatedissues,updateupdatedissues] = useState([])

    useEffect(()=>{
        // fetch(`https://api.github.com/repos/jondot/ReactNativeKatas/issues?page=${prev}&per_page=2`)
        // .then(res => res.json()).then(data => console.log(data))
        // console.log(props.stateforcomponent.repoissues.slice(0,2))
    })
    const issueitem = (item) =>{
        props.addtoselecteditem({item:item})
    }
    const previous = async () =>{
        if(prev == 0){
            
        updateprev(prev)
        }
        else{
            updateprev(prev-1)
            const data_issue_prev=await fetch(`https://api.github.com/repos/jondot/ReactNativeKatas/issues?page=${prev}&per_page=2`)
        .then(res => res.json())
        try{
            // console.log(data_issue)
            updateupdatedissues(data_issue_prev)
        }
        catch{

        }
        }
        
    }
    const next = async () =>{
        if(prev == 0){
            updateprev(prev + 2)
        }
        else{
            updateprev(prev + 1)
        const data_issue=await fetch(`https://api.github.com/repos/${props.stateforcomponent.selectedrepo}/issues?page=${prev}&per_page=5`)
        .then(res => res.json())
        try{
            // console.log(data_issue)
            updateupdatedissues(data_issue)
        }
        catch{

        }
        }
    }
    return (
        <div className="IssueCommentHome">
        <div className="SugesstionChannel"> 
          <div class="suggestionheader">{props.stateforcomponent.selectedrepo}</div>
    <div class="suggestionstars"><span style={{border:"1px solid black",padding:"5px",borderRadius:"2px"}}> {props.stateforcomponent.repoDetails.stargazers_count} stars</span></div>
        </div>
        <div className="IssueListContainer">
          <div className="headerpart">
            <div className="innerheader">{props.stateforcomponent.openissues} open, {props.stateforcomponent.closedissues} closed</div>
            <div className="innerbuttons">
              <button>Author </button>
              <button>Labels</button>
              <button>Assignee</button>
              <button>Sort</button>
            </div>
          </div>
          <div className="bodypart">
          {
                  updatedissues.length>0?<div>{
                        updatedissues.map(issue => {
                            return <div className="issuecard">
                            <div className="headinganddesc">
                              <div className="issueheading">
                                <div style={{flex:"4"}}>{issue.title}</div>
                                <div style={{flex:"1"}}><span style={{background:"orange",padding:"4px",borderRadius:"15px",marginTop:"5px"}}>item.state</span></div>
                                <div style={{flex:"1"}}><span style={{background:"pink",padding:"4px",borderRadius:"15px",marginTop:"5px"}}>status</span></div>
                                <div style={{flex:"1"}}></div>
                              </div>
                              <div style={{fontSize:"13px"}}>heading of the issue</div>
                            
                            </div>
                            <div className="count"><span style={{border:"1px solid black",borderRadius:"20px",paddingLeft:"5px", paddingRight:"5px"}} onClick={()=>issueitem(1)}>
                                <Link to="/details">
                                    item.comments
                                </Link>
                                </span></div>
                          </div>
                        })
                    }</div>:<div>{
                        props.stateforcomponent.repoissues.slice(0,5).map(item => {
                            return <div className="issuecard">
                            <div className="headinganddesc">
                              <div className="issueheading">
                                <div style={{flex:"4"}}>{item.title}</div>
                                <div style={{flex:"1"}}><span style={{background:"orange",padding:"4px",borderRadius:"15px",marginTop:"5px"}}>item.state</span></div>
                                <div style={{flex:"1"}}><span style={{background:"pink",padding:"4px",borderRadius:"15px",marginTop:"5px"}}>status</span></div>
                                <div style={{flex:"1"}}></div>
                              </div>
                              <div style={{fontSize:"13px"}}>heading of the issue</div>
                            
                            </div>
                            <div className="count"><span style={{border:"1px solid black",borderRadius:"20px",paddingLeft:"5px", paddingRight:"5px"}} onClick={()=>issueitem(1)}>
                                <Link to="/details">
                                    item.comments
                                </Link>
                                </span></div>
                          </div>
                        })
                        
                        }</div>
              }
            
            
          </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <div><button onClick={previous}>prev</button></div>
                <div><button onClick={next}>next</button></div>
            </div>
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
            return dispatch({type:"addcomments",payload:res})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IssueList)