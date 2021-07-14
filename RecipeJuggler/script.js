// SO I want to make an app and a website you can pull up on your computer if you don't want to use your phone and if your dont want to turn on your computer. //#endregion
// i want 10 recipies, and takeout choices
// 3 healthy recipies, 3 easy, 3 more advanced and 1 dessert
//the takeout choices are based on the location of where your computer or phone is
// the takeout option is also based on what you chose that you're hungry for
//so you won't be suggested burgers if you want, say, a salad or sushi
//

const foodHome = [lasagna, salad, soup];
const foodTakeOut = [pizza, burger, noodles];
const foodDessert = [mugCake];


function home(max) {
    console.log(getRandomInt(foodHome))
} ;

function takeOut(max) {

}

function dessert(max) {

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  