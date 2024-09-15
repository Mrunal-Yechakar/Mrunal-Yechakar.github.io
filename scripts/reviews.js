fetch('../Data/review_api.json')
  .then(response => response.json())
  .then(data => {
    useReviews(data);
  })
  .catch(error => {
    console.log('Error occurs in review api', error);
  });

function useReviews(reviews) {
  console.log(reviews);
  const reviewContainer = document.getElementById('reviews-container');
  reviewContainer.innerHTML = ''; 

  reviews.reviewdata.forEach(review => {
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');

    // Parent div to hold img, name, stars, and date
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info-container');

    // Image 
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-container');
    const img = document.createElement('img');
    img.src = review.profileurl;
    img.alt = `${review.first_name} avatar`;
    imgDiv.appendChild(img);


    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details-container');

    // Name
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name-container');
    const name = document.createElement('h5');
    name.textContent = `${review.first_name}`;
    nameDiv.appendChild(name);

    // Stars and date 
    const starsDateDiv = document.createElement('div');
    starsDateDiv.classList.add('stars-date-container');

    const stars = document.createElement('div');
    stars.classList.add('stars');
    stars.innerHTML = '★★★★☆';

    const reviewDate = document.createElement('p');
    reviewDate.textContent = `${review.reviewdate}`;

    starsDateDiv.appendChild(stars);
    starsDateDiv.appendChild(reviewDate);

    // Append nameDiv and starsDateDiv into the detailsDiv
    detailsDiv.appendChild(nameDiv);
    detailsDiv.appendChild(starsDateDiv);

    // Append imgDiv and detailsDiv into the infoDiv
    infoDiv.appendChild(imgDiv);
    infoDiv.appendChild(detailsDiv);

    // Review text
    const reviewText = document.createElement('p');
    reviewText.textContent = review.review;

    // Append infoDiv and reviewText into the reviewDiv
    reviewDiv.appendChild(infoDiv);
    reviewDiv.appendChild(reviewText);

    reviewContainer.appendChild(reviewDiv);
  });
}

function scrollByAmount(amount) {
  const container = document.getElementById('reviews-container');
  container.scrollBy({
    left: amount,
    behavior: 'smooth'
  });
}

setInterval(()=>{
    document.getElementById('reviews-container').scrollBy({
        left:500,
        behavior:'smooth'
    })
},4000);