const openTab = function (instance, tab_id) {
    
    // Declare all variables
    let i, tabcontent, tab_buttons;
    
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Get all the buttons and remove the active class
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach((button) => {
        button.classList.remove("active");
    });
    instance.classList.add("active");

    document.getElementById(tab_id).style.display = "block";
}

window.addEventListener('load', function() {
    const annoucements = document.getElementById("ann");
    openTab(annoucements, 'annoucements');
});