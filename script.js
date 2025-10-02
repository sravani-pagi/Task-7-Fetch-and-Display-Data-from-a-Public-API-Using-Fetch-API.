const userContainer = document.getElementById('user-container');
const reloadBtn = document.getElementById('reload-btn');

function displayUsers(users) {
  userContainer.innerHTML = '';
  users.forEach(user => {
    const div = document.createElement('div');
    div.className = 'user-card';
    div.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
    `;
    userContainer.appendChild(div);
  });
}

function displayError(message) {
  userContainer.innerHTML = `<div class="error">${message}</div>`;
}

function fetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => displayUsers(data))
    .catch(error => displayError('Failed to fetch user data. Please try again.'));
}

// Initial fetch
fetchUsers();

// Reload button event
reloadBtn.addEventListener('click', fetchUsers);
