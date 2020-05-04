import React, { Component } from 'react';

import './Team.scss';

class Team extends Component {
  constructor() {
    super();
    this.users = [
      {
        "name": "Aaron Rossi",
        "title": "CEO & Co-Founder",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        "social": {
          "facebook": "",
          "twitter": "",
          "linkedin": "",
        }
      },
      {
        "name": "Marco Gomez",
        "title": "Co-Founder, Creative Director",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg",
        "social": {
          "facebook": "",
          "twitter": "",
          "linkedin": "",
        }
      },
      {
        "name": "Brad Joe",
        "title": "Office Manager",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/boheme/128.jpg",
        "social": {
          "facebook": "",
          "twitter": "",
          "linkedin": "",
        }
      },
      {
        "name": "Mitch Petty",
        "title": "Lead Developer",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg",
        "social": {
          "facebook": "",
          "twitter": "",
          "linkedin": "",
        }
      },
      {
        "name": "Philip Satemburgo",
        "title": "Community Manager",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg",
        "social": {
          "facebook": "",
          "twitter": "",
          "linkedin": "",
        }
      },
      {
        "name": "George Petty",
        "title": "Lead Designer",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcogomes/128.jpg",
        "social": {
          "facebook": "",
          "twitter": "",
          "linkedin": "",
        }
      },
      {
        "name": "Petty Rossi",
        "title": "Brand Designer",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        "social": {
          "facebook": "",
          "twitter": "",
          "linkedin": "",
        }
      },
      {
        "name": "Mitch Rossi",
        "title": "New Business",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg",
        "social": {
          "facebook": "",
          "twitter": "",
          "linkedin": "",
        }
      },
      {
        "name": "George Mitch",
        "title": "UX Designer",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/tonychester/128.jpg",
        "social": {
          "facebook": "",
          "twitter": "",
          "linkedin": "",
        }
      }
    ];
  }
  getUserCards() {
    const users = [];

    for (const user of this.users) {
      users.push(
        <div className="btl-Team-UserCard">
          <div className="btl-Team-UserCard-Avatar">
          <img src={user.avatar} />
          </div>
          <div className="btl-Team-UserCard-Name">
            {user.name}
          </div>
          <div className="btl-Team-UserCard-Title">
            {user.title}
          </div>
          <ul className="btl-Team-UserCard-Social">
          </ul>
        </div>
      )
    }

    return users;
  }

  render() {
    return (
      <div id="team" className="btl-Team-Container">
        <div className="btl-Team-Title">The Team</div>
        <div className="btl-Team-Grid">
          {this.getUserCards()}
        </div>
      </div>
    );
  }
}

export default Team;
