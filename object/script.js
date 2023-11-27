const person = {
  firstName: "Ken",
  lastName: "Takahashi",
  age: 29,
};

export const func1 = () => {
  // このコードを完成させてください
  let newperson = { ...person };
  newperson.gender = "male";
  newperson.interests = [
    { name: "programming", emoji: "💻" },
    { name: "motorcycle", emoji: "🏍" },
  ];
  return newperson;
};

export const func2 = () => {
  // このコードを完成させてください
  return JSON.stringify(person);
};

const jsonStr = `
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  `;

export const func3 = () => {
  // このコードを完成させてください
  let userdata = JSON.parse(jsonStr);
  return userdata.name + "," + userdata.email + "," + userdata.company.name;
};
