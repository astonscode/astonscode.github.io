const userTitles = [
  {
    title: "Hunted",
    rarity: "uncommon",
    description: "Reach Level 30",
  },
  {
    title: "Hunter",
    rarity: "uncommon",
    description: "Reach Level 50",
  },
  {
    title: "Marksman",
    rarity: "uncommon",
    description: "Reach Level 80",
  },
  {
    title: "Deadshot",
    rarity: "uncommon",
    description: "Reach Level 100",
  },
  {
    title: "Reactive",
    rarity: "rare",
    description: "Reach Level 150",
  },
  {
    title: "Lightspeed",
    rarity: "rare",
    description: "Reach Level 200",
  },
  {
    title: "Hyperspeed",
    rarity: "rare",
    description: "Reach Level 250",
  },
  {
    title: "Godspeed",
    rarity: "rare",
    description: "Reach Level 300",
  },
  {
    title: "Inevitable",
    rarity: "epic",
    description: "Reach Level 350",
  },
  {
    title: "Ultraviolet",
    rarity: "epic",
    description: "Reach Level 400",
  },
  {
    title: "Velocitas",
    rarity: "epic",
    description: "Reach Level 450",
  },
  {
    title: "Legend of Keycode",
    rarity: "mythical",
    description: "Reach Level 500",
  },
  {
    title: "Keycode Ascendant",
    rarity: "mythical",
    description: "Reach Max Level",
  },
  {
    title: "Enhanced",
    rarity: "uncommon",
    description: "Unlock an Enhancement",
  },
  {
    title: "Season 1 Keycode Semi-Finalist",
    rarity: "unobtainable",
    description:
      "Compete in the Semi-Finals of the Keycode Tournament in 2022.",
  },
  {
    title: "Season 1 Keycode Finalist",
    rarity: "unobtainable",
    description: "Compete in the Finals of the Keycode Tournament in 2022.",
  },
  {
    title: "Season 1 Keycode Champion",
    rarity: "unobtainable",
    description: "Finish as the Champion of the Keycode Tournament in 2022.",
  },
  {
    title: "hi",
    rarity: "mythical",
    description: "hello",
  },
];

class titleInv {
  constructor() {
    this.bodyElm = document.getElementById(`titlesWindow`);
    this.titleList = document.querySelector(`.titlesList`);
    this.bodyTitleBar = document.querySelector(`.titleWindowTitle`);
    this.genTitle();
    this.genTitles();
  }

  genTitle() {
    this.bodyTitleBar = `Titles`;
  }

  genTitles() {
    for (let i = 0; i < userTitles.length; i++) {
      let elm = userTitles[i];
      this.titleList.innerHTML += `
    <div class='titleItem ${elm.rarity}'>
        <div class='titleName'> ${elm.title} </div>
        <div class='titleDesc'> ${elm.description} </div>
   </div>`;
    }
  }
}

new titleInv();
/* experimental code */

let titleWindow = document.getElementById(`titlesWindow`);
