export default class View {

  constructor(contr) {
    this.contr = contr;
  }

  render(data) {
      this.deleteCards();
      data.forEach((el) => {
          this.buildCard(el, this.contr);
      });
  }

  deleteCards(parentContainer = document.querySelector('#container')) {
      while (parentContainer.hasChildNodes()) {
          parentContainer.removeChild(parentContainer.firstChild);
      }
  }

  buildCard(el) {
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
      container.querySelector('.btn_buy').addEventListener('click', this.contr.addToCart.bind(this.contr, el));
      container.querySelector('.btn_info').addEventListener('click', this.contr.showInfo.bind(this.contr, el));

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
      if ((typeof cart) == 'string' || (typeof cart) == 'undefined') {
        cart+='empty'
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

      cont += `<tr><td>Total</td> <td>${total} ₴</td></tr>
     <tr> <td><button class="button is-success checkout">Check Out</button></td>
      <td><button class="button emptycart">Empty cart</button></td>
    </tr></table>`

      modalContent += `${cont}</div>
 <button class="modal-close is-large" aria-label="close"></button>
 </div>`;
      parentContainer.innerHTML = modalContent;

      //вынести в отдельную функцию
      parentContainer.querySelector('.modal-close').addEventListener('click', () => (
          this.deleteCards(parentContainer)
      ));
      
        parentContainer.querySelector('.emptycart').addEventListener('click', this.contr.emptyCart.bind(this.contr));


      document.querySelector('.checkout').addEventListener('click', ()=>{
        this.deleteCards(parentContainer);
        let modalForm = `<div class="modal  is-active">
        <div class="modal-background"></div>
        <div class="modal-content box"> 

        <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Name">
        </div>
      </div>

            <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input " type="email" placeholder="Email" >
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>


      <div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-text">Cancel</button>
  </div>
</div>
</div> 
<button class="modal-close is-large" aria-label="close"></button></div>
      `;
      parentContainer.innerHTML+=modalForm;
      });
  }

  closeModal(container) {

  }

  
}
