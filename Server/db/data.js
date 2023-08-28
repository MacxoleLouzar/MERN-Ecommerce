import ProductModel from "../models/ProductModel.js";

const addData = async (req, res) => {
  await addDataToMongo();
  res.json({ message: "Successfully Added Products" });
};

const addDataToMongo = async () => {
  try {
    await ProductModel.insertMany([
      {
        image:
          "https://goedehoop.co.za/wp-content/uploads/2021/09/1U6A8490a-1.jpg",
        name: "2015 Cabernet Sauvignon",
        text: "This elegant Cabernet is packed with sleek dark fruits",
        rating: [5, 5, 3],
        categoryName: "drink",
        price: 249.99,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },

      {
        image:
          "https://cdn.shopify.com/s/files/1/0043/9258/3217/products/HenschkeJuliusRiesling2019_grande.png?v=1624932565",
        name: "2015 riesling",
        text: "Grapes for this wine were sourced from a selection of vineyards in Paarl, Stellenbosch and Durbanville, some nearly 30 years' old",
        rating: [5, 5, 5],
        categoryName: "drink",
        price: 65.95,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },

      {
        image:
          "https://i.guim.co.uk/img/media/0242fc9c8ffc7432a92067bda789850b5c468f6d/0_2070_4722_2831/master/4722.jpg?width=620&quality=45&dpr=2&s=none",
        name: "Creamy Melt",
        text: "Candied Jerusalem artichoes,truffle",
        rating: [2, 5, 5],
        categoryName: "food",
        price: 85.95,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },

      {
        image:
          "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        name: "Maestro",
        text: "Mince, salami, beef flakes, mushroom, olives, onion & garlic",
        rating: [5, 4, 4, 4],
        categoryName: "food",
        price: 159.99,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },
      {
        image:
          "https://media.istockphoto.com/id/1156514947/photo/serving-bbq-pork-ribs-with-chili-sauce-and-lemon-close-up-on-a-slate-board-horizontal.jpg?s=612x612&w=0&k=20&c=2gaAdB5_wbVUaaew4dtRm3L--g9NBxyyfoOd3o2BmNQ=",
        name: "Back Ribs with Lemon",
        text: "grilled meats, while lemon juice balances the flavour of fattier cuts",
        rating: [3],
        categoryName: "food",
        price: 299.99,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },

      {
        image:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "WHOPPER",
        text: "A flame-grilled beef patty, topped with tomatoes, fresh cut lettuce, mayo, pickles, a swirl of ketchup, and sliced onions.",
        rating: [4, 4, 4],
        categoryName: "food",
        price: 99.99,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },
      {
        image:
          "https://cdn.sanity.io/images/czqk28jt/prod_bk_za/08b678f62cf2a1725007524d19881bf80c31a41d-1000x1000.jpg?w=750&q=40&fit=max&auto=format",
        name: "BBQ Pepper",
        text: "2 slices of spicy pepper jack cheese, stacked under flaming jalapenos, juicy tomato, fresh rocket leaves and BBQ sauce.",
        rating: [5, 5, 5, 5],
        categoryName: "food",
        price: 49.99,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },

      {
        image:
          "https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/2019/01/r-product13-1-1.jpg",
        name: "Asian Spicy Chicken",
        text: "sesame oil, finely minced , 2 ginger , finely minced, 1 chilli flakes",
        rating: [4, 3, 3],
        categoryName: "food",
        price: 189.95,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },

      {
        image:
          "https://cdn.statically.io/img/klfoodie.com/f=auto/wp-content/uploads/2021/10/PA080720.jpg",
        name: "Fish as Food",
        text: "Choose from our platters for 2, 3, 4, or more! You get to enjoy all the variety on our menu in meals that were made to share with family and friends.",
        rating: [5],
        categoryName: "food",
        price: 219.95,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },

      {
        image:
          "https://www.busbysbakery.com/wp-content/themes/yootheme/cache/de/Best-bread-for-bruschetta-dec50256.jpeg?ezimgfmt=ng%3Awebp%2Fngcb177%2Frs%3Adevice%2Frscb177-1",
        name: "bruschetta",
        text: `Traditionally in Italy, bruschetta is made by toasting slices of bread called “Pagnotta”`,
        rating: [2, 2],
        categoryName: "food",
        price: 119.95,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },

      {
        image:
          "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad.jpg",
        name: "Greek Salad",
        text: "Sliced cucumbers, tomatoes, red onion",
        rating: [4, 5],
        categoryName: "food",
        price: 99.99,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },

      {
        image:
          "https://winewednesdays.co.za/apsefagl/2016/03/Dark-blue-Merlot-w-cup-18.png",
        name: "2016 Aged Merlot",
        text: "Aromas of sweet, juicy red fruit, vanilla, mocha, and mint.",
        rating: [5, 0, 2],
        categoryName: "drink",
        price: 135.95,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },

      {
        image:
          "https://www.lavernewines.co.za/wp-content/uploads/2018/11/Goedverwacht_Maxim_Chardonnay.png",
        name: "Chardonnay",
        text: "This wine has a beautiful light straw colour. Aromas of ripe peach, grapefruit marmalade, blossoms",
        rating: [2, 5, 5],
        categoryName: "drink",
        price: 356.75,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },

      {
        image:
          "https://www.checkers.co.za/medias/10139769EA-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3w3NzkwM3xpbWFnZS9wbmd8aW1hZ2VzL2g1YS9oYzkvOTYyNzk0NDQ1MjEyNi5wbmd8NTRjMDcxZmQwZjJmNTg4YjZjNmM2NWRiZTBlM2MxODA5MDU2N2UzNDY0OTNjYzA0MzZkYTFlOGU3ZThiNGQ1MA",
        name: "Nederburg Baronne",
        text: "Nederburg's best-selling red blend, but it's also one of the most popular wines in South Africa.",
        rating: [2, 5, 5],
        categoryName: "drink",
        price: 84.99,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },

      {
        image:
          "https://www.namaquawines.com/wp-content/uploads/2018/01/Namaqua-Wines-Sweet-red-scaled.jpg",
        name: "Namaqua Dry Red",
        text: "Namaqua Smooth Dry Red has distinctive berry notes and a dry finish making it the perfect companion to stews and bredies.",
        rating: [2, 5, 5],
        categoryName: "drink",
        price: 44,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },

      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1eMi2lWJedt8K2z0pV9hbeTePZxdj3amqUQ&usqp=CAU",
        name: "Durbanville Hills",
        text: "Allowing it to fully appreciate the fresh fruit flavours of the wine.",
        rating: [2, 5, 5],
        categoryName: "drink",
        price: 105.99,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },

      {
        image:
          "https://cdn.shopify.com/s/files/1/0594/8647/0344/products/HimmelstundNon-AlcoholicAppleCider_1728x.jpg?v=1645798987",
        name: "Himmelstund Apple",
        text: "An alcohol-free cider made with fermented juice of apples and fresh taste of apple.",
        rating: [2, 5, 5],
        categoryName: "drink",
        price: 99.95,
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },
      {
        name: "Annabelle Cuvee.",
        text: "This easy drinking sweet white has upfront tropical fruit aromas with hints of guava, florals and spice.",
        rating: [2, 5, 5],
        categoryName: "drink",
        price: 85.99,
        image:
          "https://kwv.co.za/wp-content/uploads/2020/08/ANNABELLE-CURVE-BLANCHE-SPARKLING-WINE_PACKSHOT_R1-600x600.png",
        images: [
          "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1663408536081-7721bb837ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: [1, 1, 1, 1, 1, 0],
        stock: 20,
        datedAdded: { type: Date, default: Date.now },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
};

export { addData, addDataToMongo };
