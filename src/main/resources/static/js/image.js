    const images = [
      "./img/download.jpg",
      "./img/download2.jpg",
      "./img/fist.jpg",
      "./img/images 1.jpg",
      "./img/images 2.jpg",
      "./img/images 3.jpg",
      "./img/images.jpg",
      "./img/logo.jpg"
    ];

    let currentIndex = 0;
    const currentImage = document.getElementById("current-image");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    // Function to update the displayed image
    function updateImage() {
      currentImage.src = images[currentIndex];
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === images.length - 1;
    }

    // Event listener for the "Previous" button
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateImage();
      }
    });

    // Event listener for the "Next" button
    nextButton.addEventListener("click", () => {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
      }
    });

    // Initialize the first image
    updateImage();
