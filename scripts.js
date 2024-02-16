const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error('There was an error', error);
    }
}

fetchNews();

function displayNews(articles) {
    const newsContainer = document.querySelector('.album .row');
    // const newsDiv = document.querySelector('#news');
    
    for (const article of articles) {
        const col = document.createElement('div');
        col.className = 'col';

        const card = document.createElement('div');
        card.className = 'card shadow-sm';

        const articleDiv = document.createElement('div');
        articleDiv.className = 'card-body';
        //create and append a headline to the articleDiv
        const title = document.createElement('h4');
        title.className = 'card-title';
        title.textContent = article.title;
        articleDiv.appendChild(title);

        const image = document.createElement('img');
        image.className = 'card-image-top';
        image.src = article.urlToImage;
        articleDiv.appendChild(image);

        const author = document.createElement('h5');
        author.textContent = article.author;
        articleDiv.appendChild(author);

        const description = document.createElement('p');
        description.textContent = article.description;
        articleDiv.appendChild(description);
    
      // TODO: Use document.createElement and appendChild to create and append more elements
        card.appendChild(articleDiv);
        col.appendChild(card);
        newsContainer.appendChild(col);
    }
}
        
        

  