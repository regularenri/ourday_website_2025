export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  priceRange?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
}