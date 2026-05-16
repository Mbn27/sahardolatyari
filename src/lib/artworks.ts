export type Artwork = {
  slug: string;
  title: string;
  year?: number;
  medium: string;
  image: string;
  description?: string;
};

export const artworks: Artwork[] = [
  // Add artworks here, e.g.:
  // {
  //   slug: "morning-light",
  //   title: "Morning Light",
  //   year: 2024,
  //   medium: "Oil on canvas, 80 × 100 cm",
  //   image: "/images/gallery/morning-light.jpg",
  //   description: "A study of natural light on linen.",
  // },
];
