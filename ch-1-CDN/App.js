const heading1 = React.createElement(
  "h1",
  { id: "heading1", style: { color: "darkslateblue",backgroundColor: "yellow" } },
  "This is heading 1"
);
const heading2 = React.createElement(
  "h2",
  { id: "heading1", style: { color: "yellow",backgroundColor: "darkslateblue" } },
  "This is heading 2"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading1,heading2]);
