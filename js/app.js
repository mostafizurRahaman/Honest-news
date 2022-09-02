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
               <a href="#" class="text-decoration-none d-inline-block px-3 py-2 bg-primary text-dark fw-bold rounded text-white" onclick='newsLoad("${category.id}")'> ${category.category_name}</a>
            `
            categoriesContainer.appendChild(div); 
      });
      console.log(category.id); 
}     

loadCategories(); 



//News load 

const newsLoad  = (id) => {
   const url = `https://openapi.programming-hero.com/api/news/category/${id}`
}
