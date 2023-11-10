// ループ・配列・データ型の問題
export const func1 = (n) => {
  // このコードを完成させてください
  if (typeof n !== "number" || n <= 0 || n % 1 !== 0) {
    return [];
  }
  return [...Array(n)].map((_, i) => i + 1);
};

// 条件分岐・データ型の問題
export const func2 = (n) => {
  // このコードを完成させてください
  if (typeof n !== "number" || n <= 0 || n % 1 !== 0) {
    return "error";
  }
  if (n % 15 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n.toString();
  }
};
