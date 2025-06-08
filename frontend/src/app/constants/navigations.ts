export type NavigationId = "home" | "my-recipes" | "recipes" | "contact-us";

export type NavigationHeader = {
  title: string;
  subTitle?: string;
};

export const navigations: Record<NavigationId, NavigationHeader> = {
  home: { title: "Home" },
  "my-recipes": { title: "My Recipes", subTitle: "Add your own recipes" },
  recipes: { title: "Recipes", subTitle: "Explore recipes from the community" },
  "contact-us": { title: "Contact us" },
} as const;
