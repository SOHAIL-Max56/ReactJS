import UserClass from "./UserClass";
import User from "./User";
const AboutUs = () => {
  return (
    <div className="about-us">
      {/* <User name ={"John Doe"} email={"john@example.com"} location={"New York"} />  */}
    <UserClass name = {'Maahi'} email = {'mahi@gmail.com'} location={"South Korea"}/>
    <UserClass name = {'Nari'} email = {'nari@gmail.com'} location={"South Korea"}/>
    </div>
  );
};

export default AboutUs