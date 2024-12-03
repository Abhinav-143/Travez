// Sample data: Major cities in Andhra Pradesh with latitude and longitude
const destinations = [
  { name: "Vijayawada", latitude: 16.5062, longitude: 80.6480 },
  { name: "Visakhapatnam", latitude: 17.6868, longitude: 83.2185 },
  { name: "Rajahmundry", latitude: 17.0005, longitude: 81.8040 },
  { name: "Tirupati", latitude: 13.6288, longitude: 79.4192 },
  { name: "Guntur", latitude: 16.3067, longitude: 80.4365 },
  { name: "Kurnool", latitude: 15.8281, longitude: 78.0373 },
  { name: "Nellore", latitude: 14.4426, longitude: 79.9865 },
  { name: "Chittoor", latitude: 13.2172, longitude: 79.1004 },
  { name: "Anantapur", latitude: 14.6819, longitude: 77.6006 },
  { name: "Kadapa", latitude: 14.4673, longitude: 78.8242 },
  { name: "Amaravati", latitude: 16.5183, longitude: 80.5585 },
  { name: "Kakinada", latitude: 16.9903, longitude: 82.2408 },
  { name: "Machilipatnam", latitude: 16.1875, longitude: 81.1389 },
  { name: "Ongole", latitude: 15.5057, longitude: 80.0499 },
  { name: "Srikakulam", latitude: 18.2985, longitude: 83.8973 },
  { name: "Eluru", latitude: 16.7100, longitude: 81.0956 },
  { name: "Proddatur", latitude: 14.7502, longitude: 78.5536 },
  { name: "Hindupur", latitude: 13.8284, longitude: 77.4911 },
  { name: "Chilakaluripet", latitude: 16.0895, longitude: 80.1672 },
  { name: "Tadepalligudem", latitude: 16.8147, longitude: 81.5293 },
  { name: "Anakapalle", latitude: 17.6911, longitude: 83.0030 },
  { name: "Bhimavaram", latitude: 16.5402, longitude: 81.5220 },
  { name: "Madanapalle", latitude: 13.5503, longitude: 78.5029 },
  { name: "Narasaraopet", latitude: 16.2360, longitude: 80.0490 },
  { name: "Tanuku", latitude: 16.7541, longitude: 81.6791 },
  { name: "Adoni", latitude: 15.6270, longitude: 77.2741 },
  { name: "Tenali", latitude: 16.2378, longitude: 80.6350 },
  { name: "Markapur", latitude: 15.6802, longitude: 79.2707 },
  { name: "Bapatla", latitude: 15.9049, longitude: 80.4670 },
  { name: "Dharmavaram", latitude: 14.4143, longitude: 77.7156 },
  { name: "Nandyal", latitude: 15.4855, longitude: 78.4834 },
  { name: "Gooty", latitude: 15.1202, longitude: 77.6151 },
];

// Haversine formula to calculate distance between two points
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

// Function to find nearby destinations based on user input
function findNearbyDestinations() {
  const city = document.getElementById("city").value;
  const radius = parseFloat(document.getElementById("radius").value);

  if (!city || isNaN(radius)) {
    alert("Please enter a valid city and radius.");
    return;
  }

  // Set default city coordinates (Vijayawada) if city not found
  let cityCoordinates = { latitude: 16.5062, longitude: 80.6480 };

  // Match city input with known cities
  switch (city.toLowerCase()) {
  case "vijayawada":
    cityCoordinates = { latitude: 16.5062, longitude: 80.6480 };
    break;
  case "visakhapatnam":
    cityCoordinates = { latitude: 17.6868, longitude: 83.2185 };
    break;
  case "rajahmundry":
    cityCoordinates = { latitude: 17.0005, longitude: 81.8040 };
    break;
  case "tirupati":
    cityCoordinates = { latitude: 13.6288, longitude: 79.4192 };
    break;
  case "guntur":
    cityCoordinates = { latitude: 16.3067, longitude: 80.4365 };
    break;
  case "kurnool":
    cityCoordinates = { latitude: 15.8281, longitude: 78.0373 };
    break;
  case "nellore":
    cityCoordinates = { latitude: 14.4426, longitude: 79.9865 };
    break;
  case "chittoor":
    cityCoordinates = { latitude: 13.2172, longitude: 79.1004 };
    break;
  case "anantapur":
    cityCoordinates = { latitude: 14.6819, longitude: 77.6006 };
    break;
  case "kadapa":
    cityCoordinates = { latitude: 14.4673, longitude: 78.8242 };
    break;
  case "amaravati":
    cityCoordinates = { latitude: 16.5183, longitude: 80.5585 };
    break;
  case "kakinada":
    cityCoordinates = { latitude: 16.9903, longitude: 82.2408 };
    break;
  case "machilipatnam":
    cityCoordinates = { latitude: 16.1875, longitude: 81.1389 };
    break;
  case "ongole":
    cityCoordinates = { latitude: 15.5057, longitude: 80.0499 };
    break;
  case "srikakulam":
    cityCoordinates = { latitude: 18.2985, longitude: 83.8973 };
    break;
  case "eluru":
    cityCoordinates = { latitude: 16.7100, longitude: 81.0956 };
    break;
  case "proddatur":
    cityCoordinates = { latitude: 14.7502, longitude: 78.5536 };
    break;
  case "hindupur":
    cityCoordinates = { latitude: 13.8284, longitude: 77.4911 };
    break;
  case "chilakaluripet":
    cityCoordinates = { latitude: 16.0895, longitude: 80.1672 };
    break;
  case "tadepalligudem":
    cityCoordinates = { latitude: 16.8147, longitude: 81.5293 };
    break;
  case "anakapalle":
    cityCoordinates = { latitude: 17.6911, longitude: 83.0030 };
    break;
  case "bhimavaram":
    cityCoordinates = { latitude: 16.5402, longitude: 81.5220 };
    break;
  case "madanapalle":
    cityCoordinates = { latitude: 13.5503, longitude: 78.5029 };
    break;
  case "narasaraopet":
    cityCoordinates = { latitude: 16.2360, longitude: 80.0490 };
    break;
  case "tanuku":
    cityCoordinates = { latitude: 16.7541, longitude: 81.6791 };
    break;
  case "adoni":
    cityCoordinates = { latitude: 15.6270, longitude: 77.2741 };
    break;
  case "tenali":
    cityCoordinates = { latitude: 16.2378, longitude: 80.6350 };
    break;
  case "markapur":
    cityCoordinates = { latitude: 15.6802, longitude: 79.2707 };
    break;
  case "bapatla":
    cityCoordinates = { latitude: 15.9049, longitude: 80.4670 };
    break;
  case "dharmavaram":
    cityCoordinates = { latitude: 14.4143, longitude: 77.7156 };
    break;
  case "nandyal":
    cityCoordinates = { latitude: 15.4855, longitude: 78.4834 };
    break;
  case "gooty":
    cityCoordinates = { latitude: 15.1202, longitude: 77.6151 };
    break;
  default:
    alert("City not found. Defaulting to Vijayawada.");
}


  const { latitude: userLat, longitude: userLon } = cityCoordinates;

  // Filter destinations within the given radius
  const nearbyDestinations = destinations.filter((destination) => {
    const distance = haversine(
      userLat,
      userLon,
      destination.latitude,
      destination.longitude
    );
    return distance <= radius;
  });

  // Update UI with results
  const destinationList = document.getElementById("destination-list");
  destinationList.innerHTML = ""; // Clear previous results

  if (nearbyDestinations.length > 0) {
    nearbyDestinations.forEach((destination) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${destination.name} (Distance: ${haversine(
        userLat,
        userLon,
        destination.latitude,
        destination.longitude
      ).toFixed(2)} km)`;
      destinationList.appendChild(listItem);
    });
  } else {
    destinationList.innerHTML = "<li>No destinations found within the radius.</li>";
  }
}

// Attach event listener to button
document.getElementById("find-btn").addEventListener("click", findNearbyDestinations);
