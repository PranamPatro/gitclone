import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const IssueList = (props) =>{

    // const [comments,updatecomments] = useState({})
    
    const issueitem = (item) =>{
        // const data_comments = await fetch(`https://api.github.com/repos/${props.stateforcomponent.selectedrepo}/issues/${item.number}/comments`)
        // .then(res => res.json())

        // try{
        //     // updateclosedissues(data_closed.length)
        //     // updaterepoissues(repoissues.concat(data_closed))
        //     console.log(data_comments)

        // }
        // catch{}
        // updatecomments(item.number)
        // console.log(comments)
        console.log(item)

        props.addtoselecteditem({item:item})

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
              props.stateforcomponent.repoissues.map(item => {
                return <div className="issuecard">
              <div className="headinganddesc">
                <div className="issueheading">
                  <div style={{flex:"4"}}>{item.title}</div>
                  <div style={{flex:"1"}}><span style={{background:"orange",padding:"4px",borderRadius:"15px",marginTop:"5px"}}>{item.state}</span></div>
                  <div style={{flex:"1"}}><span style={{background:"pink",padding:"4px",borderRadius:"15px",marginTop:"5px"}}>status</span></div>
                  <div style={{flex:"1"}}></div>
                </div>
                <div style={{fontSize:"13px"}}>heading of the issue</div>
              
              </div>
              <div className="count"><span style={{border:"1px solid black",borderRadius:"20px",paddingLeft:"5px", paddingRight:"5px"}} onClick={()=>issueitem(item)}>
                  <Link to="/details">
                      {item.comments}
                  </Link>
                  </span></div>
            </div>
              })
            }
            
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