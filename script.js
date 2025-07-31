async function getData(url) {
      try {
            const response = await fetch(url)
            const data = response.json()
            console.log(data);

      } catch (error) {
            console.log("Url invalid");
      }
}

getData("https://jsonplaceholder.typicode.com/todos")
getData("https://jsonplaceholder.typicode.com/users")