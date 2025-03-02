document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('.video-card video');
  const likeButtons = document.querySelectorAll('.like-btn');
  const commentButtons = document.querySelectorAll('.comment-btn');

  // Play/Pause on Click
  videos.forEach(video => {
    video.addEventListener('click', () => {
      video.paused ? video.play() : video.pause();
    });
  });

  // Like Button
  likeButtons.forEach(btn => {
    let likes = 0;
    btn.addEventListener('click', () => {
      likes++;
      btn.textContent = `❤️ ${likes}`;
    });
  });

  // Comment Button (Placeholder)
  commentButtons.forEach(btn => {
    let comments = 0;
    btn.addEventListener('click', () => {
      comments++;
      btn.textContent = `💬 ${comments}`;
      alert('Comment feature coming soon!');
    });
  });

  // Auto-play current video in view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.7 });

  videos.forEach(video => observer.observe(video));
});