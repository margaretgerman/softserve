export default class View {

  render(data, contr) {
      this.deleteCards();
      data.forEach((el) => {
          this.buildCard(el, contr);
      });
  }

  deleteCards(parentContainer = document.querySelector('#container')) {
      while (parentContainer.hasChildNodes()) {
          parentContainer.removeChild(parentContainer.firstChild);
      }
  }

  buildCard(el, contr) {
      const parentContainer = document.querySelector('#container');
      let container = document.createElement('div');
      container.classList.add('box', 'column', 'is-one-quarter', 'is-3');

      let result = '';
      result = `<article class="media">
                <div class="media-left">
                    <figure class="image is-128x128">
                      <img src=${el.pic} alt="Image">
                    </figure>
                 </div>
            <div class="media-content">
              <div class="content">
                <strong> ${el.breed.toUpperCase()} ${el.species.toUpperCase()}</strong> 
                <hr>
                <p>Color: ${el.color}</p>
                <p>Price: ${el.price} ₴</p>
              </div>
              <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item btn_buy" data-name="${el.id}">
                  <span class="icon is-medium " >
                  <i class="fas fa-cart-plus"></i></span>
                </a>
                <a class="level-item btn_fav" data-name="${el.id}">
                  <span class="icon is-medium " >
                  <i class="fas  fa-star"></i></span>
                </a>
                <a class="level-item btn_info" data-name="${el.id}">
                  <span class="icon is-medium " >
                  <i class="fas  fa-info"></i></span>
                </a>
              </div>
              </nav>
             </div>
            </article>
         `;

      container.innerHTML += result;
      container.querySelector('.btn_buy').addEventListener('click', contr.addToCart.bind(contr, el));
      container.querySelector('.btn_info').addEventListener('click', contr.showInfo.bind(contr, el));

      parentContainer.appendChild(container);
  }

  showCart(cart) {
      const ls = JSON.parse(localStorage.getItem('data'));

      const parentContainer = document.querySelector('#modal');
      let modalContent = "",
          total = 0;
      modalContent += `<div class="modal  is-active">
 <div class="modal-background"></div>
 <div class="modal-content box"> `;

      let cont = `<table class = 'table is-striped is-fullwidth'>
          <tr> <th>Name</th> <th>Price</th> </tr>`;
      if ((typeof cart) == 'string') {
          cont = cart;
      } else {
          cart.map(item => {
              let animalInfo = {};
              ls.map(obj => {
                  if (obj.id == item) {
                      animalInfo.title = `${obj.breed} ${obj.species}`;
                      animalInfo.price = obj.price;
                  }
              });
              cont += `<tr>
        <td>${animalInfo.title.toUpperCase()}</td> <td>${animalInfo.price} </td>
      </tr>`;
              total += animalInfo.price;
          });
      }

      cont += `<td>Total</td> <td>${total} ₴</td>
              </table>`

      modalContent += `${cont}</div>
 <button class="modal-close is-large" aria-label="close"></button>
 </div>`;
      parentContainer.innerHTML = modalContent;

      let closeButton = document.querySelector('.modal-close');
      closeButton.addEventListener('click', () => (
          this.deleteCards(parentContainer)
      ));
  }
}