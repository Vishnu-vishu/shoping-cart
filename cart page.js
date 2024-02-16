document.getElementById('navToggle').addEventListener('click', function() {
    var navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
});

function search() {
    // Placeholder for search functionality
    var searchTerm = document.getElementById('searchInput').value;
    var shirts = document.getElementById('shirts');
    var hoodies = document.getElementById('Hoodies');
    if (searchTerm === "shirts") {
        shirts.style.display = "block";
        hoodies.style.display = "none";
    } else {
        hoodies.style.display = "block";
        shirts.style.display = "none";
    }
}