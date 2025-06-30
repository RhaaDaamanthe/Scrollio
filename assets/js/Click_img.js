document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.comment-image-container img');
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    document.body.appendChild(overlay);

    const enlargedImage = document.createElement('img');
    enlargedImage.className = 'enlarged-image';
    overlay.appendChild(enlargedImage);

    images.forEach(image => {
        image.parentElement.addEventListener('click', () => {
            enlargedImage.src = image.src;
            overlay.style.display = 'flex';
        });
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});