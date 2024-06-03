// Reference types - objects, arrays, functions.

let course = {
  title: "HHDD",
  description: "Project",
  rating: "5",
};

console.log(course);
console.log(typeof course);
// object

// what if i want to fetch the title only.
// there are 2 ways 👇🏻
console.log(course.title);
console.log(course["description"]);
