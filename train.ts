// Y-TASK

function findIntersection<T>(arr1: T[], arr2: T[]): T[] {
  const set2 = new Set(arr2);
  return [...new Set(arr1)].filter((item) => set2.has(item));
}

const array1 = [1, 2, 3];
const array2 = [3, 2, 0];

console.log(findIntersection(array1, array2));

// Z-TASK

// function sumEvens(arr: number[]): number {
//   return arr.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);
// }

// console.log(sumEvens([1, 2, 3]));
// console.log(sumEvens([2, 4, 6, 7]));

// X-TASK

// function countOccurrences(obj:
//   {
//     [x: string]: any; model?: string; steer?:
//     { model: string; size: number }
//   }, key: string) {
//   let count = 0;

//   for (const k in obj) {
//     if (k === key) count++;

//     if (typeof obj[k] === "object" && obj[k] !== null) {
//       count += countOccurrences(obj[k], key);
//     }
//   }

//   return count;
// }

// console.log(countOccurrences(
//   { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } }, "model")); // 2
