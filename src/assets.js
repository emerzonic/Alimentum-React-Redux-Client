//Images object required from the "img" folder
const assets = {
  category: {
    cat1: {
      image: require('./images/vege.jpg'),
      category: "Vegetarian"
    },
    cat2: {
      image: require('./images/breakfast.jpg'),
      category: "Breakfast"
    },
    cat3: {
      image: require('./images/chicken.jpg'),
      category: "Chicken"
    },
    cat4: {
      image: require('./images/desert.jpg'),
      category: "Desert"
    },
    cat5: {
      image: require('./images/lamb.jpg'),
      category: "Lamb"
    },
    cat6: {
      image: require('./images/pasta.jpg'),
      category: "Pasta"
    },
    cat7: {
      image: require('./images/pork.jpg'),
      category: "Pork"
    },
    cat8: {
      image: require('./images/seafood.jpg'),
      category: "Seafood"
    },
    cat9: {
      image: require('./images/side.jpg'),
      category: "Side"
    },
    cat10: {
      image: require('./images/starter.jpg'),
      category: "Starter"
    },
    cat11: {
      image: require('./images/vegan.jpg'),
      category: "Vegan"
    },
    cat12: {
      image: require('./images/beef.jpg'),
      category: "Beef"
    }
  },
  headerImg: {
    header: require('./images/headerImg.png')
  },
  errorImg: {
    error: require('./images/error2.gif')
  },
  youtube: {
    img: require('./images/youtube.png')
  },
  homeCardsObj: {
    card1: {
      image: require('./images/beef.jpg'),
      text: "Categories",
      icon:"fas fa-list-alt home-page-icons",
      url:"/categories"
    },
    card2: {
      image: require('./images/breakfast.jpg'),
      text: "Favorites",
      icon:"far fa-star home-page-icons",
      url:"/user/favorites"
    },
    card3: {
      image: require('./images/chicken.jpg'),
      text: "Login or Sign Up",
      icon:"fas fa-lock-open home-page-icons",
      url:"/user/login"
    },
    card4: {
      image: require('./images/desert.jpg'),
      text: "Search Recipes",
      icon:"fas fa-search home-page-icons",
      url:"/categories"
    },
  },


}

export default assets;