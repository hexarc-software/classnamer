import classify from "./classify";

console.log(classify("test", { "small-12": true, "none": false }, 12));
console.log(classify("test", { "12small": true, "none": false }, 12));
