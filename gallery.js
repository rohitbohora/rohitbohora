var fullImgBox = document.getElementById('fullImgBox');
var fullImg = document.getElementById('fullImg');
var imgGallery = document.querySelector('.img-gallery');
var closeBtn = document.querySelector('#fullImgBox span');

// Add a click event listener to each image in the gallery
var galleryImages = document.querySelectorAll('.img-gallery img');
galleryImages.forEach(function(image) {
    image.addEventListener('click', function() {
        // Set the source of the full image to the clicked image
        fullImg.src = this.src;
        // Show the full image box
        fullImgBox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Disable scrolling
    });
});

// Add a click event listener to close the full image box
closeBtn.addEventListener('click', closeFullImg);

// Add a click event listener to close the full image box when clicking outside the image
window.addEventListener('click', function(event) {
    if (event.target === fullImgBox) {
        closeFullImg();
    }
});

// Add a keydown event listener to close the full image box when pressing the 'Esc' key
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeFullImg();
    }
});

// Function to close the full image box
function closeFullImg() {
    fullImgBox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
}
