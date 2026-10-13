import { Leaf, Scissors, Trees, Building2, ClipboardCheck, HardHat } from 'lucide-react';

export const BUSINESS = {
  name: 'FamilyRoots Grounds & Landscaping',
  area: 'Rustenburg and surrounding areas',
  phoneDisplay: '078 687 4957',
  phoneLink: '+27786874957',
  whatsappNumber: '27786874957',
  email: 'kopontheledi@gmail.com',
};

export const services = [
  { icon: Leaf, number: '01', title: 'Grass Cutting & Lawn Care', description: 'Reliable mowing, edging and routine lawn care for commercial properties, estates and shared outdoor spaces.' },
  { icon: Scissors, number: '02', title: 'Tree Trimming & Pruning', description: 'Neat, considered trimming and pruning to help maintain clear, tidy and well-presented grounds.' },
  { icon: Trees, number: '03', title: 'Garden & Grounds Maintenance', description: "Weeding, edging, garden upkeep and general outdoor maintenance tailored to your property's needs." },
  { icon: Building2, number: '04', title: 'Estate & Office Park Maintenance', description: 'Scheduled maintenance for residential estates, complexes, office parks, body corporates and facilities teams.' },
  { icon: HardHat, number: '05', title: 'Industrial & Mining Sites', description: 'Grounds care and vegetation maintenance for industrial and mining environments, subject to site requirements.' },
  { icon: ClipboardCheck, number: '06', title: 'Government & Municipal Tenders', description: 'Enquiries for grass-cutting, tree-trimming, vegetation control and grounds-maintenance contracts are welcome.' },
];

export const whatsappHref = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent('Hello FamilyRoots, I would like to enquire about grounds maintenance.')}`;
