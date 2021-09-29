// Exercise #1

const names = ["Sofia", "David", "Juan"];
names.push("Sara", "Augustin");
names.shift();
console.log(names);

names.splice(1, 0, "Renata");
names.push("Elena");
console.log(names);

// #Exercise 2

let star = "";
for (let i = 1; i <= 5; i++) {
  console.log((star += "* "));
}

// #Exercise 3a

let a = 10;
while (a >= 0) {
  console.log(a);
  if (a === 0) {
    break;
  } else {
    a -= 0.5;
  }
}

// #Exercise 3b

let a = 1;
while (a <= 97) {
  console.log(a);
  a += 2;
}

// #Exercise 3c

function square(max) {
  let n = 1;
  let output = "";
  while (n <= max) {
    output += `[${n}]`;
    n++;
  }
  console.log(output);
}

square(6);

// #Exercise 3d

function sum(a) {
  let count = 1;
  let total = 0;
  while (count <= a) {
    total = total + count;
    count++;
  }
  console.log(`n = ${a}  sum = ${total}`);
}

sum(5);
sum(19);
