/*//pole trójkąta 1

var a = 5,
    h = 7,
    triangleArea = a * h / 2

console.log('tringle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);

//pole trójkąta 2

var a2 = prompt('enter a2 value'),
    h2 = prompt('ender h2 value'),
    triangleArea2 = a2 * h2 / 2

alert('triangle2 field with base a2: ' + a2 + ' and height h2: ' + h2 + ' is equal to: ' + triangleArea2)
console.log('triangle2 field with base a2: ' + a2 + ' and height h2: ' + h2 + ' is equal to: ' + triangleArea2)*/

//zadanie 8.6

var a = prompt('podaj wartość liczby a'),
    b = prompt('podaj wartość liczby b'),
    value = (a * a) - (2 * a * b) + (b * b)

alert('wynik działania to: ' + value);
console.log('wynik działania to: ' + value);

if (value > 0) {
    alert('wynik działania jest dodatni');
    console.log('wynik działania jest dodatni');
} else if (value < 0) {
    alert('wynik działania jest ujemny');
    console.log('wynik działania jest ujemny');
} else if (value == 0) {
    alert('wynik działania jest zerem');
    console.log('wynik działania jest zerem');
} else {
    alert('wprowadzone dane są nieprawidłowe');
    console.log('wprowadzone dane są nieprawidłowe');
}