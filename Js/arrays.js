// Question 1

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0 ;
for(let i of marks){
    sum += i;
}
console.log(sum);
let result = (sum / marks.length);
console.log("Average marks of entire class =",result);

// Question 2

let price = [250, 645, 300, 900, 50];
for(let i=0; i<price.length; i++){
    let div = price[i] / 10 ;
    price[i] = price[i] - div ;
}
console.log(price);

// Using for-of loop

// let items = [250, 645, 300, 900, 50];
// for(let l of items){
//    let offer = l / 10 ;
//    items[i]= items[i] - offer;
// }
// console.log(items);

//  Arrays Methods
// Push()

let fruits = ["Apple", "Banana", "Carrot", "Pineapple"];
fruits.push("Strawberry", "Blueberry", "Blackberry");
console.log(fruits);

// Pop()

let foodItems = ["Potato", "Ladiesfinger", "Bringel", "Beans", "Onion", "Bottleguard"];
foodItems.pop();
console.log(foodItems);

// PQ 1

let companies = ["BB", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

companies.shift();

companies.splice( 1, 1, "Ola");

companies.push("Amazon");

console.log(companies);
