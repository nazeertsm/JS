let person={

    name:"nazeer",
    id:182,

      address:{                       //Nested object
        street: "Newstreet",
        landmark:"NXfunctionhall",
        country: "India",
        phone:91919191991

        },
        fruits: [
            "Banana", 
            "Orange", 
            "Apple"]
       
}

console.log(person.name);  //nazeer
console.log(person["name"]);  //nazeer
console.log(person["address"]["street"]); //Newstreet

console.log(person.address.country);  //India
console.log(person.address);  //{ street: 'Newstreet', landmark: 'NXfunctionhall', country: 'India', phone: 91919191991}

console.log(person.fruits[1]); //orange
console.log(person.fruits);  //[ 'Banana', 'Orange', 'Apple' ]
