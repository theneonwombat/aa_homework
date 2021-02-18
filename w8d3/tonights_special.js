// Phase I: Callbacks

// Write a function titleize that takes an array of names and a function (callback).titleize should use Array.prototype.map to create a new array full of titleized versions of each name - titleize meaning "Roger" should be made to read "Mx. Roger Jingleheimer Schmidt".Then pass this new array of names to the callback, which should use Array.prototype.forEach to print out each titleized name.

// > titleize(["Mary", "Brian", "Leo"], printCallback);
// Mx.Mary Jingleheimer Schmidt
// Mx.Brian Jingleheimer Schmidt
// Mx.Leo Jingleheimer Schmidt
// undefined

// Make sure it works before moving on!

function titleize(arr, callback) {
  let titleized = arr.map(ele => `Mx.${ele} Jingleheimer Schmidt`);
  callback(titleized);
}

function printCallback(arr) {
  arr.forEach(element => {
    console.log(element)
  });
}

titleize(["Mary", "Brian", "Leo"], printCallback)


function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;

}

Elephant.prototype.trumpet = function(){
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
}

Elephant.prototype.grow = function(){
  this.height += 12;
}

let hammad = new Elephant("Hammad", 72);

console.log(hammad)
hammad.trumpet()
hammad.grow()
console.log(hammad)