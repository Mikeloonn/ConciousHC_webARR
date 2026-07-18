export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface PriceItem {
  name: string;
  duration: string;
  price: string;
}

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  comment?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  embedHtml: string;
  content: React.ReactNode;
}
