import React from "react";
import UserContext from "./UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location, email } = this.props;

    return (
      <div className="user-card p-2 m-2 border border-gray-400">
        <h1>{name}</h1>        
        <p>Location: {location}</p>
        <p>Email: {email}</p>
        <div>
          Logged in Name: 
          <UserContext.Consumer>
            {({ userName}) => <span> {userName}</span>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}
export default UserClass;
