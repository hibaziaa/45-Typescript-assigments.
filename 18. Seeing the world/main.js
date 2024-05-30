var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//storing different loactions in an array but not in alphabetical order.
var places = ['Maldives', 'Italy', 'Saudia Arab', 'Portugal', 'Turkey'];
//printing array in its orignal order.
console.log(places);
//printing array in alphabetical order without modifying orignal array.
console.log(__spreadArray([], places, true).sort());
//showing that our array is still in its orignal order.
console.log(places);
//printing array in reverse alphabetical order without modifying orignal array.
console.log(__spreadArray([], places, true).sort().reverse());
//showing that our array is still in its orignal order.
console.log(places);
//reversing the order of array.
console.log(places.reverse());
//reversing the order of array again to bring back it in its orignal order.
console.log(places.reverse());
//sorting array in alphabetical order and printing it.
console.log(places.sort());
//sorting array in reverse alphabetical order and printing it.
console.log(places.sort().reverse());
