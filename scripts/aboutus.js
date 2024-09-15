fetch('../htmlcomponent/about.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('about_container').innerHTML = data;
    })
    .catch(error => console.error('Error in About us:', error));

const showButton = document.getElementById('showmoreless');
const aboutContainer = document.getElementById('about_container');

showButton.addEventListener('click', () => {
    if (aboutContainer.style.height === '108px') {
        aboutContainer.style.height = 'auto'; 
        showButton.textContent = 'Show Less'; 
    } else {
        aboutContainer.style.height = '108px'; 
        showButton.textContent = 'Show More'; 
    }
});
