const myperson = new URLSearchParams(window.location.search).get("p");

const people = {
  PB: {
    checked: true,
    name: "Prakhar Bhaiya",
    colors: ["#4DA5F3", "#065FAE"],
    emojis: ["📱", "🎮", "💻", "🧑‍💻"],
    awards: [
      "World's Best Java Coder",
      "World's Best Gamer",
      "World's Most Independent Man",
    ],
    font: "Fragment Mono",
  },
  PD: {
    checked: true,
    name: "Priyanshi Didi",
    colors: ["#BE88EC", "#7E53E6"],
    emojis: ["🎨", "💃", "👗", "👛", "👠"],
    awards: [
      "World's Best Indian Dancer",
      "World's Best Tennis Player",
      "World's Coolest Vegetarian",
    ],
    font: "Lobster",
  },
  MG: {
    checked: true,
    name: "Mausaji",
    colors: ["#03D92D", "#01881C"],
    emojis: ["✈️", "🥐", "🍴", "🍽️", "😋"],
    awards: [
      "World's Best Meta Employee",
      "World's Most Enthusiastic Traveler",
      "World's Best Uncle",
    ],
    font: "Fragment Mono",
  },
  RM: {
    checked: true,
    name: "Rupal Mausi",
    colors: ["#4DA5F3", "#065FAE"],
    emojis: ["✈️", "🥐", "🍴", "🍽️", "😋"],
    awards: [
      "World's Most Spicy Cook",
      "World's Best Auntie",
      "Most Hardcore Food Enthusiast",
    ],
    font: "Lobster",
  },
  MM: {
    checked: true,
    name: "Minnie Maasi",
    colors: ["#7a1c34", "#6e011d"],
    emojis: ["👗", "👛", "👠", "🪞"],
    awards: [
      "World's Best Auntie",
      "World's Best Phone Partner",
      "World's Most Photogenic Person",
    ],
    font: "Lobster",
  },
  SM: {
    checked: true,
    name: "Sunil Mausa",
    colors: ["#4DA5F3", "#065FAE"],
    emojis: ["🎂", "🎈", "💻", "🧑‍💻", "🎁"],
    awards: [
      "Owner of the World's Coolest Birthday",
      "World's Best Macy's Employee",
      "World's Most Hospitable Man",
    ],
    font: "Fragment Mono",
  },
  MA: {
    checked: true,
    name: "Mommy",
    colors: ["#7a1c34", "#6e011d"],
    emojis: ["🧑‍🍳", "☕", "🤶", "♈", "♋", "♌", "♍"],
    awards: [
      "World's Best Chai Maker",
      "World's Best Stay-at-Home Mother",
      "World's Best Homeschool Parent",
    ],
    font: "Lobster",
  },
  DA: {
    checked: false,
    name: "Daddy",
    colors: ["#7a1c34", "#6e011d"],
    emojis: ["💻", "🧑‍💻", "☕", "🚗", "🔊"],
    awards: [
      "World's Best Dad",
      "World's Best Money Saver",
      "World's Best Hot Chocolate Maker",
    ],
    font: "Fragment Mono",
  },
};
const person = people[myperson.toUpperCase()];
const personalize = () => {
  // update --gradient, and --font
  document.documentElement.style.setProperty(
    "--gradient",
    `linear-gradient(90deg, ${person.colors[0]} 0%, white 50%, ${person.colors[1]} 100%)`,
  );
  document.documentElement.style.setProperty(
    "--font",
    `"${person.font}", sans-serif`,
  );
  document.querySelector(".name").innerHTML = person.name;
};
if (person !== null) personalize();

const newStar = (i) => {
  return {
    id: i,
    time: 1000 * Math.random() * 2 + 1000,
    init: function () {
      const x = Math.random();
      setTimeout(() => {
        var element = document.createElement("div");
        element.id = `star${this.id}`;
        element.className = "star";
        element.style.animation = `twinkle ${this.time}ms infinite`;
        document.getElementById("background").appendChild(element);
        this.updateTimeout(x);
      }, x * 1000);
    },
    updateTimeout: function (x) {
      var element = document.getElementById(`star${this.id}`);
      element.style.left = `${x * 100}vw`;
      element.style.top = `${Math.random() * 200}vh`;
      setTimeout(() => this.updateTimeout(x), this.time);
    },
  };
};
const spawnStars = (n) => {
  Array.from({ length: n }, (_, i) => newStar(i).init());
};
spawnStars(300);
