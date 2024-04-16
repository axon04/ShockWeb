// Function to toggle the dropdown menu
function toggleDropdownMenu(dropdownId, dropiconId) {
    var dropdown = document.getElementById(dropdownId);
    var dropicon = document.getElementById(dropiconId);
    var isDropdownOpen = dropdown.classList.contains('show');

    // Hide all dropdowns and sub-dropdowns
    var allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(function(dropdown) {
        dropdown.classList.remove('show');
    });

    var allSubDropdowns = document.querySelectorAll('.dropdown-sub-content');
    allSubDropdowns.forEach(function(subDropdown) {
        subDropdown.classList.remove('show');
    });

    // Reset all dropdown icons to angle down
    var allDropicons = document.querySelectorAll('.fa-angle-up');
    allDropicons.forEach(function(icon) {
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
    });

    // Remove active class from all dropdown buttons
    var allDropdownButtons = document.querySelectorAll('.dropbtn');
    allDropdownButtons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Toggle the clicked dropdown
    if (!isDropdownOpen) {
        dropdown.classList.add("show");
        dropicon.classList.remove("fa-angle-down");
        dropicon.classList.add("fa-angle-up");

        // Add active class to the clicked dropdown button
        document.getElementById(dropdownId).previousElementSibling.classList.add('active');
    } else {
        dropdown.classList.remove("show");
        dropicon.classList.remove("fa-angle-up");
        dropicon.classList.add("fa-angle-down");

        // Remove active class from the clicked dropdown button
        document.getElementById(dropdownId).previousElementSibling.classList.remove('active');
    }
}

// Function to toggle the sub-dropdown menu
function toggleSubDropdownMenu(event) {
    var clickedSubmenu = event.currentTarget.nextElementSibling;

    // Hide all other sub-dropdowns
    var allSubDropdowns = document.querySelectorAll('.dropdown-sub-content');
    allSubDropdowns.forEach(function(subDropdown) {
        if (subDropdown !== clickedSubmenu) {
            subDropdown.classList.remove('show');
        }
    });

    // Toggle the clicked sub-dropdown
    clickedSubmenu.classList.toggle('show');

    // Calculate the position of the sub-dropdown
    var rect = event.currentTarget.getBoundingClientRect();
    var parentRect = event.currentTarget.parentElement.getBoundingClientRect();
    var offsetX = rect.left - parentRect.left + rect.width; // Add width of parent button
    var offsetY = rect.top - parentRect.top;

    // Set the position of the sub-dropdown
    clickedSubmenu.style.top = offsetY + 'px';
    clickedSubmenu.style.left = offsetX + 'px';

    // Prevent the event from propagating to the parent dropdown content
    event.stopPropagation();
}

// Function to handle window click events
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        var dropicons = document.querySelectorAll('.fa-angle-up');

        dropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('show');
        });

        dropicons.forEach(function(dropicon) {
            dropicon.classList.remove('fa-angle-up');
            dropicon.classList.add('fa-angle-down');
        });

        var subDropdowns = document.querySelectorAll('.dropdown-sub-content');
        subDropdowns.forEach(function(subDropdown) {
            subDropdown.classList.remove('show');
        });

        // Remove active class from all dropdown buttons
        var allDropdownButtons = document.querySelectorAll('.dropbtn');
        allDropdownButtons.forEach(function(button) {
            button.classList.remove('active');
        });
    }
}