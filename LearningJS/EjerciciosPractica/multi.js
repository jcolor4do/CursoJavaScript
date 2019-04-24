var array = [2, 3, 4, 5, 6, 4, 3, 5, 5];
// var newArr = pairArray(array);

function pairArray(array) {
    var temp = array.slice();
    var arr = [];
    while (temp.length) {
        arr.push(temp.splice(0, 2));
    }
    return arr;
}
document.write('<pre>' + JSON.stringify(newArr) + '</pre>');
console.log('<pre>' + JSON.stringify(newArr) + '</pre>');

pairArray(array);