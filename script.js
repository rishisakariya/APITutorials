
async function fetchData() {
      try {
            const [usersRes, todosRes] = await Promise.all([
                  fetch('https://jsonplaceholder.typicode.com/users'),
                  fetch('https://jsonplaceholder.typicode.com/todos')
            ]);

            const users = await usersRes.json();
            const todos = await todosRes.json();

            // Map userId to user name
            const userMap = {};
            users.forEach(user => {
                  userMap[user.id] = user.name;
            });

            const todoContainer = document.getElementById('todoContainer');

            // Create a card for each todo
            todos.forEach(todo => {
                  const card = document.createElement('div');
                  card.classList.add('todo-card');

                  const title = document.createElement('div');
                  title.classList.add('todo-title');
                  title.textContent = todo.title;

                  const creator = document.createElement('div');
                  creator.classList.add('todo-user');
                  creator.textContent = userMap[todo.userId] || 'Unknown User';

                  const status = document.createElement('div');
                  status.classList.add('todo-status');
                  status.textContent = todo.completed ? 'Completed' : 'Pending';

                  card.appendChild(title);
                  card.appendChild(creator);
                  card.appendChild(status);

                  todoContainer.appendChild(card);
            });
      } catch (err) {
            console.error('Failed to fetch data:', err);
      }
}

fetchData();
