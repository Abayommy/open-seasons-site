export default function sitemap() {
  return [
    {
      url: 'https://www.theopenseasons.net',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.theopenseasons.net/airbnb-turnovers',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
