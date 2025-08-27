import UserClass from "./UserClass";
import User from "./User";
const AboutUs = () => {
  return (
    <div className="about-us">
      <h2> This is React project  </h2>
      <h3>For Food ordering  </h3>
      {/* <User name ={"John Doe"} email={"john@example.com"} location={"New York"} />  */}
    <UserClass name = {'Maahi'} email = {'mahi@gmail.com'} location={"South Korea"}/>
    </div>
  );
};

export default AboutUs