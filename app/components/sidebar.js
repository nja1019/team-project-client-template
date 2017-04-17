import React from 'react';
import ProfilePill from './profile-page/profile_pill.js';
import { Link } from 'react-router';

export default class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contents: [],
            pid : 1
        };
    }

    generateTeams(list) {
        if(list) {
            return list.map(this.createTeam);
        }
    }
    createTeam(item){
        return<ProfilePill key={item} team = {item}/>
    }
    refresh() {

    }
    componentDidMount() {
        this.refresh();
    }

    render() {

        return (
            <div>
            <div className="text-center col-md-2 side-bar">
               <ul className="nav nav-pills nav-stacked">
                  <li role="presentation">PROJECTS</li>
                    {this.generateTeams(["Swing Team", "Jazz Team", "The Smashing Corgans"])}
                  <Link to={"ostf-job-board"}>
                  <li role="presentation"><a href="ostf-job-board.html"><span className="glyphicon glyphicon-stats"></span>
                     Job Board</a>
                  </li>
              </Link>
               </ul>
           </div>
       </div>
        )
    }
}
