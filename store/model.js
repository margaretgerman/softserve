export default class Model {

  loadJSON(contr) {
      const url = "animals.json";

      fetch(url).then(d => {
          return d.json()
      }).then(data => {
          localStorage.setItem('data', JSON.stringify(data));
          contr.showView(data);

      });
  }

  handleCart(name) {
      const data = JSON.parse(localStorage.getItem('data'));
      let existentCart = [];

      if (localStorage.hasOwnProperty('cart')) {
          existentCart.push(localStorage.getItem('cart'));
          existentCart.push(name);
          localStorage.setItem('cart', existentCart);
      } else {
          localStorage.setItem('cart', name)
      }

      return data;
  }

  getCart() {
      return localStorage.getItem('cart');
  }

  filterSpecies(animal, contr) {
      const data = JSON.parse(localStorage.getItem('data'));
      let filteredAnimals = [];
      data.map(obj => {
          if (obj.species == animal)
              filteredAnimals.push(obj);
          console.log(obj);
      })
      contr.showView(filteredAnimals);
      console.log(filteredAnimals);
  }
}