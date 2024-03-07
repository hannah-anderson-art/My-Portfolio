///////////////////////////////////
// MODAL TEST 1
// Get the modal
// var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }

///////////////////////////////////
// MODAL TEST 2
document.addEventListener('DOMContentLoaded', function () {
    // Get all images that open a modal
    var images = document.querySelectorAll('.myImg');

    // Get all modals
    var modals = document.querySelectorAll('.modal');

    // Loop through all images to attach click events
    images.forEach(function(img) {
        img.onclick = function() {
            var modalId = this.getAttribute('data-modal-target');
            var modal = document.querySelector(modalId);
            var modalImg = modal.querySelector('.modal-content');
            var captionText = modal.querySelector('.caption');

            var viewportHeight = window.innerHeight;
            var viewportWidth = window.innerWidth;
            var imageNaturalWidth = this.naturalWidth;
            var imageNaturalHeight = this.naturalHeight;

            // Set modal image dimensions proportional to the image's natural size
            if (imageNaturalWidth > viewportWidth || imageNaturalHeight > viewportHeight) {
                // Calculate the ratio
                var ratio = Math.min(viewportWidth / imageNaturalWidth, viewportHeight / imageNaturalHeight);
                modalImg.style.width = (imageNaturalWidth * 1.25 * ratio) + 'px';
                modalImg.style.height = (imageNaturalHeight * 1.25 * ratio) + 'px';
            } else {
                // If the image is smaller than the viewport, use its natural size
                modalImg.style.width = imageNaturalWidth + 'px';
                modalImg.style.height = imageNaturalHeight + 'px';
            }

            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        };
    });

    // Close modal when the close button (span) is clicked
    modals.forEach(function(modal) {
        var span = modal.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
        }
    });

    // Close the modal if the user clicks anywhere outside of the modal content
    window.onclick = function(event) {
        modals.forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
});

// The script can be placed directly in your HTML or in a separate .js file
window.onload = function() {
    var expandingBox = document.getElementById('expanding-box');
    var floatingIcon = document.getElementById('floatingIcon');
    floatingIcon.style.opacity = '1';
    
    // // Add event listener for mouseover (hover)
    // expandingBox.addEventListener('mouseover', function() {
    //     floatingIcon.style.opacity = '0.5'; // Set lower opacity
    // });
    
    // Add event listener for mouseout
    expandingBox.addEventListener('mouseover', function() {
        floatingIcon.style.opacity = '0'; // Reset to full opacity
    });
    
    // setTimeout(function() {
    //   floatingIcon.style.opacity = '0';
    // }, 5000); // The icon will disappear after 5 seconds
  };

