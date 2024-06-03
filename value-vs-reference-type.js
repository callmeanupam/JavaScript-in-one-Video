let x = "anupam";
let y = x;

x = "mr.anupam";

console.log(x);
console.log(y);

// the value of y remain same, because it is value type

let p = { name: "beast" };
let q = p;

// now changing the name in p
p.name = "kirat";

// now log the value of p and q
console.log(p);
console.log(q);
// now we got kirat for both, because p got changed and q is taking the reference of p not the value of p and with the help of reference variables we can do this!
