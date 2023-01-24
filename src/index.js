import { sum } from "./utils";
import "./styles/style.css";
import "./styles/style.scss";

console.log(sum(1, 3));

// ES6 Spread Operator
const person = { name: "Khoi" };
const personClone = { ...person };
console.log("personClone", personClone);

// ES7 Object.values
console.log("Object.values", Object.values(personClone));
