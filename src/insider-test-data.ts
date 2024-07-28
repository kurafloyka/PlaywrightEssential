export const insiderHomePageUrl = "https://www.useinsider.com/";
export const insiderQaCareerUrl =
  "https://useinsider.com/careers/quality-assurance/";

export const cityNames = [
  "New York",
  "Sao Paulo",
  "London",
  "Paris",
  "Amsterdam",
  "Barcelona",
  "Helsinki",
  "Warsaw",
  "Kiev",
  "Moscow",
  "Sydney",
  "Dubai",
  "Tokyo",
  "Seoul",
  "Singapore",
  "Bangkok",
  "Jakarta",
  "Taipei",
  "Manila",
  "Kuala Lumpur",
  "Ho Chi Minh City",
  "Istanbul",
  "Ankara",
  "Mexico City",
  "Lima",
  "Buenos Aires",
  "Bogota",
  "Santiago",
];

export const allTeamsNameInsider = [
  "Customer Success",
  "Sales",
  "Product & Engineering",
  "Finance & Business Support",
  "Marketing",
  "CEO’s Executive Office",
  "Purchasing & Operations",
  "People and Culture",
  "Business Intelligence",
  "Security Engineering",
  "Partnership",
  "Quality Assurance",
  "Mobile Business Unit",
  "Partner Support Development",
  "Product Design",
];


export const baseUrl = "https://petstore.swagger.io/v2/pet/";

export const petInfo = {
  id: 12345,
  category: {
    id: 0,
    name: "string",
  },
  name: "testdoggie",
  photoUrls: ["string"],
  tags: [
    {
      id: 0,
      name: "string",
    },
  ],
  status: "available",
};


export interface PetData {
  id: number;
  category: {
      id: number;
      name: string;
  };
  name: string;
  photoUrls: string[];
  tags: {
      id: number;
      name: string;
  }[];
  status: string;
}