import React from "react";
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
      <div className="user-card">
        <h1>{name}</h1>        
        <p>Location: {location}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
}
export default UserClass;
