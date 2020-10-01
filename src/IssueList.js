import React from 'react'
import {Link} from 'react-router-dom'

class IssueList extends React.Component{
  constructor(){

  }
  render(){
    return (
      <div className="IssueCommentHome">
        <div className="SugesstionChannel"> 
          <div class="suggestionheader">facebook/React</div>
          <div class="suggestionstars"><span style={{border:"1px solid black",padding:"5px",borderRadius:"2px"}}>4.5 stars</span></div>
        </div>
        <div className="IssueListContainer">
          <div className="headerpart">
            <div className="innerheader">472 open, 9412 closed</div>
            <div className="innerbuttons">
              <button>Author </button>
              <button>Labels</button>
              <button>Assignee</button>
              <button>Sort</button>
            </div>
          </div>
          <div className="bodypart">
            <div className="issuecard">
              <div className="headinganddesc">
                <div className="issueheading">
                  <div style={{flex:"4"}}>asassdsaasd asd asda sda</div>
                  <div style={{flex:"1"}}><span style={{background:"orange",padding:"4px",borderRadius:"15px",marginTop:"5px"}}>type</span></div>
                  <div style={{flex:"1"}}><span style={{background:"pink",padding:"4px",borderRadius:"15px",marginTop:"5px"}}>status</span></div>
                  <div style={{flex:"1"}}></div>
                </div>
                <div style={{fontSize:"13px"}}>heading of the issue</div>
              
              </div>
              <div className="count"><span style={{border:"1px solid black",borderRadius:"20px",paddingLeft:"5px", paddingRight:"5px"}}><Link to="/comment">3</Link></span></div>
            </div>
            <div className="issuecard">
              <div className="headinganddesc">
                <div className="issueheading">
                  <div style={{flex:"4"}}>asassdsaasd asd asda sda</div>
                  <div style={{flex:"1"}}><span style={{background:"orange",padding:"4px",borderRadius:"15px",marginTop:"5px"}}>type</span></div>
                  <div style={{flex:"1"}}><span style={{background:"pink",padding:"4px",borderRadius:"15px",marginTop:"5px"}}>status</span></div>
                  <div style={{flex:"1"}}></div>
                </div>
                <div style={{fontSize:"13px"}}>heading of the issue</div>
              
              </div>
              <div className="count"><span style={{border:"1px solid black",borderRadius:"20px",paddingLeft:"5px", paddingRight:"5px"}}>5</span></div>
            </div>
            <div className="issuecard">
              <div className="headinganddesc">
                <div className="issueheading">
                  <div style={{flex:"4"}}>asassdsaasd asd asda sda</div>
                  <div style={{flex:"1"}}><span style={{background:"orange",padding:"4px",borderRadius:"15px",marginTop:"5px"}}>type</span></div>
                  <div style={{flex:"1"}}><span style={{background:"pink",padding:"4px",borderRadius:"15px",marginTop:"5px"}}>status</span></div>
                  <div style={{flex:"1"}}></div>
                </div>
                <div style={{fontSize:"13px"}}>heading of the issue</div>
              
              </div>
              <div className="count"><span style={{border:"1px solid black",borderRadius:"20px",paddingLeft:"5px", paddingRight:"5px"}}>1</span></div>
            </div>
          </div>
        </div>

        
      </div>
    )
  }
}

export default IssueList