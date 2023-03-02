import "./styles.css";
import { Mango } from "./Mango";
var readYaml = require("read-yaml");
// import file from "./data.yaml";

export default function App() {
  // readYaml(file, function (err, data) {
  //   if (err) throw err;
  //   console.log(data);
  // });

  return (
    <div className="App">
      <Mango name="random" />
    </div>
  );
}
