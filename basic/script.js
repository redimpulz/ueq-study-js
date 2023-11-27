// ループ・配列・データ型の問題
export const func1 = (n) => {
  // このコードを完成させてください
  if (n < 0) {
    return [];
  }
  const list = [];
  for (let i = 1; i <= n; i++) {
    list.push(i);
  }
  return list;
};

// 条件分岐・データ型の問題
export const func2 = (n) => {
  // 正の整数でない場合は 'error' を返す
  if (typeof n !== "number" || n <= 0 || !Number.isInteger(n)) {
    return "error";
  }

  // 15の倍数の場合（3と5の両方の倍数）
  if (n % 15 === 0) {
    return "FizzBuzz";
  }
  // 3の倍数の場合
  else if (n % 3 === 0) {
    return "Fizz";
  }
  // 5の倍数の場合
  else if (n % 5 === 0) {
    return "Buzz";
  }
  // それ以外の場合、数値を文字列にして返す
  else {
    return n.toString();
  }
};
