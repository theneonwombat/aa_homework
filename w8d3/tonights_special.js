// Phase I: Callbacks

// Write a function titleize that takes an array of names and a function (callback).titleize should use Array.prototype.map to create a new array full of titleized versions of each name - titleize meaning "Roger" should be made to read "Mx. Roger Jingleheimer Schmidt".Then pass this new array of names to the callback, which should use Array.prototype.forEach to print out each titleized name.

// > titleize(["Mary", "Brian", "Leo"], printCallback);
// Mx.Mary Jingleheimer Schmidt
// Mx.Brian Jingleheimer Schmidt
// Mx.Leo Jingleheimer Schmidt
// undefined

// Make sure it works before moving on!

function titleize(arr, callback) {
  let titleized = arr.map(function (ele) {
    return `Mx.${ele} Jingleheimer Schmidt`});
  callback(titleized);
}

function printCallback(arr) {
  arr.forEach(element => {
    console.log(element)
  });
}

titleize(["Mary", "Brian", "Leo"], printCallback)


function Elephant(name, height, ...tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function(){
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
}

Elephant.prototype.grow = function(){
  this.height += 12;
}

let hammad = new Elephant("Hammad", 72);

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick)

}
  
Elephant.prototype.play = function() {
  let rand = Math.floor(Math.random()*this.tricks.length);
  console.log(`${this.name} is ${this.tricks[rand]}`)
}

console.log(hammad)
hammad.trumpet()
hammad.grow()
console.log(hammad)

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);

let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);

let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);

let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [hammad, ellie, charlie, kate, micah];

Elephant.paradeHelper =  function(elephant) {
  console.log(`${elephant.name} is trotting by!`)
}

// herd.forEach(function (elephant) {Elephant.paradeHelper(elephant)})
herd.forEach(Elephant.paradeHelper)

