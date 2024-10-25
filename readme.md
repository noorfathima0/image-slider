# Image Slider

This project is a simple image slider with forward and backward navigation buttons and an optional auto-slide feature. The slider is built using HTML, CSS, and JavaScript.

## Features

- Manual Navigation: Move between images using "Previous" and "Next" buttons.
- Auto Slide: Automatically cycle through the images every 3 seconds when the auto-slide feature is enabled.
- Responsive Design: The slider adjusts to different screen sizes, making it mobile-friendly.

## Getting Started

Prerequisites

- A modern web browser.
- Basic knowledge of HTML, CSS, and JavaScript.

Running the Project
1. Download the project files:
   - `index.html`
   - `style.css`
   - `script.js`
   
   Ensure the project structure is as follows:

   ├── images/
   │   ├── image1.jpg
   │   ├── image2.jpg
   │   ├── image3.jpg
   │   ├── image4.jpg
   │   ├── image5.jpg
   │   ├── image6.jpg
   │   ├── image7.jpg
   │   ├── image8.jpg
   ├── index.html
   ├── style.css
   ├── script.js


2. Open `index.html` in a web browser:
   - Right-click on `index.html` and select "Open with" -> Choose a web browser (e.g., Chrome, Firefox).

3. Navigating the Slider:
   - Use the "Previous" and "Next" buttons to navigate between images.
   - Click the "Automate Slider" button to start the auto-slide functionality. Click again to stop.

Customization

- Add or Remove Images:
  Add your own images by placing them in the `images/` folder and updating the image `src` paths in the `index.html` file.

  <img src="images/your-image.jpg" class="slider-image" alt="Your Image">

- Adjust the Auto-Slide Duration:
  Change the interval between automatic slides by modifying the `setInterval` function in `script.js`:

  autoSlide = setInterval(nextSlide, 3000); // Change 3000 to your desired time in milliseconds
