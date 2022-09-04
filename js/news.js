const newsPortel = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => displayNewsportel(data.data.news_category))
}

const displayNewsportel = News => {
    const newsContainer = document.getElementById('news-container');
    News.forEach(portal => {
        // console.log(portal.category_name);
        const newsli = document.createElement('li');
        newsli.onclick = () => displayCatagory(portal.category_id)
        newsli.innerHTML = `
       ${portal.category_name}
     `;
        newsContainer.appendChild(newsli);
    })

}
const displayCatagory = id => {
    // console.log(id);
    const url = ` https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFasion(data.data))


}

const displayFasion = fashions => {
    const fashionContainer = document.getElementById('fashion-container');
    fashionContainer.innerHTML = '';
    fashions.sort((a, b) => b.total_view - a.total_view)
    fashions.forEach(fashion => {
        // console.log(fashion._id)
        const fashionDiv = document.createElement('div');
        // fashionDiv.classList.add('row', 'gap-3');
        fashionDiv.innerHTML = `
       <div class="col-md-4">
       <img src="${fashion.thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${fashion.title}</h5>
        <p class="card-text">${fashion.details}</p>
        <img class="autor-images" src="${fashion.author.img}" alt="">
        <span> ${fashion.author.name} </span>
        <i class="fa-solid fa-eye"></i>
        <span>${fashion.total_view}</span> 
        <button onclick="newsDetails('${fashion._id}')" href="#" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#exampleModal">show detail</button>
        </button> 
        </div>
        </div>
       `;

        fashionContainer.appendChild(fashionDiv);
    })
}
const newsDetails = id => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaynewDetails(data.data[0]));
}

const displaynewDetails = news => {
    console.log(news);
    const newsDetail = document.getElementById('newsDetailModal');
    newsDetail.innerHTML = `
    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${news.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <img class="img-fluid" src="${news.image_url}" alt="">
                        <p class="py-3">${news.details}</p>  
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            
                        </div>
                    </div>
    `

}

newsPortel();

