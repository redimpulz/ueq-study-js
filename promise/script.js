// 非同期処理
export const func1 = async () => {
  // このコードを完成させてください
  const requestURL = "https://jsonplaceholder.typicode.com/todos/1";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const json = await response.json();
  return json;
};

// 直列で非同期処理
export const func2 = async () => {
  // このコードを完成させてください
  for (let i = 1; i <= 5; i++) {
    const requestURL = `https://jsonplaceholder.typicode.com/todos/${i}`;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const json = await response.json();
    console.log(json);
  }
};

// 並列で非同期処理
export const func3 = async () => {
  // このコードを完成させてください
  const promises = [...Array(5)].map(async (_, i) => {
    const requestURL = `https://jsonplaceholder.typicode.com/todos/${i + 1}`;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const json = await response.json();
    return json;
  });

  return await Promise.all(promises);
};
