
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', async () => {
    console.log("DOMContentLoaded event fired");

    const auth = firebase.auth();

    // Navigation links
    const homeLink = document.getElementById('home');
    const scheduleLink = document.getElementById('schedule');
    const personnelLink = document.getElementById('personnel');
    const profileLink = document.getElementById('profile');
    const logoutLink = document.getElementById('logout');

    // Main content area
    const mainContent = document.getElementById('main-content');

    // Load home content by default
    loadHomeContent();

    // Event listeners for navigation
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadHomeContent();
    });

    scheduleLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadScheduleContent();
    });

    personnelLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadPersonnelContent();
    });

    profileLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadProfileContent();
    });

    logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        logout();
    });

    function loadHomeContent() {
        mainContent.innerHTML = `
            <h2>Welcome to the Rotation Manager Dashboard</h2>
            <p>This is the home page. Use the navigation links to manage rotations, view personnel details, and more.</p>
        `;
    }

    function loadScheduleContent() {
        mainContent.innerHTML = `
            <h2>Schedule</h2>
            <p>Here you can view and manage the work schedules.</p>
        `;
    }

    async function loadPersonnelContent() {
        mainContent.innerHTML = `
            <div class="top-section"><h2>Personnel</h2>
            <a href="add_personnel.html"><button class="addButton" id="addPersonnelButton">Add Personnel</button></a></div>
            <h3>Personnel List</h3>
            <div class="grid1">
            <div class="grid-item"><p>Personnel's name</p></div>
  <div class="grid-item"><p>Role</p></div>
  <div class="grid-item"><p>Current department</p></div>
  <div class="grid-item"><p>Start date</p></div>
  <div class="grid-item"><p>End date</p></div>
            </div>
            <div id="personnelList"></div>
            <ul id="personnelList" class="personnel-list"></ul>
        `;

        loadPersonnelList();

    }

    async function loadPersonnelList() {
        const personnelList = document.getElementById('personnelList');
        personnelList.innerHTML = ''; // Clear previous content

        try {
            console.log('Fetching personnel...');
            db.collection('personnel').onSnapshot((querySnapshot) => {
                personnelList.innerHTML = ''; // Clear previous content
                querySnapshot.forEach((doc) => {
                    const personnel = doc.data();
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                    <div class="grid2">
                         <div class="grid-item">${personnel.name}</div>
                         <div class="grid-item">${personnel.role}</div>
                         <div class="grid-item">${personnel.currentDepartment}</div>
                         <div class="grid-item">${personnel.startDate}</div>
                         <div class="grid-item">${personnel.endDate}</div>
                        </div>
                    `;
                    personnelList.appendChild(listItem);
                });
            });
        } catch (error) {
            console.error('Error fetching personnel: ', error);
        }
    }


    function loadProfileContent() {
        mainContent.innerHTML = `
            <h2>Profile</h2>
            <p>Here you can view and edit your profile information.</p>
        `;
    }

    function logout() {
        auth.signOut().then(() => {
            alert('Logged out successfully!');
            window.location.href = 'index.html';
        }).catch((error) => {
            console.error('Error logging out:', error);
            alert('Error logging out: ' + error.message);
        });
    }
});
