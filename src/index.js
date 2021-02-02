const arya = {
  type: "dog",
  name: "arya",
  house: "stark",
  sword: "needle",
};
const jon = {
  ...arya,
  sword: "lock neck",
};

console.log(arya);
console.log(jon);
