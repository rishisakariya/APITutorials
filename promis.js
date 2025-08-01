const solvePromiseObj = new Promise((res, rej) => {
      const data = {
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

      res(JSON.stringify(data))
});

const rejectPromiseObj = new Promise((res, rej) => {
      const data = {
            message: "URL Invalid..."
      }

      rej(JSON.stringify(data)); // Rejected with JSON string
});

async function getDataFromPromise() {
      try {
            const response = await rejectPromiseObj
            const data = JSON.parse(response)
            console.log(data);

      } catch (error) {
            const parsedError = JSON.parse(error);
            console.log(parsedError); // ➜ "URL Invalid...
      }
}

getDataFromPromise()