import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error">
      <h2>OPPS !!</h2>
      <h3>Something went worng!!</h3>
      <h2>
        {err.status}: {err.statusText}
      </h2>
    </div>
  );
};

export default Error;