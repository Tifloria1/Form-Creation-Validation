async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the "Loading user data..." message
        dataContainer.innerHTML = '';

        // Build the list
        const userList = document.createElement('ul');
        users.forEach((user) => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Add list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // On error, show failure message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Run after the HTML has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
