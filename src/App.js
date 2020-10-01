import React from "react";
import "./style.css";
import Githubhome from './GithubHome'
import IssueComment from './IssueComments'
import {Route,Switch} from 'react-router-dom'
import IssueList from './IssueList'

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Githubhome}/>
        <Route exact path="/issuelist" component={IssueList}/>
        <Route exact path="/comment" component={IssueComment}/>
      </Switch>
    </>
  );
}
