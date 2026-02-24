import type { ServiceDetails } from "@/types/ServiceDetail";


export interface Translation {
  bannertext: string;
  nav: Array<{
    label: string;
    href: string;
    subItems?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  cta: string;
  description: string;
  descriptionHeader: string;
  sectors: {
    title1: string;
    title2: string;
    description: string;
    items: {
      health: string;
      finance_banking_insurance: string;
      telecommunications_media: string;
      security: string;
      education_training: string;
      public_sector_administrations: string;
    };
  };
  services_section: {
    title1: string;
    title2: string;
    description: string;
    items: {
      [key:string]:{
        title:string,
        description:string;
      }
    }
  };
  solutions_section: {
  title1: string,
  title2: string,
  description: string,
  };
  
  solutions: Array<{
    title: string;
    items: Array<{
      name:string;
      description:string;
    }>;
  }>;

  cta_section: {
    [key:string]:string;
  };
  contact: {
    hero_pre: string;
    hero_post: string;
    hero_description: string;
    form_title: string;
    form_description: string;
    form_labels: {
      name: string;
      email: string;
      message: string;
    };
    form_placeholders: {
      name: string;
      email: string;
      message: string;
    };
    submit_text: string;
    contact_form_submint: string;
    submitting_text: string;
    success_message: string;
    send_another: string;
    contact_subtitle: string;
    map_title: string;
    phone_text: string;
    phone_sentence: string;
    labels: {
      phone: string;
      email: string;
      address: string;
      hours: string;
    };
    descriptions: {
      phone: string;
      email: string;
      address: string;
      hours: string;
    };
    faq: {
      title: string;
      q1: string;
      a1: string;
      q2: string;
      a2: string;
      q3: string;
      a3: string;
    };
    errors: {
      required: string;
      invalid_email: string;
      network: string;
      not_logged_in: string;
      server_config: string;
      unknown: string;
    };
  };
  section_about: {
    title1: string;
    title2: string;
    description: string;
    learn_more_button: string;
    our_services_button: string;
    team_title: string;
    team_description: string;
  };
  service_details: ServiceDetails;
  service_details_buttons: {
    back_to_services: string;
    learn_more: string;
  };
  footer: {
    companyName:string;
    description:string;
    contact_title:string;
    copyrightText:string;
    sections: Array<{
      title: string;
      links: Array<{
        label: string;
        href: string;
      }>;
    }>;
   
    contactInfo: Array<{
      label: string;
      value: string;
      icon: string;
    }>;
    legalLinks: Array<{
      label: string;
      href: string;
    }>;
    newsletter: {
     [key:string]:string;
    };
  };
  hero: {
    [key:string]:string
  };
}
