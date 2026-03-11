// src/config/site.ts

export const company = {
    name: "Imaf S.L.",
    shortName: "Imaf",
    cif: "B45727732",
    description:
      "Empresa especializada en mecanizado CNC y utillaje industrial en Talavera de la Reina. Más de 20 años fabricando piezas a medida con alta precisión para la industria nacional.",
    email: "info@maquimaf.es",
    phone: "+34 925 80 06 95",
    phoneDisplay: "+34 925 80 06 95",
    address: {
      street: "Calle Dr. Severo Ochoa, 96R",
      city: "Talavera de la Reina",
      region: "Castilla-La Mancha",
      postalCode: "45614",
      country: "ES",
      countryName: "España",
    },
    hours: {
      weekdays: "Lun – Vie",
      schedule: "8:00 – 18:00",
    },
    social: {
      linkedin: "https://www.linkedin.com/company/imaf-clm",
    },
  } as const;
  
  export const site = {
    url: "https://maquimaf.es",
    name: "Mecanizados y Utillaje CLM",
    defaultTitle: "Mecanizado CNC y Utillaje Castilla la Mancha",
    titleSuffix: "Imaf",
    defaultDescription:
      "Mecanizado CNC y utillaje industrial en Talavera de la Reina. Piezas a medida con alta precisión, entrega rápida y precio competitivo.",
    defaultImage: "/og-image.png",
    locale: "es_ES",
    lang: "es",
  } as const;
  
  export const navigation = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Mecanizado CNC", href: "/servicios/mecanizado-cnc" },
    { label: "Utillaje Industrial", href: "/servicios/utillaje-industrial" },
    { label: "Sobre nosotros", href: "/sobre-nosotros" },
    { label: "Contacto", href: "/contacto" },
  ] as const;
  
  export const legal = [
    { label: "Aviso Legal", href: "/aviso-legal" },
    { label: "Política de Privacidad", href: "/politica-de-privacidad" },
  ] as const;