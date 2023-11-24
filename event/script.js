export const main = () => {
  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const submitButton = document.getElementById("submit");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const title = titleInput.value;
    const body = contentInput.value; // 修正された部分

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: title, // ユーザーが入力したタイトル
            body: body, // 修正: content から body に変更
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // HTMLの結果表示部分を取得
      const resultIdDiv = document.getElementById("result-id");
      const resultTitleDiv = document.getElementById("result-title");
      const resultContentDiv = document.getElementById("result-content");

      // 取得したレスポンスデータをHTML要素にセット
      resultIdDiv.textContent = `created post ID is ${data.id}`;
      resultTitleDiv.textContent = `created post title is ${data.title}`;
      resultContentDiv.textContent = `created post content is ${data.body}`;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  submitButton.addEventListener("click", handleFormSubmit);
};

window.addEventListener("load", main);
