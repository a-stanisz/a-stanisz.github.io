const mainShareButton = document.querySelector('.main-share-btn');
const tileShareButtons = document.querySelectorAll('.tile-share-btn');

async function copyText(event) {
  event.preventDefault();
  const link = this.getAttribute('link');
  try {
    await navigator.share({ url: link });
  } catch (error) {
    console.errror(error);
  }
}

mainShareButton.addEventListener('click', copyText);
tileShareButtons.forEach((btn) => btn.addEventListener('click', copyText));
