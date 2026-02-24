// types.ts
export interface ServiceBase {
  img: string;
  label: string;
  description: string;
}

export interface ServiceWithDetails extends ServiceBase {
  details: string[];
  categories?: never; // empêche la présence de categories
}

export interface ServiceWithCategories extends ServiceBase {
  categories: {
    name: string;
    details: string[];
  }[];
  details?: never; // empêche la présence de details
}

export type Service = ServiceWithDetails | ServiceWithCategories;

// Type global pour l'objet de services
export type ServiceDetails = Record<string, Service>;