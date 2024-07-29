document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded event fired");

    // Initialize Firebase
    const db = firebase.firestore();

    const addPersonnelForm = document.getElementById('addPersonnelForm');
    addPersonnelForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const personnelName = document.getElementById('personnelName').value;
        const personnelEmail = document.getElementById('personnelEmail').value;
        try {
            await db.collection('personnel').add({
                name: personnelName,
                email: personnelEmail
            });
            alert('Personnel added successfully!');
            window.location.href = 'dashboard.html'; // Redirect back to the dashboard
        } catch (error) {
            console.error('Error adding personnel: ', error);
            alert('Error adding personnel: ' + error.message);
        }
    });
});
