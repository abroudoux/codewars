function uniqueSum(array) {
  result = 0;
  for (let num in array) {
    let newArray = array.slice(0, num);

    if (newArray.includes(array[num])) {
      continue;
    }

    result += array[num];
  }

  console.log(result);
}

uniqueSum([-1, -1, 5, 2, -7]);
