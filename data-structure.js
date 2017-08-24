{
  selectedTab: 'Create'
  cards: [
    {
      question: 'What type of car',
      type: text OR number OR yesno,
      id: 0
      children: [
        {
          condition: equals OR greater than OR less than,
          answer: 'Toyota',
          question: 'What color of car',
          children: []
        },
      ]
    },
  ]
}