<template>
  <div id="app" class="grid grid-cols-3 gap-3">
    <div class="row-span-6">
      <ul class="relative bg-slate-500">
        <h1 class="flex justify-center text-4xl" @click="homePage()">
          Restaurang
        </h1>
        <br /><br />
        <li class="relative ml-5 bg-white">
          <a
            class="flex text-2xl cursor-pointer hover:bg-sky-700"
            @click="kidView()"
            >Barn🧒</a
          >
        </li>
        <li class="relative ml-5">
          <a
            class="flex text-2xl cursor-pointer hover:bg-sky-700"
            @click="adultView()"
            >Vuxen🤷‍♂️</a
          >
        </li>
        <li class="relative ml-5 bg-white">
          <a
            class="flex text-2xl cursor-pointer hover:bg-sky-700"
            @click="coupleView()"
            >Par💑</a
          >
        </li>
        <li>
          <div class="flex text-2xl justify-center">
            Antal maträtter: {{ orders.length }}
          </div>
        </li>
        <li>Total pris: {{ calculatedTotal }}:-</li>

        <li>
          <div class="pl-2" v-for="(item, index) in orders">
            {{ item.dish }}
            <button class="bg-white m-2 hover:bg-sky-700 rounded border-black"
              @click="removeItem(index)">
              Ta bort
            </button>
          </div>
        </li>
      </ul>
    </div>

    <!-- Homepage -->
    <div v-if="isHomePage" class="col-span-2">
      <img class="img-thumbnail" src="@/images/adultmenu.jpg" />
    </div>

    <!-- kid dishes -->
    <div v-if="isVisibleKid" class="bg-lime-300 pl-2">
      <h1 class="text-2xl font-bold">Förrätter</h1>
      <menu-items
        class="flex justify-start"
        v-on:orderprice="showPrice"
        v-for="items in dishStarterKid"
        v-bind:dish="items.dishes"
        v-bind:img="items.imgsrc"
        v-bind:content="items.ingredients"
        v-bind:price="items.price"
      ></menu-items>
      <h1 class="text-2xl font-bold">Huvudrätter</h1>
      <menu-items
        class="flex justify-start"
        v-on:orderprice="showPrice"
        v-for="items in dishMainKid"
        v-bind:dish="items.dishes"
        v-bind:img="items.imgsrc"
        v-bind:content="items.ingredients"
        v-bind:price="items.price"
      ></menu-items>
      <h1 class="text-2xl font-bold">Efterrätter</h1>
      <menu-items
        class="flex justify-start"
        v-on:orderprice="showPrice"
        v-for="items in dishDesertKid"
        v-bind:dish="items.dishes"
        v-bind:img="items.imgsrc"
        v-bind:content="items.ingredients"
        v-bind:price="items.price"
      ></menu-items>
    </div>

    <!-- Adult dishes -->
    <div v-if="isVisibleAdult" class="bg-gray-200 pl-2">
      <h1 class="text-2xl font-bold">Förrätter</h1>
      <menu-items
        class="flex justify-center w-60"
        v-on:orderprice="showPrice"
        v-for="items in dishStarterAdult"
        v-bind:dish="items.dishes"
        v-bind:img="items.imgsrc"
        v-bind:content="items.ingredients"
        v-bind:price="items.price"
      ></menu-items>
      <h1 class="text-2xl font-bold">Huvudrätter</h1>
      <menu-items
        class="flex justify-center w-60"
        v-on:orderprice="showPrice"
        v-for="items in dishMainAdult"
        v-bind:dish="items.dishes"
        v-bind:img="items.imgsrc"
        v-bind:content="items.ingredients"
        v-bind:price="items.price"
      ></menu-items>
      <h1 class="text-2xl font-bold">Efterrätter</h1>
      <menu-items
        class="flex justify-center w-60"
        v-on:orderprice="showPrice"
        v-for="items in dishDesertAdult"
        v-bind:dish="items.dishes"
        v-bind:img="items.imgsrc"
        v-bind:content="items.ingredients"
        v-bind:price="items.price"
      ></menu-items>
    </div>

    <!-- Couple dishes -->
    <div v-if="isVisibleCouple" class="bg-pink-300 pl-2">
      <h1 class="text-2xl font-bold">Förrätter</h1>
      <menu-items
        class="flex justify-center w-60"
        v-on:orderprice="showPrice"
        v-for="items in dishStarterCouple"
        v-bind:dish="items.dishes"
        v-bind:img="items.imgsrc"
        v-bind:content="items.ingredients"
        v-bind:price="items.price"
      ></menu-items>
      <h1 class="text-2xl font-bold">Huvudrätter</h1>
      <menu-items
        class="flex justify-center w-60"
        v-on:orderprice="showPrice"
        v-for="items in dishMainCouple"
        v-bind:dish="items.dishes"
        v-bind:img="items.imgsrc"
        v-bind:content="items.ingredients"
        v-bind:price="items.price"
      ></menu-items>
      <h1 class="text-2xl font-bold">Efterrätter</h1>
      <menu-items
        class="flex justify-center w-60"
        v-on:orderprice="showPrice"
        v-for="items in dishDesertCouple"
        v-bind:dish="items.dishes"
        v-bind:img="items.imgsrc"
        v-bind:content="items.ingredients"
        v-bind:price="items.price"
      ></menu-items>
    </div>
    <!-- kid bg -->
    <img
      class="img-thumbnail"
      src="@/images/kidsmenu.jpg"
      v-if="isVisibleKid"
    />

    <!-- Adult bg -->
    <img
      class="img-thumbnail"
      src="@/images/adultmenu.jpg"
      v-if="isVisibleAdult"
    />

    <!-- Couple bg -->
    <img
      class="img-thumbnail"
      src="@/images/romanticmenu.jpg"
      v-if="isVisibleCouple"
    />

    <footer class="col-span-4 flex justify-center bg-slate-500">
      <div>
        <p>Adress:</p>
        <p>Motala Camping Resturang</p>
        <p>59 126 Motala</p>
      </div>
    </footer>
  </div>
</template>

<script>
import menuItems from "@/components/menuItems.vue";

export default {
  components: {
    menuItems,
  },
  data() {
    return {
      orders: [],

      isHomePage: true,
      isVisibleKid: false,
      isVisibleAdult: false,
      isVisibleCouple: false,

      dishStarterKid: [
        {
          dishes: "Fruktspett",
          price: 40,
          ingredients: "Frukter",
          imgsrc: "@/images/wang1.jpg",
        },
        {
          dishes: "Skinkrulle",
          price: 30,
          ingredients: "Tunnbröd,Skinka",
          imgsrc: "@/images/wang1.jpg",
        },
        {
          dishes: "Gurksuprise",
          price: 20,
          ingredients: "Gurka, Suprise",
          imgsrc: "@/images/wang1.jpg",
        },
        {
          dishes: "Nachos",
          price: 140,
          ingredients: "Nachochips, ost, köttfärs",
          imgsrc: "@/images/wang1.jpg",
        },
      ],

      dishMainKid: [
        {
          dishes: "Hamburgare",
          price: 90,
          ingredients: "Bröd, kött, ketchup, ost",
          imgsrc: "@/images/wang1.jpg",
        },
        {
          dishes: "Pannkaka",
          price: 60,
          ingredients: "Pannkaka, sylt, grädde",
          imgsrc: "@/images/wang1.jpg",
        },
        {
          dishes: "Köttbullar",
          price: 60,
          ingredients: "Köttbullar, mos",
          imgsrc: "@/images/wang1.jpg",
        },
      ],

      dishDesertKid: [
        {
          dishes: "Bananpannkaksspett",
          price: 90,
          ingredients: "Banan,pannkaka,jordgubbar",
          imgsrc: "@/images/wang1.jpg",
        },
        {
          dishes: "Glasyrtårta",
          price: 60,
          ingredients: "Tårtbotten, sylt, grädde, glasyr",
          imgsrc: "@/images/wang1.jpg",
        },
        {
          dishes: "Vaniljglass",
          price: 60,
          ingredients: "Vaniljglass, Jordgubbar, marräng",
          imgsrc: "@/images/wang1.jpg",
        },
        {
          dishes: "Prinsesstårta",
          price: 60,
          ingredients: "Marispan, Grädde, sylt, tårtbotten",
          imgsrc: "@/images/wang1.jpg",
        },
      ],

      dishStarterAdult: [
        {
          dishes: "Toastskagen",
          price: 60,
          ingredients:
            "Räkor, rödlök,dill, creme fraiche, vitt bröd och kärlek",
          imgsrc: "@/images/forattvuxen2.jpg",
        },
        {
          dishes: "Räktårta",
          price: 30,
          ingredients: "Räkor, rödlök,dill, creme fraiche",
          imgsrc: "@/images/forattvuxen3.jpg",
        },
        {
          dishes: "Skaldjurssoppa",
          price: 20,
          ingredients: "Skaldjur, dill, fiskrom",
          imgsrc: "@/images/forattvuxen4.jpg",
        },
      ],

      dishMainAdult: [
        {
          dishes: "Fläskfile med ungsbakad potatis",
          price: 90,
          ingredients: "Fläskfile, potatis",
          imgsrc: "@/images/matvuxen1.jpg",
        },
        {
          dishes: "Hamburgare på högrev",
          price: 60,
          ingredients: "Högrevsfärs, ost, lök, bröd",
          imgsrc: "@/images/matvuxen2.jpeg",
        },
        {
          dishes: "Lax med coscos",
          price: 50,
          ingredients: "Lax, coscos, avokado",
          imgsrc: "@/images/matvuxen3.jpg",
        },
      ],

      dishDesertAdult: [
        {
          dishes: "Choklad cocktail ",
          price: 100,
          ingredients: "Choklad, tranbär, blåbär",
          imgsrc: "@/images/efterrattvuxen1.jpg",
        },
        {
          dishes: "Glassfat",
          price: 60,
          ingredients: "Vaniljglass, chokladglass, hallonglass",
          imgsrc: "@/images/efterrattvuxen2.jpg",
        },
        {
          dishes: "Hjärtglass",
          price: 60,
          ingredients: "Vaniljglass, Jordgubbsglass, bär",
          imgsrc: "@/images/efterrattvuxen3.jpg",
        },
        {
          dishes: "Oreo-kardimumaglass",
          price: 60,
          ingredients: "Oreo, grädde, Chokladglass, colasås, kardimuma",
          imgsrc: "@/images/efterrattvuxen4.jpg",
        },
      ],

      dishStarterCouple: [
        {
          dishes: "Toastskagen",
          price: 60,
          ingredients:
            "Räkor, rödlök,dill, creme fraiche, vitt bröd och kärlek",
          imgsrc: "@/images/forrattpar3.jpg",
        },
        {
          dishes: "Skaldjurspasta",
          price: 60,
          ingredients: "Krabbkött, skaldjursmix,gul lök, dragon, olika kryddor",
          imgsrc: "@/images/forattpar2.png",
        },
        {
          dishes: "Grillad grön sparris med burrata",
          price: 60,
          ingredients: "burrata, sesamfrön, sparris,japansk soja",
          imgsrc: "@/images/forrattpar4.jpg",
        },
      ],

      dishMainCouple: [
        {
          dishes: "Romantiska köttbullar och spaghetti",
          price: 120,
          ingredients: "Köttbullar med spaghetti",
          imgsrc: "@/images/matpar1.jpg",
        },
        {
          dishes: "Laxfilé med duchessepotatis",
          price: 90,
          ingredients: "Laxfilé, duchessepotatis, gräslöksås, sparris",
          imgsrc: "@/images/matpar2.jpg",
        },
        {
          dishes: "Oxfilé med gremolata och potatisgratäng",
          price: 60,
          ingredients: "Oxfilé, potatis, basilika, persilja, olika kryddor",
          imgsrc: "@/images/matpar3.jpg",
        },
        {
          dishes: "Kycklinggryta med sötsur sås",
          price: 60,
          ingredients: "Kycklingfilé, jasminris, lök, morötter, gul lök",
          imgsrc: "@/images/matpar4.jpg",
        },
      ],

      dishDesertCouple: [
        {
          dishes: "Isig rosa fruktsmoothie",
          price: 100,
          imgsrc: "@/images/efterrattpar1.jpg",
        },
        {
          dishes: "Jordgubbskaka med gelé och härliga bär",
          price: 100,
          imgsrc: "@/images/efterrattpar2.jpg",
        },
        {
          dishes: "Vaniljglass",
          price: 60,
          ingredients: "Vaniljglass, Jordgubbar, marräng",
          imgsrc: "@/images/efterrattpar3.jpg",
        },
        {
          dishes: "Romantisk igelkottstårta",
          price: 100,
          imgsrc: "@/images/efterrattpar4.jpg",
        },
      ],
    };
  },

  methods: {
    showPrice(price, dish) {
      let order = {
        price: price,
        dish: dish,
      };
      this.orders.push(order);
      console.log(order);
    },

    removeItem(index) {
      this.orders.splice(index, 1);
    },

    homePage() {
      if (this.isHomePage == true) {
        this.isHomePage = true;
      } else {
        this.isHomePage = true;
        this.isVisibleKid = false;
        this.isVisibleAdult = false;
        this.isVisibleCouple = false;
      }
    },
    kidView() {
      if (this.isVisibleKid == true) {
        this.isVisibleKid = false;
        this.isHomePage = true;
      } else {
        this.isVisibleKid = true;
        this.isVisibleAdult = false;
        this.isVisibleCouple = false;
        this.isHomePage = false;
      }
    },

    adultView() {
      if (this.isVisibleAdult == true) {
        this.isVisibleAdult = false;
        this.isHomePage = true;
      } else {
        this.isVisibleAdult = true;
        this.isVisibleKid = false;
        this.isVisibleCouple = false;
        this.isHomePage = false;
      }
    },

    coupleView() {
      if (this.isVisibleCouple == true) {
        this.isVisibleCouple = false;
        this.isHomePage = true;
      } else {
        this.isVisibleCouple = true;
        this.isVisibleKid = false;
        this.isVisibleAdult = false;
        this.isHomePage = false;
      }
    },
  },

  computed: {
    calculatedTotal() {
      return this.orders.reduce(function (result, order) {
        return result + order.price;
      }, 0);
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  max-height: 300px;
  max-width: 600px;
  border-radius: 50%;
}
</style>
