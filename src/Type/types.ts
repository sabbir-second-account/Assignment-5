export interface INavItem {
  id: number;
  label: string;
  href: string;
  active?: boolean;
}

export interface ITechnology {
  id: number;
  name: string;
  description: string;
  img: string;
  badge: string;
  category: string;
  difficulty: string;
  rating: number;
}
