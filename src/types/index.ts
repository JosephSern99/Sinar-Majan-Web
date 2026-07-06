export interface NavChild {
  label: string;
  href: string;
  desc: string;
  soon?: boolean;
}

export interface NavLink {
  label: string;
  href?: string;
  children?: NavChild[];
}

export interface TickerItem {
  label: string;
  price: string;
  change: string;
  up: boolean;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  examples: string[];
  icon: string;
}

export interface Differentiator {
  title: string;
  description: string;
}

export interface EnquiryForm {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}
