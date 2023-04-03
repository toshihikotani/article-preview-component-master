let shareButton = document.getElementById("button");
let socialMediaContent = document.getElementById("social-media-content");

// Click Event 
shareButton.addEventListener("click", function(event){
    
    // Toggle Button Color
    this.classList.toggle("show-social");

    // Toggle Show/Hide Social Media Section.
    socialMediaContent.classList.toggle("show-social-media");

})