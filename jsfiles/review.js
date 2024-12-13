const locations = {
    "hotelDeVille": "ChIJAXyq5_3q9EcRRbsKvW-eoWM",
    "henriIV": "ChIJwQhsOk3q9EcRMijKMemtSMo"
};

const apiKey = "AIzaSyBjYgwn-KmMAXkHS5aJYt45t3S3Fzmfbcw";

document.addEventListener("DOMContentLoaded", () => {
    fetchGoogleRating(locations.hotelDeVille, "hotel-de-ville-rating");
    fetchGoogleRating(locations.henriIV, "henri-iv-rating");
});

async function fetchGoogleRating(placeId, elementId) {
    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating&key=${apiKey}`
        );

        const data = await response.json();
        if (data.result && data.result.rating) {
            document.getElementById(elementId).textContent = `Google Rating: ${data.result.rating} ★`;
        } else {
            document.getElementById(elementId).textContent = "Rating not available yet";
        }
    } catch (error) {
        console.error("Error fetching Google rating:", error);
        document.getElementById(elementId).textContent = "Unable to fetch rating";
    }
}