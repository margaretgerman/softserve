import Controller from "./controller.js";

export default class Storage
{
    static init(){
      this.cT = new Controller();
      this.lang = 'en';
      this.data = [];
      this.vocabulary = {
        "Home": {
        "ua": "Головна",
        "ru": "Главная",
        },
        "Dogs": {
          "ua": "Собаки",
          "ru": "Собаки",
        },
        "Cats": {
          "ua": "Коти",
          "ru": "Коты",
        },
      "Fishes": {
        "ua": "Риби",
        "ru": "Рыбы",
      },
      "Birds": {
        "ua": "Птахи",
        "ru": "Птицы",
      },

      "Log In": {
        "ua": "Увійти",
        "ru": "Войти",
      },

      "Cart": {
        "ua": "Корзина",
        "ru": "Корзина",
      },

      "Favorites": {
        "ua": "Обране",
        "ru": "Избранное",
      },

      "Language": {
        "ua": "Мова",
        "ru": "Язык",
      },

      "gender": {
        "ua": "Стать",
        "ru": "Пол",
      },

      "male": {
        "ua": "Чоловічий",
        "ru": "Мужской",
      },

      "female": {
        "ua": "Жіночий",
        "ru": "Женский",
      },

      "amount": {
        "ua": "кількість",
        "ru": "количество",
      },

      "weight": {
        "ua": "вага",
        "ru": "вес",
      },

      "color": {
        "ua": "Колір",
        "ru": "Цвет",
      },

      "price": {
        "ua": "Ціна",
        "ru": "Цена",
      },

      "black": {
        "ua": "Чорний",
        "ru": "Черный",
      },

      "white": {
        "ua": "Білий",
        "ru": "Белый",
      },

      "yellow": {
        "ua": "Жовтий",
        "ru": "Желтый",
      },

      "purple": {
        "ua": "Фіолетовий",
        "ru": "Фиолетовый",
      },

      "pink": {
        "ua": "Рожевий",
        "ru": "Розовый",
      },

      "fav": {
        "ua": "Обране",
        "ru": "Избранное",
      },

      "buy": {
        "ua": "Купити",
        "ru": "Купить",
      },
};
    }
}