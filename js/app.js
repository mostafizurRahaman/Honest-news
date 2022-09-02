// catagories load from api 
const loadCategories = async () => {
   try{
         const url = `https://openapi.programming-hero.com/api/news/categories`;
         const res = await fetch(url);
         const data =await res.json(); 
        showCategories(data.data.news_category); 
   }catch(error){
      console.log(error); 
   }
}


const showCategories = (categories) => {
      const categoriesContainer =  document.getElementById('category-container'); 
      categories.forEach(category => {
          const div = document.createElement('div');             
            div.innerHTML = `
               <a href="#" onclick="newsLoad('${category.category_id}')" class="text-decoration-none d-inline-block px-3 py-2 bg-primary text-dark fw-bold rounded text-white" > ${category.category_name}</a>
            `;       
            
            categoriesContainer.appendChild(div); 
      });
      
}     

loadCategories(); 



//News load 
const newsLoad = (id) => {
   const url = `https://openapi.programming-hero.com/api/news/category/${id}`; 
   fetch(url)
   .then(res => res.json())
   .then(data => displayNews(data.data))
   .catch(error => console.log(error))
}

// load categories news 

const displayNews = (newses) => {
   const newsContainer = document.getElementById("news-container"); 
   newsContainer.innerHTML = ``; 
   const newsCounter =  document.getElementById('newsCounter');
   if(newses.length < 1){
         newsCounter.innerText = `No News Found!!!`;
         newsCounter.classList.add('danger');
         newsCounter.classList.remove('text-primary');
   }else{
      newsCounter.innerText = `${newses.length} News Found`; 
      newsCounter.classList.add('text-primary');
      newsContainer.classList.remove('danger')
   }
   newses.forEach(news => {
      const card = document.createElement('div'); 
      card.classList.add('col-12');
      card.innerHTML = `
      <div class="card mb-5 text-white bg-dark p-3" onclick="loadUniqueNews('${news._id}')">
      <div class="row g-0 align-items-lg-center">
        <div class="col-lg-3"> 
          <img src="${news.thumbnail_url}" class="w-100 " alt="...">
        </div>
        <div class="col-lg-9">
          <div class="card-body">
            <h5 class="card-title mb-3 text-warning">${news.title}</h5>
            <p class="card-text">${news.details.slice(0,100)}</p>
            <p class="card-text">${news.details.slice(101,200)}<a href="#" class="text-danger text-decoration-none">...read more</a></span></p>
           <div class="row align-items-center mt-4" id="card-bottom">
            <div class="col-5 d-flex justify-content-start gap-2">            
               <div class="d-flex align-items-center justify-content-center">
                  <img src="${news.author.img}" style="width: 30px; height:30px" class="rounded-circle" alt="">
               </div> 
               <div class="d-flex align-items-center flex-column">
                     <p class="mb-0">${news.author.name ? news.author.name : "No user name found"}</p>
                     <p class="mb-0">${news.author.published_date ? news.author.published_date : "date not found"}</p>
               </div>                         
            </div>
            <div class="col-2">
               <p class="mb-0"> <i class="fa-solid fa-eye"></i> <span>${news.total_view ? news.total_view : 0}M</span></p>
            </div>
            <div class="col-3">
               <i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star-half-stroke text-warning"></i>
            </div>
            <div class="col-1">
               <i class="fa-solid fa-circle-chevron-right text-primary"></i>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div> 
      `; 
   
      newsContainer.appendChild(card);
   })
}



// // display news with a modal 
// const loadUniqueNews = async (id) => {
//    try{
//       const url = `https://openapi.programming-hero.com/api/news/${id}`; 
//       try{
//          const 
//       }
      
//    }
// } 