function main() {
  let xmlhttp = new XMLHttpRequest();
  let url = "animals.json";
  const allAnimals = [];
  let container = document.querySelector('#container');
  localStorage.setItem('cart', '0');

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let animals = JSON.parse(this.responseText);
        
        animals.map(animal => {
          let pet = new Animal();
          pet.species = animal.species;
          pet.breed = animal.breed;
          pet.color = animal.color;
          pet.price = animal.price;
          pet.pic = animal.pic;
          pet.id = animal.id;
          pet.amount = animal.amount;
          container.innerHTML += pet.showCard();
          allAnimals.push(pet);
          if(!localStorage.getItem(animal.id)){
          setLocalStorage(animal.id, animal.amount);
        }
        })
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function setLocalStorage (id, amount) {
  localStorage.setItem(id, amount);
}

function addToLSFavorite (id, amount) {
  //localStorage.setItem(id, amount);
}

function addToLSCart (id, amount) {
  //localStorage.setItem(id, amount);
}

class Animal {
  constructor (species, breed, color, price, pic, amount, id) {
    species,
    breed,
    color,
    price,
    pic,
    amount,
    id
  }

  showCard() {
    let result = '';
    result = `<div class="box column is-one-quarter is-3">
              <article class="media">
              <div class="media-left">
              <figure class="image is-128x128">
                <img src=${this.pic} alt="Image">
              </figure>
            </div>
                  <div class="media-content">
                      <div class="content">
                        <strong> ${this.breed.toUpperCase()} ${this.species.toUpperCase()}</strong> 
                        <hr>
                        <p>Color: ${this.color}</p>
                        <p>Price: ${this.price}</p>
                        </div>
                          <nav class="level is-mobile">
                            <div class="level-left">
                            <button value = ${this.id}>Buy</button>
                            <button value = ${this.id}>Fav</button> 
                            </div>
                          </nav>
                  </div>
              </article>
            </div>`;
    return result;
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
 main();
});

document.addEventListener("click", function() {
  let targetEl = event.target || event.srcElement;
  let buttonClicked = (targetEl.textContent || targetEl.innerText);

  if(buttonClicked == 'Buy' || buttonClicked == 'Купити' || buttonClicked == 'Купить') 
    buyAnimal(targetEl.value);

  if(buttonClicked == 'Fav' || buttonClicked == 'Обране' || buttonClicked == 'Избранное') 
    favAnimal(targetEl.value);

    console.log(targetEl.textContent.trim());
});

function buyAnimal(target) {
 let amount = localStorage.getItem(target),
     cart;
 if (amount == 0)
  {
    alert('Run out of cuties!');
    return;
  }
  localStorage.setItem(target, amount-1);
  console.log('cart', localStorage.getItem(cart));

}

function favAnimal(target) {
  console.log('fav animal: ', target)
 }
