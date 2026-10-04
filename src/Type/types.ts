export interface INavItem {
  id: number;
  label: string;
  href: string;
  active?: boolean;
}

export interface ITechnology {
  id: string;
  name: string;
  description: string;
  img: string;
  badge: string;
  category: string;
  level: string;
  rating: number;
}
