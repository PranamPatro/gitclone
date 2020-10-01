import React from 'react'
import {Link} from 'react-router-dom'

class Githubhome extends React.Component{
  constructor(){
    super();
    this.state={
      searchedvalue:"",
      suggestionArray:[],
      array:['abcd','abc','abbc','adde','adbce']
    }
  }
  updatestatesearch= (e) =>{
    this.setState({
      searchedvalue:e.target.value
    })
  }
  render(){
    return (
      <div className="Homepage">
        <div className="form">
            <img src="https://www.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png" className="logo"/>
            <input value={this.state.searchedvalue} onChange={this.updatestatesearch}/>
            {
              this.state.suggestionArray.length>0 ? <div className={this.state.suggestionArray.length>0?"suggestionvisible":"suggestioninvisible"}>
        asdasda asd asd asd a sda sdaasdasdasdasd
        asdasd
        asdasd
        asd
        asd
        asd
        asd
        asd
        asdsadasdasd
        </div> : <button style={{marginTop:"10px",padding:"5px"}}>
        <Link to="/issuelist">
        Search</Link></button>
            }  
        </div>
      </div>
    )
  }
}

export default Githubhome