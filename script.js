// Welcome Message: Display user name
const nameInput = document.getElementById('nameInput');
const submitNameButton = document.getElementById('submitName');
const welcomeMessage = document.getElementById('welcomeMessage');

submitNameButton.addEventListener('click', () => {
    const userName = nameInput.value.trim();
    if (userName) {
        welcomeMessage.innerHTML = `<p>Welcome, ${userName}! Enjoy exploring my portfolio.</p>`;
    } else {
        alert('Please enter your name.');
    }
});

// Toggle Sidebar Menu
const menuButton = document.getElementById('menuButton');
const sidebarMenu = document.getElementById('sidebarMenu');

menuButton.addEventListener('click', () => {
    sidebarMenu.classList.toggle('visible');
});

// Smooth Scrolling for Navigation Links with Offset
document.querySelectorAll('#sidebarMenu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').substring(1); // Get target section ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const headerOffset = 100; // Adjust this value to control the offset
            const elementPosition = targetSection.getBoundingClientRect().top; // Position relative to the viewport
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset; // Final position with offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Smooth scrolling effect
            });

            // Optionally close the menu after clicking
            const sidebarMenu = document.getElementById('sidebarMenu');
            sidebarMenu.classList.remove('visible');
        }
    });
});


// Accessibility: Increase Text Size
const increaseTextSizeButton = document.getElementById('increaseTextSize');
let isTextLarge = false;

increaseTextSizeButton.addEventListener('click', () => {
    document.body.style.fontSize = isTextLarge ? '100%' : '120%';
    isTextLarge = !isTextLarge;
});

// Accessibility: Toggle Grayscale Mode for Colorblind Accessibility
const colorBlindButton = document.getElementById('colorBlindButton');
let isGrayscaleMode = false;

colorBlindButton.addEventListener('click', () => {
    if (!isGrayscaleMode) {
        document.body.classList.add('grayscale-mode');
    } else {
        document.body.classList.remove('grayscale-mode');
    }
    isGrayscaleMode = !isGrayscaleMode;
});


// Accessibility: Display Alt Text
const displayAltTextButton = document.getElementById('displayAltText');
let isAltTextVisible = false;

displayAltTextButton.addEventListener('click', () => {
    const images = document.querySelectorAll('.gallery-item img, #myImage');
    images.forEach(img => {
        if (!isAltTextVisible) {
            const altText = document.createElement('div');
            altText.textContent = img.alt;
            altText.classList.add('alt-overlay');
            img.parentElement.style.position = 'relative'; // Ensure positioning for overlay
            img.parentElement.appendChild(altText);
            img.altElement = altText;
        } else {
            img.altElement?.remove(); // Remove the alt text if visible
        }
    });
    isAltTextVisible = !isAltTextVisible;
});


// Change Text Color
const changeTextColorButton = document.getElementById('changeTextColor');
let isAccessibleTextColor = false;

changeTextColorButton.addEventListener('click', () => {
    if (!isAccessibleTextColor) {
        document.body.style.color = '#4CAF50'; // Green text for better contrast
        document.querySelectorAll('a').forEach(link => {
            link.style.color = '#0073e6'; // Blue links
        });
    } else {
        document.body.style.color = '#333'; // Default text color
        document.querySelectorAll('a').forEach(link => {
            link.style.color = '#004080'; // Default link color
        });
    }
    isAccessibleTextColor = !isAccessibleTextColor;
});

// Hover Zoom for Images
const galleryImages = document.querySelectorAll('.gallery-item img');
galleryImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)'; // Slight zoom on hover
        img.style.transition = 'transform 0.3s ease';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)'; // Reset zoom
    });
});
// Zoom In and Out for Resume
const resumeImage = document.getElementById('resumeImage');

resumeImage.addEventListener('click', () => {
    if (resumeImage.classList.contains('zoomed')) {
        resumeImage.classList.remove('zoomed'); // Zoom out
    } else {
        resumeImage.classList.add('zoomed'); // Zoom in
    }
});

