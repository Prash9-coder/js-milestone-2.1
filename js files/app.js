// app.js
document.addEventListener('DOMContentLoaded', () => {
  // Slideshow functionality
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slideshow-slide');

  function showSlides() {
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }

  showSlides();

  // Video controls
  const video = document.getElementById('course-video');
  const playPauseButton = document.getElementById('play-pause-button');
  const videoContainer = document.querySelector('.video-container');

  playPauseButton.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      videoContainer.classList.add('playing');
    } else {
      video.pause();
      videoContainer.classList.remove('playing');
    }
  });

  video.addEventListener('play', () => {
    videoContainer.classList.add('playing');
  });

  video.addEventListener('pause', () => {
    videoContainer.classList.remove('playing');
  });
});


// app.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('discussion-form');
  const threadsContainer = document.querySelector('.discussion-threads');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const topic = document.getElementById('topic').value;
    const message = document.getElementById('message').value;
    
    if (username && topic && message) {
      addThread(username, topic, message);
      form.reset();
      alert('Message submitted!');
    } else {
      alert('Please fill in all fields');
    }
  });

  function addThread(username, topic, message) {
    const thread = document.createElement('div');
    thread.className = 'thread';

    const threadTitle = document.createElement('h3');
    threadTitle.textContent = topic;

    const threadUsername = document.createElement('p');
    threadUsername.textContent = `Username: ${username}`;

    const threadMessage = document.createElement('p');
    threadMessage.textContent = `Message: ${message}`;

    thread.appendChild(threadTitle);
    thread.appendChild(threadUsername);
    thread.appendChild(threadMessage);

    threadsContainer.appendChild(thread);
  }
});
