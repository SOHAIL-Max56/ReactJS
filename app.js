import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "React day 3");

const Jsxheading = () => {
  return (
    <h1 id="heading" tabIndex="hello">
      Heading using JSX
    </h1>
  );
};
const Heading = () => (
    <div id="container">
      <Jsxheading />
      <h1>This is Function Components in JSX</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
