export type Artwork = {
  slug: string;
  title: string;
  year?: number;
  medium: string;
  dimensions?: string;
  image: string;
  width: number;
  height: number;
  description?: string;
};

// Placeholder metadata — titles, years, and mediums are stand-ins until the
// real values are supplied. Image filenames and pixel dimensions are real.
export const artworks: Artwork[] = [
  {
    slug: "painting-01",
    title: "Untitled No. 01",
    year: 2024,
    medium: "Oil on canvas",
    image: "/images/gallery/painting-01.jpg",
    width: 2400,
    height: 1920,
  },
  {
    slug: "painting-02",
    title: "Untitled No. 02",
    year: 2024,
    medium: "Oil on canvas",
    image: "/images/gallery/painting-02.jpg",
    width: 2400,
    height: 1350,
  },
  {
    slug: "painting-03",
    title: "Untitled No. 03",
    year: 2024,
    medium: "Oil on canvas",
    image: "/images/gallery/painting-03.jpg",
    width: 2400,
    height: 1350,
  },
  {
    slug: "painting-04",
    title: "Untitled No. 04",
    year: 2024,
    medium: "Oil on canvas",
    image: "/images/gallery/painting-04.jpg",
    width: 2400,
    height: 1350,
  },
  {
    slug: "painting-05",
    title: "Untitled No. 05",
    year: 2024,
    medium: "Oil on canvas",
    image: "/images/gallery/painting-05.jpg",
    width: 2400,
    height: 1350,
  },
  {
    slug: "painting-06",
    title: "Untitled No. 06",
    year: 2024,
    medium: "Oil on canvas",
    image: "/images/gallery/painting-06.jpg",
    width: 2400,
    height: 1350,
  },
  {
    slug: "painting-07",
    title: "Untitled No. 07",
    year: 2024,
    medium: "Oil on canvas",
    image: "/images/gallery/painting-07.jpg",
    width: 1776,
    height: 2400,
  },
  {
    slug: "painting-08",
    title: "Untitled No. 08",
    year: 2024,
    medium: "Oil on canvas",
    image: "/images/gallery/painting-08.jpg",
    width: 1907,
    height: 2400,
  },
  {
    slug: "painting-09",
    title: "Untitled No. 09",
    year: 2024,
    medium: "Oil on canvas",
    image: "/images/gallery/painting-09.jpg",
    width: 1894,
    height: 2274,
  },
  {
    slug: "painting-10",
    title: "Untitled No. 10",
    year: 2024,
    medium: "Oil on canvas",
    image: "/images/gallery/painting-10.jpg",
    width: 1801,
    height: 2400,
  },
  {
    slug: "painting-11",
    title: "Untitled No. 11",
    year: 2024,
    medium: "Oil on canvas",
    image: "/images/gallery/painting-11.jpg",
    width: 1350,
    height: 2400,
  },
  {
    slug: "painting-12",
    title: "Untitled No. 12",
    year: 2024,
    medium: "Oil on canvas",
    image: "/images/gallery/painting-12.jpg",
    width: 1350,
    height: 2400,
  },
  {
    slug: "painting-13",
    title: "Untitled No. 13",
    year: 2024,
    medium: "Oil on canvas",
    image: "/images/gallery/painting-13.jpg",
    width: 1350,
    height: 2400,
  },
  {
    slug: "painting-14",
    title: "Untitled No. 14",
    year: 2024,
    medium: "Oil on canvas",
    image: "/images/gallery/painting-14.jpg",
    width: 1350,
    height: 2400,
  },
  {
    slug: "painting-15",
    title: "Untitled No. 15",
    year: 2024,
    medium: "Oil on canvas",
    image: "/images/gallery/painting-15.jpg",
    width: 1350,
    height: 2400,
  },
];
