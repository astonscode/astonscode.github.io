const charArray = {
  char100: {
    name: `Endorius`,
    src: `./src/img/endorius-ts-c.png`,
    age: `35`,
    race: `Demi-God/Human`,
    alignment: `Rakkshas Empire`,
    backstory: `Born in an ice cap, he was trained to be one of the greatest across the realms. He won many tournaments and has fought and beaten many opponents. He soon got bored and left home to start anew. He then ended up at Enwor.
    During his time there, he met Rakkshas and quickly became friends with him, along with Atticus and Sionnach. In battle, he unlocked his secrets to godhood and learned how to use his god abilities. Endorius then, after teaming up with Rakkshas, would eventually join his army and create his own empire.`,
    commandment: `Water and Fire Manipulation`,
    weakness: `Liquid High Grade Zirconium (-30•C)`,
    allies: `Rakkshas/Atticus`,
    enemies: `Volcatius, Forces of Eldes`
  },

  char200: {
    name: `Rakkshas`,
    src: `./src/img/rakkashas-ts-c.png`,
    age: `23`,
    race: `Demon / Human`,
    alignment: `Rakkshas Empire`,
    backstory: `He was born half-demon half-angel. However due to the amount of a threat this could be if his power ever got out of control he was split into two beings at birth one who was kind and caring and another who was cold and ruthless. Rakshas being the latter was taken away into the demon realm to be as far away from his other half as he could be. However in the demon realm he was shunned and despised wich only further had him look out for himself with no regard for others. Until eventually he found a father figure in the underworld who would teach him some demon things like how to shadow step and the basics of dark creation. 
    Along with this stuff, he would educate him in things like battle tactics and underworld lore. Life was great for a while until the demon god Bahamut cane. You see what happened was the old demon owed the Bahumut a payment which was to bring him the dead body of someone close to him however the old demon couldn't kill someone close to him. So the demon God took his life when Rakkshas saw this he was enraged and would go to attack Bahamut but he would simply command Rakkshas to kneel wich he would be forced to do. And as Bahumut had him kneel he beat him half to death giving him the scars he has today. After it was done Bahumut left Rakkshas alive and told him one simple thing "Only come back to me when you can beat me". 
    So for the next 11 years of his life, he trained to the point where he even unlocked the dark flames and a new form of his own. Though to this day, Rakkshas still train to beat the god.
`,
    commandment: `Dark Manipulation`,
    weakness: `Dark Form (Cooldown: 5h)`,
    allies: `Rakkain`,
    enemies: `The Demon God, Malakas`
  },

  char300: {
    name: `Conal`,
    src: ``,
    age: ``,
    race: ``,
    alignment: ``,
    backstory: ``,
    commandment: ``,
    weakness: ``,
    allies: ``,
    enemies: ``
  },

  char400: {
    name: `Fern`,
    src: ``,
    age: ``,
    race: ``,
    alignment: ``,
    backstory: ``,
    commandment: ``,
    weakness: ``,
    allies: ``,
    enemies: ``
  },

  char500: {
    name: `Ezras`,
    src: ``,
    age: ``,
    race: ``,
    alignment: ``,
    backstory: ``,
    commandment: ``,
    weakness: ``,
    allies: ``,
    enemies: ``
  }
}

function listChar (code) {
  if (code == 1) {
    console.log(
      '%cCHAR INFO',
      'background: #b656ff; border-radius: 4px 0; padding: 4px; color: #fff',
      `Listing Character for ID ${code}: ${charArray.char100.name}`
    )
    return charArray.char100
  } else if (code == 2) {
    console.log(
      '%cCHAR INFO',
      'background: #b656ff; border-radius: 4px 0; padding: 4px; color: #fff',
      `Listing Character for ID ${code}: ${charArray.char200.name}`
    )
    return charArray.char200
  } else if (code == 3) {
    console.log(
      '%cCHAR INFO',
      'background: #b656ff; border-radius: 4px 0; padding: 4px; color: #fff',
      `Listing Character for ID ${code}: ${charArray.char300.name}`
    )
    return charArray.char300
  } else if (code == 4) {
    console.log(
      '%cCHAR INFO',
      'background: #b656ff; border-radius: 4px 0; padding: 4px; color: #fff',
      `Listing Character for ID ${code}: ${charArray.char400.name}`
    )
    return charArray.char400
  } else if (code == 5) {
    console.log(
      '%cCHAR INFO',
      'background: #b656ff; border-radius: 4px 0; padding: 4px; color: #fff',
      `Listing Character for ID ${code}: ${charArray.char500.name}`
    )
    return charArray.char500
  } else {
    console.log(
      '%cCHAR INFO',
      'background: #b656ff; border-radius: 4px 0; padding: 4px; color: #fff',
      `Invalid Character ID.`
    )
  }
}
