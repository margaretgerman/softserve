function main() {
  let xmlhttp = new XMLHttpRequest();
  let url = "animals.json";
  const allAnimals = [];
  let container = document.querySelector('#container');

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
        container.innerHTML += pet.showCard();
        allAnimals.push(pet);
        })
         
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  return allAnimals;
}



class Animal {
  constructor (species, breed, color, price, pic) {
    species,
    breed,
    color,
    price,
    pic
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
                        <strong> ${this.species.toUpperCase()}</strong> 
                        <hr>
                        <p>Color: ${this.color}</p>
                        <p>Breed: ${this.breed}</p>
                        <p>Price: ${this.price}</p>
                        
                        </div>
                  </div>
              </article>
            </div>`;
    return result;
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  
  
  let result = main();
  //console.log(result.length);
  result.map(animal => {
    //container.innerHTML += animal.showCard();
    console.log(animal);
  })
});