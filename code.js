var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

// Problem 1
function monthIterator(list){
  var monthString = "Months listed are ";
  for(var i = 0; i < list.length; i++){
    if(i < list.length - 1){
      monthString += list[i] + ", ";
    }else{
      monthString += list[i] + ".";
    }
  }
  return monthString;
}
console.log(monthIterator(stringList));

// Problem 2
console.log(numList[numList.length - 1]);

// Problem 3
function numStringConcat(list){
  var numString = "";
  for(var i = 0; i < list.length; i++){
    numString += list[i].toString();
  }
  return numString;
}

console.log(numStringConcat(numList));

// Problem 4
function numStringMath(list){
  var numSum = 0;
  for(var i = 0; i < list.length; i++){
    numSum += list[i];
  }
  return numSum;
}

console.log(numStringMath(numList));

// Problem 5
if(boolList[1] == true){
  console.log(numList[0] + numList[2]);
} else {
  console.log(numList[1] * 2);
}

// Problem 6
function boolIterator(firstArray, secondArray){
  for(var i = 0; i < firstArray.length; i++){
    if(firstArray[i] == true){
      console.log(secondArray[i]);
    }
  }
  return;
}

boolIterator(boolList, numList);

// Problem 7
console.log(stringList.concat(numList, boolList).reverse());
