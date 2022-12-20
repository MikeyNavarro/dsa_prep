const averageWindow = (arr, k) => {
  // We are returning an array of averages
  const averages = [];
  // our windowstart will begin at the beginning of the array

  let windowStart = 0;

  // our window sum starts at 0
  let windowSum = 0;

  // our window end will continue until it reaches the end of the array.
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // if our window size does not = k we increase our windowSize through our for loop and add new sum
    windowSum += arr[windowEnd];

    // if our window size does = k we;
    if (windowEnd >= k - 1) {
      averages.push(windowSum / k);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  // push our average
  // subtract windowStart from our sum
  // increase window start by 1
  return averages;
};

console.log(averageWindow([1, 2, 3, 4, 5], 3));
console.log(averageWindow([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
