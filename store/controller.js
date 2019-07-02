import Model from "./model.js";
import View from "./view.js";

export default class Controller {
    constructor() {
        this.model = new Model(this);
        this.view = new View(this);
        this.addNavListeners();
    }

    init() {
        this.model.loadJSON(this);
    }

    addNavListeners() {
        let navs = document.querySelectorAll('.navbar-item');
        navs.forEach(nav => nav.addEventListener('click', (el) => (
            this.handleNavbarClick(el))));
    }

    handleNavbarClick(el) {
        let clicked = el.currentTarget.dataset.name;
        let input = document.querySelector('.search');
        input.addEventListener('keyup', ()=>{
          this.model.searchAnimals(input.value, this);
        })
        switch (clicked) {
            case ('cart'): {
                let cartContent = this.model.getCart();
                (cartContent !== null) ? cartContent = cartContent.split(","): cartContent = 'Empty cart';
                this.view.showCart(cartContent, this);
                break;
            }

            case ('en'):
            case ('ru'):
            case ('ua'): {
              this.changeLanguage(clicked);
              break;
            }

            case ('home'):
            case ('login'): {
                this.init();
                document.querySelector('.login').style.display = 'none';
                document.querySelector('.search').classList.remove('is-hidden');
                break;
            }

            default:
                this.model.filterSpecies(clicked, this);
                console.log('not yet created', clicked);
        }

    }

    showView(data) {
        this.view.render(data, this);
    }

    changeLanguage(clicked) {
        console.log('change to ', clicked);
        this.view.render(data, this);
    }

    addToCart(name, ev) {
        this.showView(this.model.handleCart(ev.currentTarget.dataset.name, 1));
    } 

    emptyCart() {
      this.model.emptyCart();
      this.view.showCart();
    }

    showInfo(name, el) {
        let animalInfo = {};
        const ls = JSON.parse(localStorage.getItem('data'));
        ls.map(obj => {
            if (obj.id == el.currentTarget.dataset.name) {
                animalInfo.title = `${obj.breed} ${obj.species}`;
                animalInfo.color = obj.color;
                animalInfo.weight = obj.weight;
                animalInfo.price = obj.price;
                animalInfo.gender = obj.gender;
                animalInfo.life = obj.life;
            }
        });

        const parentContainer = document.querySelector('#modal');
        let modalContent = '';
        modalContent += `<div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">${animalInfo.title}</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
       <span>Color: ${animalInfo.color}</span><hr>
       <span>Weight: ${animalInfo.weight} g</span><hr>
       <span>Gender: ${animalInfo.gender}</span><hr>
       <span>Life expectancy: ${animalInfo.life} years</span>
      </section>
    </div>
  </div>`;
        parentContainer.innerHTML += (modalContent);

        let closeButton = document.querySelector('.delete');
        closeButton.addEventListener('click', () => {
            this.view.deleteCards(parentContainer);
        });
    }

}
