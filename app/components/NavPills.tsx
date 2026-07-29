// Hick's Law: fewer options so users decide faster. They still spent 10 minutes on this dropdown.
export const NAV_ITEMS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "topfives", label: "Off duty" },
  { id: "contact", label: "Contact" },
] as const;

export default function NavPills({ activeSection }: { activeSection: string }) {
  return (
    <nav className="bottom-nav" aria-label="Section navigation">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`pill${activeSection === item.id ? " is-active" : ""}`}
          aria-current={activeSection === item.id ? "true" : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
