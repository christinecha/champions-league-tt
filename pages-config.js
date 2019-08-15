const shared = {
  seoContent: 'Table Tennis like New York City\'s never seen before.',
  meta: {
    description: 'Table Tennis like New York City\'s never seen before.',
    'og:title': 'The Champions Invitational | Pro Table Tennis',
    'og:description': 'Table Tennis like New York City\'s never seen before.',
    // 'og:image': 'https://can-i-go-there.com/assets/us-fr-preview.jpg',
    // 'og:url': 'https://can-i-go-there.com',
    'twitter:card': 'summary_large_image',
  },
}

const pages = [
  {
    ...shared,
    title: 'The Champions Invitational | Pro Table Tennis',
    template: './client/pages/invitational.ejs',
    filename: 'invitational.html',
  },
  {
    ...shared,
    title: 'The Champions Invitational | Pro Table Tennis',
    template: './client/pages/invitational.ejs',
    filename: 'index.html',
  },
  {
    ...shared,
    title: 'Players',
    'og:title': 'The Champions Invitational | Players',
    template: './client/pages/players.ejs',
    filename: 'players.html',
  },
  {
    ...shared,
    title: 'Schedule',
    'og:title': 'The Champions Invitational | Schedule',
    template: './client/pages/schedule.ejs',
    filename: 'schedule.html',
  },
  {
    ...shared,
    title: 'Hackathon',
    'og:title': 'The Champions Invitational | Hackathon',
    template: './client/pages/hackathon.ejs',
    filename: 'hackathon.html',
  },
]

module.exports = pages
