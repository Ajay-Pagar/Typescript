const names: string[] = ["amit", "ajay", "arun", "arpan", "aman"];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

let nameToCheck = "peter";

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list`);
} else {
  console.log(`${nameToCheck} is not in the list`);
}
