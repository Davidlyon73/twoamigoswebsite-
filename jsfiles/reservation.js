// Attach event listeners to dropdown items
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        const restaurant = event.target.getAttribute('href');
        if (restaurant) {
            window.location.href = restaurant; // Navigate to the reservation page
        } else {
            alert('Erreur: Aucun lien de réservation disponible.');
        }
    });
});

// Toggle dropdown menu visibility
document.querySelector('.dropdown-button').addEventListener('click', function () {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show'); // This will toggle the visibility
});

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.reservation-dropdown');
    if (!dropdown.contains(event.target)) {
        document.querySelector('.dropdown-menu').classList.remove('show'); // Hide the dropdown
    }
});