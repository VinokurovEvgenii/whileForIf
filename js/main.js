
var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (var i = 0; i < animals.length; i ++) {
    animals[i] = animals[i] + " - прекрасное животное"
}
console.log(animals)




var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomString = "";
while (randomString.length < 6) {
    var randomNumber = Math.floor(Math.random()*alphabet.length);
    randomString += alphabet[randomNumber];
}
console.log(randomString)




var input = "javascript is awesome";
var output = "";
for (var i = 0; i < input.length; i ++) {
    var word = input[i];
    if (word === "a") {
        output += 4;
    } else if (word === "i") {
        output += 1;
    } else if (word === "e") {
        output += 3;
    } else if (word === "o") {
        output += 0;
    } else {
        output += word;
    }
}
console.log(output)



