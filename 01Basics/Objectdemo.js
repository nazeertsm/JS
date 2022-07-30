let person={

    name:"nazeer",
    id:182,

      address:{
        street: "downstreet",
        landmark:"NXfunctionhall",
        country: "India"

        },
        fruits: [
            "Banana", 
            "Orange", 
            "Apple"]
       
}

console.log(person.name);  //nazeer
console.log(person.address.country);  //India
console.log(person.address);  //{ street: 'downstreet', landmark: 'NXfunctionhall', country: 'India' }

console.log(person.fruits[1]); //orange
console.log(person.fruits);  //[ 'Banana', 'Orange', 'Apple' ]

