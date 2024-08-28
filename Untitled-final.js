let allbtn = document.getElementById('all');
let result = ``;
let container = document.getElementById('container');
let product = ``


async function allproducts(){
try{
const api = await fetch(`https://fake-coffee-api.vercel.app/api`);
const response = await api.json()
console.log(response)
for(let i = 0; i < response.length ; i++){
result+=`
  <div class="card bg-dark" style="width: 20rem;">
  <img src="${response[i].image_url}" class="images card-img-top" alt="...">
  <div class="card-body">
    <a href="./Untitled-product.html" target="_blank">
    <h5 class="title h4 card-title mb-3 text-white">${response[i].name}</h5>
    <p class="flavor p text-danger card-text">Flavor: ${response[i].flavor_profile[0]}</p>
    <p id="p" class="text-white">Details : ${response[i].description}</p>
    <p id="pp" class="text-white">Region : ${response[i].region}</p>
    <p class="p text-white card-text" style="display:inline">Price: <p class="price text-white" style="display:inline"> ${response[i].price} </p> $</p>
    <a href="#" class="btn btn-danger"><i class="bi bi-bag-plus-fill"></i>Add</a>
  </div>
  </a>
</div>
`
container.innerHTML = result;
}
let cards = document.querySelectorAll('.card');
cards.forEach(card => {
card.addEventListener('click', function(){
    let title = card.querySelector('.title').textContent;
    console.log(title);
    let prices = card.querySelector('.price').textContent;
    console.log(prices);
    let flavor = card.querySelector('.flavor').textContent;
    console.log(flavor); 
    let images = card.querySelector('.images').src;
    let description = card.querySelector('#p').textContent;
    let region = card.querySelector('#pp').textContent;
    
})    
})
}



catch(error){
    console.error(error)
}}


allproducts();




































