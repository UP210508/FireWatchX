import { Pack } from "@/infraestructure/interfaces/pack.interface";

export const packs: Pack[] = [
  {
    id: 1,
    name: 'Enterprise',
    pricePerYear: 10800,
    pricePerMonth: 900,
    features: [
      "Alertas en tiempo real personalizadas",
      "Detección avanzada de incendios",
      "Ideal para areas grandes",
      "Soporte prioritario",
      "Monitoreo Avanzado",
      "Datos ambientales",
      "Integración total en Azure",
      "Adaptado a areas de riesgo"
    ]
  },
  {
    id: 2,
    name: 'Pro',
    pricePerYear: 5400,
    pricePerMonth: 450,
    features: [
      "Alertas en tiempo real",
      "Detección total de incendios",
      "Ideal para areas medianas",
      "Soporte Prioritario",
      "Integracón Azure AD",
      "Orientado a la seguridad",
      "Análisis Avanzado",
    ]
  },
  {
    id: 3,
    name: 'Basic',
    pricePerYear: 2160,
    pricePerMonth: 180,
    features: [
      "Alertas en tiempo real",
      "Detección básica de incendios",
      "Ideal para areas pequeñas",
      "Soporte 24/7",
      "Análisis Básico"
    ]
  },
]