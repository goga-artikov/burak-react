// X-TASK

function countOccurrences(obj:
  {
    [x: string]: any; model?: string; steer?:
    { model: string; size: number }
  }, key: string) {
  let count = 0;

  for (const k in obj) {
    if (k === key) count++;

    if (typeof obj[k] === "object" && obj[k] !== null) {
      count += countOccurrences(obj[k], key);
    }
  }

  return count;
}

console.log(countOccurrences(
  { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } }, "model")); // 2
