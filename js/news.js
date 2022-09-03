const newsPortel = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => displayNewsportel(data.data.news_category))
}

const displayNewsportel = News => {
    const newsContainer = document.getElementById('news-container');
    News.forEach(portal => {
        console.log(portal.category_name);
        const newsli = document.createElement('li');
        newsli.onclick = () => displayCatagory(portal.category_id)
        newsli.innerHTML = `
       ${portal.category_name}
     `;
        newsContainer.appendChild(newsli);
    })

}
const displayCatagory = id => {
    console.log(id);
    const url = ` https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFasion(data.data))


}

const displayFasion = fashions => {
    const fashionContainer = document.getElementById('fashion-container');
    fashionContainer.innerHTML = '';
    fashions.forEach(fashion => {
        console.log(fashion)
        const fashionDiv = document.createElement('div');
        fashionDiv.classList.add('row', 'gap-3');
        fashionDiv.innerHTML = `
       <div class="col-md-4">
       <img src="${fashion.thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${fashion.title}</h5>
        <p class="card-text">${fashion.details.slice(0, 200)}</p>
        </div>
        </div>
       `;
        fashionContainer.appendChild(fashionDiv);
    })
}
newsPortel();

