import Handlebars from "handlebars";
import React from "react";
import ymlData from "./ymlData.yaml";
import * as yaml from "yaml";
import propType from "prop-types";
import temp from "./temp.hbs";
const jsyaml = require("js-yaml");

// const text = `
// # Employee records
// - martin:
//     name: Martin D'vloper
//     job: Developer
//     skills:
//       - python
//       - perl
//       - pascal
// - tabitha:
//     name: Tabitha Bitumen
//     job: Developer
//     skills:
//       - lisp
//       - fortran
//       - erlang
// `;

let mango = yaml.parse(ymlData);
console.log("Mango", mango);

function urltoFile(url, filename, mimeType) {
  return fetch(url)
    .then(function (res) {
      return res.arrayBuffer();
    })
    .then(function (buf) {
      return new File([buf], filename, { type: mimeType });
    });
}

let DataToJson = "";
//Usage example:
urltoFile(mango, "hello.json", "application/json")
  .then((file) => file.text())
  .then((result) => {
    console.log(result);
    // DataToJson = result
    const document = yaml.parse(result);
    DataToJson = document;
    console.log("document", document);
    const doc = new yaml.Document();
    doc.contents = DataToJson;
    console.log("Json object to YAML", doc.toString());
  });

export function Mango(props) {
  const { name, age } = props;

  var source =
    "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
    "{{kids.length}} kids:</p>" +
    "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
  var template = Handlebars.compile(source);

  var data = {
    name: "Alan",
    hometown: "Somewhere, TX",
    kids: [
      { name: "Jimmy", age: "12" },
      { name: "Sally", age: "4" },
      { name: "Rachael", age: "24" }
    ]
  };
  var result = template(data);

  // let dataYml = {};

  return (
    <div>
      <main>handlebars</main>
      <span>{name}</span>
      <div dangerouslySetInnerHTML={{ __html: result }} />
    </div>
  );
}

Mango.propType = {
  name: propType.string,
  age: propType.number
};

Mango.defaultProps = {
  name: "XYZ",
  age: 27
};
