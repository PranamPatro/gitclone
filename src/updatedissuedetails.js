import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux'


const IssueDetails = (props) =>{
    const [comments,updatecomments] = useState([])
    const [item,updateitem] = useState({})
    useEffect(()=>{
        updateitem(props.stateforcomponent.item)
        const datafetch = async () =>{
            const comments = await fetch(`https://api.github.com/repos/${props.stateforcomponent.selectedrepo}/issues/${props.stateforcomponent.item.number}/comments`).then(res => res.json())
            try{
                // console.log(comments)
                updatecomments(comments)
            }
            catch{}
        }
        datafetch();
    },[comments])
    return (
        <div className="IssueCommentHome">
        <div className="SugesstionChannel"> 
            <div class="suggestionheader">{props.stateforcomponent.selectedrepo}</div>
    <div class="suggestionstars">{props.stateforcomponent.repoDetails.stargazers_count} stars</div>
        </div>
        <div className="IssueName">
    <div style={{fontWeight:"bold"}}>{props.stateforcomponent.item.title} and id {props.stateforcomponent.item.id}</div>
    <div> created at {props.stateforcomponent.item.created_at}</div>
        </div>
        <div className="IssueComments">
            {
                comments.length>0? <div>{
                comments.map(item => <div className="card">
                <div className="iconviewer">
                <img src="https://www.iconfinder.com/data/icons/contact-us-19/48/92-512.png" className="usericon"/>
                </div>
                <div className="commentviewer">
                <div className="viewerheader">{item.user.login}</div>
                <div className="viewercontent">{item.body}</div>
                </div>
              </div>)
                    }</div>:<div>no data</div>
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


export default connect(mapStateToProps,null)(IssueDetails)