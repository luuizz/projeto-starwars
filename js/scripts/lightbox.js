const lightbox = document.querySelector('.lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const lightboxTrigger = document.querySelectorAll('.lightbox-trigger');
let currentVideo = null;

function openLightbox(e) {
  e.preventDefault();
  const videoId = this.dataset.videoId;
  if (currentVideo !== videoId) {
    currentVideo = videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    const video = document.createElement('iframe');
    video.width = 1120;
    video.height = 630;
    video.src = videoUrl;
    video.frameborder = 0;
    video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    video.allowfullscreen = true;
    // Verifica se há outro iframe no lightbox-content e remove-o
    const currentIframe = lightboxContent.querySelector('iframe');
    if (currentIframe) {
      lightboxContent.removeChild(currentIframe);
    }
    lightboxContent.appendChild(video);
  }
  lightbox.style.display = 'block';
}

function closeLightbox(e) {
  e.preventDefault();
  lightboxContent.innerHTML = '';
  currentVideo = null;
  lightbox.style.display = 'none';
}

lightboxTrigger.forEach(trigger => {
  trigger.addEventListener('click', openLightbox);
});
lightbox.addEventListener('click', closeLightbox);


lightbox.addEventListener('click', function(e) {
  if (e.target === this) {
    closeLightbox(e);
  }
});