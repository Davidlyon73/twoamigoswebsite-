// Place IDs for your locations
const locations = {
    "hotelDeVille": "ChIJAXyq5_3q9EcRRbsKvW-eoWM", // Place ID for 11 Rue Terme
    "henriIV": "ChIJwQhsOk3q9EcRMijKMemtSMo" // Place ID for 1 Rue Henri IV
};

const apiKey = "AIzaSyBjYgwn-KmMAXkHS5aJYt45t3S3Fzmfbcw"; // Your API key

// Fetch Google Rating
async function fetchGoogleRating(placeId, elementId) {
    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating&key=${apiKey}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Check if a rating is available
        if (data.result && data.result.rating) {
            const rating = data.result.rating;
            document.getElementById(elementId).textContent = `Google Rating: ${rating} ★`;
        } else {
            // Fallback if no rating exists
            document.getElementById(elementId).textContent = "Rating not available yet";
        }
    } catch (error) {
        console.error("Error fetching Google rating:", error);
        document.getElementById(elementId).textContent = "Unable to fetch rating";
    }
}

// Load ratings for both locations
fetchGoogleRating(locations.hotelDeVille, "hotel-de-ville-rating");
fetchGoogleRating(locations.henriIV, "henri-iv-rating");