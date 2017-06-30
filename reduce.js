var total = [5, 11, 22, 33].reduce(function(accumulator, currentValue, currentIndex, array) {
    console.log('accumulator', accumulator)
    console.log('currentValue', currentValue)
    console.log('currentIndex', currentIndex)
    console.log('array', array)
    return accumulator + currentValue;
});
console.log(total);