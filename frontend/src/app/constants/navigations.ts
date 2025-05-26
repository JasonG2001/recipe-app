export type NavigationId = "home" | "about_us" | "recipes" | "contact_us";

export const navigations: Record<NavigationId, string> = {
  home: "Home",
  about_us: "About us",
  recipes: "Recipes",
  contact_us: "Contact us",
} as const;
