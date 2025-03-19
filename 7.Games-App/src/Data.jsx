import witcher from "./images/witcher.jpeg";
import cyberpunk from "./images/cyberpunk.avif";
import fallout from "./images/fallout.avif";
import skyrim from "./images/skyrim.avif";

export const games = [
  {
    id: 1,
    name: "Witcher 3 : Wild Hunt",
    description:
      "The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt. Based on The Witcher series of fantasy novels by Polish author Andrzej Sapkowski, it is the sequel to the 2011 game The Witcher 2: Assassins of Kings.",
    price: 59.99,
    link: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
    image: witcher,
  },
  {
    id: 2,
    name: "Cyberpunk 2077",
    description:
      "Cyberpunk 2077 is a 2020 action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe. Players assume the first-person perspective of a customisable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.",
    price: 59.99,
    link: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
    image: cyberpunk,
  },
  {
    id: 3,
    name: "Fallout 4",
    description:
      "Fallout 4 is a 2015 action role-playing game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fourth main game in the Fallout series and was released worldwide on November 10, 2015, for Microsoft Windows, PlayStation 4 and Xbox One.",
    price: 59.99,
    link: "https://store.steampowered.com/app/377160/Fallout_4/",
    image: fallout,
  },
  {
    id: 4,
    name: "The Elder Scrolls V: Skyrim",
    description:
      "The Elder Scrolls V: Skyrim is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fifth main installment in The Elder Scrolls series, following The Elder Scrolls IV: Oblivion.",
    price: 59.99,
    link: "https://store.steampowered.com/app/72850/The_Elder_Scrolls_V_Skyrim/",
    image: skyrim,
  },
];
