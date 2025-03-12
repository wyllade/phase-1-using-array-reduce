const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function ourReduce(arr, callback) {
    let accumulator = arr[0];
    for (let i = 1; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
}

const totalBatteries = ourReduce(batteryBatches, (accumulator, currentValue) => accumulator + currentValue);

module.exports = totalBatteries;

console.log('Total battery', totalBatteries);
