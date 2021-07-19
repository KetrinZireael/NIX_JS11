function differenceArray(firstArray, secondArray) {
    let sumFirstArray = 1;
    let sumSecondArray = 1;

    for (let i = 0; i < firstArray.length; i++) {
        sumFirstArray *= firstArray[i];
    }
    for (let i = 0; i < secondArray.length; i++) {
        sumSecondArray *= secondArray[i];
    }
    
    let difference = sumFirstArray - sumSecondArray;
    console.log(difference);
}

differenceArray([3,2,5],[1,4,4]);
differenceArray([9,7,2], [5,2,2]);
differenceArray([11,2,5], [1,10,8]);
differenceArray([4,4,7], [3,9,3]);
differenceArray([15,20,25], [10,30,25]);