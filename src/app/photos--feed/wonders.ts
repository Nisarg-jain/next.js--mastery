// src/app/photo-feed/wonders.ts
export interface WonderImage {
  id: string;
  name: string;
  src: string;
  photographer: string;
  location: string;
}

export const wondersImages: WonderImage[] = [
  {
    id: '1',
    name: 'Great Wall of China',
    src: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
    photographer: 'Photo by Hanson Lu on Unsplash',
    location: 'China',
  },
  {
    id: '2',
    name: 'Petra',
    src: 'https://images.unsplash.com/photo-1579606032822-44621c83c273?w=800',
    photographer: 'Photo by Brian Kairuz on Unsplash',
    location: 'Jordan',
  },
  {
    id: '3',
    name: 'Christ the Redeemer',
    src: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=800',
    photographer: 'Photo by Agustin Diaz Gargiulo on Unsplash',
    location: 'Brazil',
  },
  {
    id: '4',
    name: 'Machu Picchu',
    src: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
    photographer: 'Photo by Willian Justen de Vasconcellos on Unsplash',
    location: 'Peru',
  },
  {
    id: '5',
    name: 'Chichen Itza',
    src: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800',
    photographer: 'Photo by Filip Gielda on Unsplash',
    location: 'Mexico',
  },
  {
    id: '6',
    name: 'Roman Colosseum',
    src: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
    photographer: 'Photo by David Kohler on Unsplash',
    location: 'Italy',
  },
  {
    id: '7',
    name: 'Taj Mahal',
    src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800',
    photographer: 'Photo by Sylwia Bartyzel on Unsplash',
    location: 'India',
  },
];