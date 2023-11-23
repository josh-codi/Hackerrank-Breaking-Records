function breakingRecords(scores) {
    let arr = scores.map((val, idx)=>[idx, val])
    let countHighest = 0;
    let countLowest = 0;

    let currentHigh = 0;
    let currentLow = 0
    arr.forEach((arr, idx, array)=>{
        if(idx === 0){
            currentHigh = arr[1]
            currentLow = arr[1]
        }else if(idx > 0){
            if(arr[1]>currentHigh){
                countHighest += 1
                currentHigh = arr[1]
            }
            if(arr[1]<currentLow){
                countLowest += 1
                currentLow = arr[1]
            }
        }
    })
    return [countHighest, countLowest]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))