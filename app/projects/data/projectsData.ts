export interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    title: 'Visualising shots using football match event data in Python',
    image: './shots_plot.jpg',
    description:
      'This article describes how you can create you own shot map in Python using football match event data.',
    link: 'https://medium.com/@rolandkovcs_38012/visualising-shots-using-football-match-event-data-in-python-9366f511d0b0',
  },
  {
    title: 'Visualising passes of players with football event data in Python',
    image: './passes_plot.jpg',
    description:
      "This article describes how you can visualise players' passes in Python using football match event data.",
    link: 'https://medium.com/@rolandkovcs_38012/visualising-passes-of-players-with-football-event-data-in-python-7829adab5904',
  },
  {
    title: 'A career handbook for professional soccer players',
    image: './career_handbook.png',
    description:
      'In this article, we created a recommendation tool that helps soccer players to find what needs to be improved in order to achieve their desired goals.',
    link: 'https://journals.sagepub.com/doi/10.1177/17479541231155598',
  },
  {
    title: 'Predicting player transfers in the small world of football',
    image: './network.png',
    description:
      'In this article, we analyzed the naturally developed networks in the world of football and developed a transfer prediction classification model using its features.',
    link: 'https://www.researchgate.net/publication/355207733_Predicting_player_transfers_in_the_small_world_of_football',
  },
];
