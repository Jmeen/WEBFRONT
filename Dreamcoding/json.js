// JSON
// Javascrip object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthdate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

// 2. JSON to Object
// parse(JSON)
console.clear();
json = JSON.stringify(rabbit);
// const obj = JSON.parse(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthdate" ? new Date(value) : value;
});

console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthdate.getDate());
console.log(obj.birthdate.getDate());
