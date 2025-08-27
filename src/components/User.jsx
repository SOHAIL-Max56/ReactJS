const User = ({name, email, location}) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Location: {location}</p>
    </div>
  );
};
export default User;