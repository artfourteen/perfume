export interface PerfumeEntity {
  id: string;
  title: string;
  slug: string;
  brand: string;
  price: number[];
  ml: number[];
  description: string;
  img: string;
  season: "winter" | "summer" | "fall" | "spring";
  gender: "male" | "female" | "unisex";
}
