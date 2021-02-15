import enums from './enums'

const newsData = [
  {
    id: 1,
    title: 'Frank Lampard: Chelsea sack manager with Thomas Tuchel expected to replace him',
    imgPath: 'https://res.cloudinary.com/dqo6ulmjx/image/upload/v1611581719/animations/_116337637_gettyimages-1294304758.jpg',
    date: new Date(),
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 2,
    title: 'Lewandowski scores again as Bayern win',
    imgPath: 'https://res.cloudinary.com/dqo6ulmjx/image/upload/v1611581730/animations/_116652847_hi065351423.jpg',
    date: new Date(),
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
    id: 3,
    title: 'Felix and Suarez inspire Atletico as they move seven points clear',
    imgPath: 'https://res.cloudinary.com/dqo6ulmjx/image/upload/v1611581736/animations/_116653924_gettyimages-1230774025.jpg',
    date: new Date(),
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
  },
  {
    id: 4,
    title: 'Who has been your Premier League teams star so far?',
    imgPath: 'https://res.cloudinary.com/dqo6ulmjx/image/upload/v1611581755/animations/_116641778_cavani-son.jpg',
    date: new Date(),
    text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
  },
  {
    id: 5,
    title: 'Celtic and Newcastle not options for Benitez - Balague',
    imgPath: 'https://res.cloudinary.com/dqo6ulmjx/image/upload/v1611581793/animations/_116647626_whatsubject.jpg',
    date: new Date(),
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
  }
]

const matchesData = [
  {
    id: 1,
    status: enums.MatchStatus.Finished,
    homeTeam: "PSV",
    homeTeamScore: 1,
    guestTeamScore: 0,
    guestTeam: "Arsenal",
    description: "1st tour",
    matchType: enums.MatchesTypes.Europe
  },
  {
    id: 2,
    status: enums.MatchStatus.Live,
    homeTeam: "BATE",
    homeTeamScore: 2,
    guestTeamScore: 1,
    guestTeam: "Dinamo Minsk",
    description: "1st tour",
    matchType: enums.MatchesTypes.Belarus
  },
  {
    id: 3,
    status: enums.MatchStatus.Live,
    homeTeam: "FC Gomel",
    homeTeamScore: 0,
    guestTeamScore: 2,
    guestTeam: "Shahter",
    description: "1st tour",
    matchType: enums.MatchesTypes.Belarus
  },
  {
    id: 4,
    status: enums.MatchStatus.Live,
    homeTeam: "FC Belshina",
    homeTeamScore: 0,
    guestTeamScore: 0,
    guestTeam: "Slavia",
    description: "1st tour",
    matchType: enums.MatchesTypes.Belarus
  },
  {
    id: 5,
    status: enums.MatchStatus.Finished,
    homeTeam: "Dinamo Brest",
    homeTeamScore: 0,
    guestTeamScore: 0,
    guestTeam: "Rukh",
    description: "1st tour",
    matchType: enums.MatchesTypes.Belarus
  },
  {
    id: 6,
    status: enums.MatchStatus.Live,
    homeTeam: "PSG",
    homeTeamScore: 0,
    guestTeamScore: 0,
    guestTeam: "Nant",
    description: "1st tour",
    matchType: enums.MatchesTypes.Europe
  },
  {
    id: 7,
    status: enums.MatchStatus.Live,
    homeTeam: "Bavaria",
    homeTeamScore: 0,
    guestTeamScore: 0,
    guestTeam: "Barcelona",
    description: "1st tour",
    matchType: enums.MatchesTypes.Europe
  },
  {
    id: 8,
    status: enums.MatchStatus.Live,
    homeTeam: "Juventus",
    homeTeamScore: 0,
    guestTeamScore: 0,
    guestTeam: "Real",
    description: "1st tour",
    matchType: enums.MatchesTypes.Europe
  },
  {
    id: 9,
    status: enums.MatchStatus.Pending,
    homeTeam: "Fullham",
    homeTeamScore: 0,
    guestTeamScore: 0,
    guestTeam: "Chelsea",
    description: "1st tour",
    matchType: enums.MatchesTypes.England
  },
  {
    id: 10,
    status: enums.MatchStatus.Pending,
    homeTeam: "MU",
    homeTeamScore: 0,
    guestTeamScore: 0,
    guestTeam: "Westham",
    description: "1st tour",
    matchType: enums.MatchesTypes.England
  }
]

const data = {
  newsData,
  matchesData
}

export default data