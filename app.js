const K = 22;
const ARR = [10, 15, 18, 24, 38];

const findBestMatch = (k, arr) => {
   return arr.reduce((prev, current) => Math.abs(current - k) < Math.abs(prev - k) ? current : prev);
}

console.log( findBestMatch(K, ARR) );