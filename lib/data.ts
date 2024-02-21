import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Alma',
      email: 'admin@example.com',
      password: bcrypt.hashSync('wdd430'),
      isAdmin: true,
    },
    {
      name: 'Sofia',
      email: 'user@example.com',
      password: bcrypt.hashSync('wdd430'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Mario Kart',
      slug: 'mario-kart',
      category: 'Racing',
      image: '/images/mario-kart.jpg',
      price: 20,
      brand: 'Nintendo',
      rating: 4.5,
      numReviews: 4,
      countInStock: 7,
      description:
        'Mario Kart is a beloved racing video game series developed by Nintendo. Players choose iconic characters from the Mario universe and race against each other on whimsical tracks filled with obstacles, power-ups, and shortcuts.',
      isFeatured: true,
    },
    {
      name: 'Call of Duty: Black Ops',
      slug: 'call-of-duty-black-ops',
      category: 'Shooters',
      image: '/images/callofduty.jpg',
      price: 18.99,
      brand: 'Activision',
      rating: 4,
      numReviews: 4,
      countInStock: 10,
      description:
        'Call of Duty: Black Ops is a popular first-person shooter video game franchise developed by Treyarch and published by Activision. Set in various historical and fictional conflicts, Black Ops features intense single-player campaigns, gripping multiplayer modes, and engaging cooperative gameplay.',
      isFeatured: true,
      banner: 'images/slide2.webp',
    },
    {
      name: 'League of Legends',
      slug: 'league-of-legends',
      category: 'MOBA',
      image: '/images/leagueoflegends.jpg',
      price: 19,
      brand: 'Riot Games',
      rating: 4.5,
      numReviews: 9,
      countInStock: 12,
      description:
        'League of Legends (LoL) is a highly popular multiplayer online battle arena (MOBA) game developed and published by Riot Games. In League of Legends, players assume the role of unique champions with distinct abilities and engage in strategic team-based battles on a variety of maps.',
      isFeatured: true,
      banner: 'images/slide1.jpg',
    },
    {
      name: 'Elden Ring',
      slug: 'elden-ring',
      category: 'Action',
      image: '/images/eldenring.jpg',
      price: 20,
      brand: 'FromSoftware',
      rating: 4.5,
      numReviews: 4,
      countInStock: 7,
      description:
        'Elden Ring is an action role-playing game developed by FromSoftware, known for their work on the Dark Souls series and Bloodborne. Created in collaboration with George R. R. Martin, Elden Ring promises a vast open-world experience filled with intricate lore, challenging gameplay, and dark fantasy elements.',
    },
    {
      name: 'Minecraft',
      slug: 'minecraft',
      category: 'Survival',
      image: '/images/minecraft.jpg',
      price: 15,
      brand: 'Mojang Studios',
      rating: 4.5,
      numReviews: 4,
      countInStock: 7,
      description:
        'Minecraft is a sandbox video game created by Markus Persson and later developed by Mojang Studios. It allows players to explore a blocky, procedurally-generated 3D world with infinite terrain, discovering and extracting raw materials, crafting tools and items, and building structures or earthworks.',
    },
    {
      name: 'World Of Warcraft',
      slug: 'world-of-warcraft',
      category: 'MMORPG',
      image: '/images/worldofwarcraft.jpg',
      price: 17,
      brand: 'Blizzard',
      rating: 4.5,
      numReviews: 4,
      countInStock: 7,
      description:
        'World of Warcraft (WoW) is a massively multiplayer online role-playing game (MMORPG) developed by Blizzard Entertainment. Set in the fantasy world of Azeroth, WoW allows players to create characters from various races and classes, embark on quests, explore vast landscapes, and interact with thousands of other players from around the globe.',
    },
  ],
}

export default data
