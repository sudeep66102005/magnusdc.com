/**
 * Central place for backend REST endpoint paths.
 * Mirrors the NestJS module routes defined in /backend/src/modules/*
 */
export const endpoints = {
  specialties: {
    list: "/specialties",
    detail: (slug: string) => `/specialties/${slug}`,
  },
  diagnostics: {
    list: "/diagnostics",
    detail: (slug: string) => `/diagnostics/${slug}`,
  },
  laboratory: {
    list: "/laboratory",
    detail: (slug: string) => `/laboratory/${slug}`,
  },
  healthPackages: {
    list: "/health-packages",
    detail: (slug: string) => `/health-packages/${slug}`,
  },
  corporates: {
    inquiry: "/corporates/inquiry",
  },
  appointments: {
    create: "/appointments",
    availability: "/appointments/availability",
    detail: (id: string) => `/appointments/${id}`,
  },
  patients: {
    supportTicket: "/patients/support",
  },
  contact: {
    submit: "/contact",
  },
  queue: {
    // WebSocket namespace, see backend QueueGateway
    socketPath: "/ws/queue",
  },
} as const;
