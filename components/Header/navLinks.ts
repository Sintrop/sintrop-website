/**
 * Primary navigation, shared between the desktop header, the mobile menu and
 * the footer so the three never drift apart. `label` is an i18n key that is
 * duplicated into every namespace JSON.
 */
export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: "/run-a-node", label: "navRunANode" },
  { href: "/build", label: "navBuild" },
  { href: "/network", label: "navNetwork" },
  { href: "/resources", label: "navResources" },
  { href: "/about", label: "navAbout" },
];
