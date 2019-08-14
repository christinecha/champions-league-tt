const shared = {
  seoContent: 'Table Tennis like New York City\'s never seen before.',
  meta: {
    description: 'Table Tennis like New York City\'s never seen before.',
    'og:title': 'New York Table Tennis Invitational',
    'og:description': 'Table Tennis like New York City\'s never seen before.',
    // 'og:image': 'https://can-i-go-there.com/assets/us-fr-preview.jpg',
    // 'og:url': 'https://can-i-go-there.com',
    'twitter:card': 'summary_large_image',
  },
}

const pages = [
  {
    ...shared,
    title: 'New York Table Tennis Invitational',
    template: './client/pages/invitational.ejs',
    filename: 'invitational.html',
  },
]

module.exports = pages
