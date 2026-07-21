export type CaseStudyBlock =
  | { type: "paragraph"; html: string }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "stat"; items: { value: string; label: string }[] };

export type CaseStudySection = {
  heading: string;
  body: CaseStudyBlock[];
};

export type CaseStudy = {
  slug: string;
  num: string;
  title: string;
  desc: string;
  role: string;
  year: string;
  tools?: string;
  tags: string[];
  imgSrc: string;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "delta",
    num: "001",
    title: "Delta Shower Doors — Search Behavior & UX Redesign",
    desc: "Used behavioral analytics to identify critical UX failures on a high-traffic product site, then redesigned the core product finder to eliminate friction.",
    role: "UX Researcher & Designer",
    year: "2024–2025",
    tools: "Hotjar, Algolia, Shopify",
    tags: ["UX Research", "Behavioral Analytics", "Content Strategy", "Interaction Design", "Shopify"],
    imgSrc: "/images/delta.jpg",
    sections: [
      {
        heading: "Overview",
        body: [
          {
            type: "paragraph",
            html: `Delta's shower door website (<a href="https://www.deltashowerdoors.com" target="_blank" rel="noopener">deltashowerdoors.com</a>) was growing in traffic but quietly failing its users. Visitors were searching for "installation" and "installation and care" at high rates — not because they wanted to buy, but because the site wasn't answering a basic question before they asked it. As a UX researcher and designer embedded in the project, I used behavioral analytics to identify the gap, developed a content strategy to close it, and redesigned the site's core product finder tool based on what users were actually doing — not what we assumed they were doing.`,
          },
        ],
      },
      {
        heading: "The Problem",
        body: [
          { type: "subheading", text: "1. Users were searching for help the site wasn't providing." },
          {
            type: "paragraph",
            html: `When I began tracking Algolia search data in April 2024, "installation" and "installation and care" were among the top queries on the site — accounting for dozens of searches per week despite a growing traffic base. This was a signal, not a coincidence. Users arriving at a hardware product site had real questions about installation that the content wasn't answering proactively. They were resorting to search as a workaround.`,
          },
          { type: "subheading", text: "2. The product finder tool was creating confusion, not clarity." },
          {
            type: "paragraph",
            html: `Hotjar heatmap analysis of the Shower Door Finder Tool revealed two critical UX failures. The most popular click on the page was not on a button — users were clicking on images and labels that weren't interactive, revealing that the affordances were invisible. And the third most popular click was on Question 2 (style selection) before users had answered Question 1 (door type) — a step that was logically impossible but visually available. The interface was inviting failure.`,
          },
        ],
      },
      {
        heading: "Research & Discovery",
        body: [
          {
            type: "paragraph",
            html: `I used a combination of Algolia search data and Hotjar session recordings and heatmaps to build a clear picture of behavior. The Algolia data provided a longitudinal view of what users were searching for over time, which allowed me to correlate content changes with search behavior shifts. The Hotjar heatmaps showed exactly where users were clicking, hesitating, and abandoning — giving me qualitative texture to pair with the quantitative search trends.`,
          },
          {
            type: "paragraph",
            html: `The key insight from the heatmap analysis: users understood the question being asked ("What type of door do you want?") but couldn't figure out how to answer it. The buttons looked like design elements, not interactive controls. This is a classic affordance failure — the interface looked right but didn't behave right.`,
          },
        ],
      },
      {
        heading: "What I Did",
        body: [
          { type: "subheading", text: "Content Strategy for Installation" },
          {
            type: "paragraph",
            html: `Working from the search data, I developed a targeted content strategy to surface installation information before users needed to search for it. At launch the site had 3 blog posts, 31 FAQs, 19 videos, and no Installation Center. Over the following year, we built that out to 16 blog posts, 38 FAQs, 31 videos, 8 Installation Center articles, and 4 Finder Tool tips — a comprehensive instructional layer woven into the site architecture rather than buried in search results.`,
          },
          { type: "subheading", text: "Finder Tool Redesign — Progressive Disclosure" },
          {
            type: "paragraph",
            html: `Based on the heatmap findings, I redesigned the Shower Door Finder Tool around a progressive disclosure model. The changes addressed both failure modes directly:`,
          },
          {
            type: "bullets",
            items: [
              "One question at a time. Instead of displaying all five questions simultaneously (which allowed users to attempt Q2 before completing Q1), the redesign surfaces each question sequentially. Users cannot skip ahead.",
              `Explicit, labeled Select buttons. The image-only clickable areas were replaced with clear "⊕ Select" buttons beneath each option — unambiguous interactive affordances.`,
              "Progress bar. A step indicator (Type of door → Style → Track Style → Glass Thickness → Collection) was added to orient users and reduce cognitive load.",
            ],
          },
        ],
      },
      {
        heading: "Results",
        body: [
          {
            type: "paragraph",
            html: `The results were measurable and significant across both initiatives. Traffic more than quintupled over the period. Installation-related searches dropped by 92%.`,
          },
          {
            type: "table",
            headers: ["Date", "Installation-Related Searches", "Site Traffic"],
            rows: [
              ["April 2024", "83", "3,238"],
              ["May 2024", "99", "4,427"],
              ["March 2025", "33", "8,593"],
              ["April 2025", "7", "21,072"],
            ],
          },
          {
            type: "stat",
            items: [
              { value: "92%", label: "Drop in installation searches" },
              { value: "6×", label: "Traffic growth over period" },
            ],
          },
          {
            type: "paragraph",
            html: `The pattern is the finding. In most analytics contexts, more traffic means more searches. Here, traffic grew 6x while a specific friction-related search category nearly disappeared. That only happens when the content is genuinely resolving user needs before they become search queries.`,
          },
        ],
      },
      {
        heading: "What This Demonstrates",
        body: [
          {
            type: "paragraph",
            html: `This project is a good example of what continuous UX research actually looks like in practice. The insights didn't come from a single research sprint — they emerged from sustained attention to behavioral signals over time. The Algolia data told me what users needed. The Hotjar heatmaps told me where the interface was letting them down. The redesign addressed both.`,
          },
          {
            type: "paragraph",
            html: `Reduced search dependency is a positive signal of improved user experience and findability. When users stop asking a question, it usually means the interface finally answered it.`,
          },
        ],
      },
    ],
  },
  {
    slug: "fidelity-fds",
    num: "002",
    title: "Fidelity Design System — iOS Mobile Workstream",
    desc: "Led the iOS mobile workstream for a company-wide design system unifying 150+ designers. Delivered the full Figma component library in 9 months.",
    role: "Principal UX Designer",
    year: "2022–23",
    tools: "Figma, iOS / HIG, Design Tokens",
    tags: ["Design Systems", "iOS", "Figma", "Component Library", "UX Leadership"],
    imgSrc: "/images/fidelity.jpg",
    sections: [
      {
        heading: "Overview",
        body: [
          {
            type: "paragraph",
            html: `Fidelity Investments is one of the largest financial services companies in the world, with a design organization of 150+ UX designers and researchers working across dozens of products — mobile apps, web platforms, internal tools, and customer-facing experiences. In 2022, the company made a strategic decision to unify all of those surfaces under a single design system: FDS.`,
          },
          {
            type: "paragraph",
            html: `I was brought onto the FDS team as a Principal UX Designer and led the iOS mobile workstream — responsible for designing, structuring, and delivering the Figma component library and templates that would serve as the source of truth for every iOS experience at Fidelity. We had nine months to launch version 1.0. We shipped on time.`,
          },
        ],
      },
      {
        heading: "The Problem",
        body: [
          {
            type: "paragraph",
            html: `Fidelity's design organization had grown organically over years. Individual product teams had built their own component libraries, their own patterns, and their own interpretations of the brand. The result was an ecosystem of inconsistency: similar UI patterns built differently across products, design decisions made in isolation, and no shared language between the teams building iOS, web, and internal tools.`,
          },
          {
            type: "paragraph",
            html: `For a company where customers interact with their retirement savings, investment accounts, and financial planning tools, inconsistency isn't just a design problem — it's a trust problem. When the experience feels different from one screen to the next, it introduces friction and doubt at exactly the moments that require confidence.`,
          },
          {
            type: "paragraph",
            html: `The challenge was not just to build a library. It was to build one that all the designers would actually adopt and trust — across different product areas, different levels of seniority, and different ways of working.`,
          },
        ],
      },
      {
        heading: "My Role: iOS Mobile Workstream Lead",
        body: [
          { type: "subheading", text: "Defining the iOS component architecture" },
          {
            type: "paragraph",
            html: `I established which components were needed for v1.0, how they would be structured within Figma, and how they would map to iOS native patterns while staying aligned with Fidelity's brand. This required balancing fidelity to Apple's Human Interface Guidelines with the design language the FDS team was building — knowing when to follow platform conventions and when to establish Fidelity-specific patterns.`,
          },
          { type: "subheading", text: "Building the Figma library" },
          {
            type: "paragraph",
            html: `I designed and built the iOS component library in Figma from the ground up — variants, auto layout, interactive components, and documentation annotations baked directly into the file. The library was structured to be intuitive for designers who had never used a shared system before, not just designers who understood how to work in Figma at a technical level.`,
          },
          { type: "subheading", text: "Coordinating with the broader FDS team" },
          {
            type: "paragraph",
            html: `iOS components don't exist in isolation — they needed to align with the token system, the web component library, and the overall FDS design language being developed in parallel. I worked closely with the other workstream leads to ensure visual and behavioral consistency across surfaces without creating bottlenecks.`,
          },
          { type: "subheading", text: "Supporting adoption" },
          {
            type: "paragraph",
            html: `After launch, the work didn't stop. I participated in the team's ongoing support structure — office hours, Teams channels, and direct designer support — helping iOS-focused product teams understand how to use the library, when to use it as-is, and how to flag gaps for v1.1.`,
          },
        ],
      },
      {
        heading: "The Approach",
        body: [
          { type: "subheading", text: "Starting with inventory, not components" },
          {
            type: "paragraph",
            html: `Before building anything, I audited the existing iOS design files across Fidelity's product teams to understand what patterns were already in use. The goal was not to start from scratch but to identify what was working, what was inconsistent, and what was missing entirely. This inventory work shaped the component priority list for v1.0 — ensuring we shipped the things designers needed most, not just the things that were easiest to build.`,
          },
          { type: "subheading", text: "Tokens first, components second" },
          {
            type: "paragraph",
            html: `In close coordination with the tokens workstream, I ensured every iOS component was built on the FDS token system — color, typography, spacing, and elevation values that could be updated globally rather than component by component. This was a deliberate investment in the long-term maintainability of the library and a decision that would pay dividends as FDS evolved past v1.0.`,
          },
          { type: "subheading", text: "Designing for designers" },
          {
            type: "paragraph",
            html: `A design system is a product. Its users are designers. I treated the Figma library with the same UX rigor I would apply to a consumer product — thinking about how designers would navigate it, how they would understand the component variants, and how much they would need to read before they could use it. Components were named predictably. Variants were structured to match how designers think about states, not how engineers think about props. Documentation was embedded in the file itself, not in a separate wiki that would fall out of date.`,
          },
          { type: "subheading", text: "Phasing scope ruthlessly" },
          {
            type: "paragraph",
            html: `Nine months is not a lot of time to build a comprehensive iOS component library for one of the world's largest financial institutions. I worked with the team to phase v1.0 scope aggressively — prioritizing the components that would unblock the most product teams and deferring edge cases and lower-frequency patterns to v1.1. Shipping a solid, trusted v1.0 on time was more valuable than shipping a comprehensive v1.0 late.`,
          },
        ],
      },
      {
        heading: "Launch & Adoption",
        body: [
          {
            type: "paragraph",
            html: `FDS v1.0 launched on schedule, with the iOS library fully delivered alongside the web and Android components and Figma templates. The 150+ person design organization was onboarded through a structured rollout: documentation, live training sessions, dedicated Teams channels for questions, and recurring open office hours where designers could bring real problems and get real answers.`,
          },
          {
            type: "stat",
            items: [
              { value: "150+", label: "Designers onboarded at launch" },
              { value: "9 mo", label: "From kickoff to v1.0 ship" },
            ],
          },
          {
            type: "paragraph",
            html: `The qualitative signal from the iOS workstream was strong. Product teams that had previously maintained their own ad hoc component sets adopted the FDS library because it solved a real problem — they no longer had to make foundational decisions from scratch on every project. The shared language created by FDS made design reviews faster, design handoff cleaner, and cross-team collaboration more natural.`,
          },
          {
            type: "paragraph",
            html: `Perhaps most importantly, the system earned trust. Trust that it would be maintained. Trust that questions would be answered. Trust that when a designer built on FDS, they were building on something stable.`,
          },
        ],
      },
      {
        heading: "What This Work Demonstrates",
        body: [
          {
            type: "paragraph",
            html: `Design systems are infrastructure. They're unglamorous, they're complex, and their value is most visible in the work they make possible rather than the work themselves. Leading the iOS workstream on FDS required technical depth in Figma and iOS patterns, strategic judgment about scope and prioritization, cross-functional collaboration across a large organization, and a genuine conviction that the designers using the system deserved something that worked as well as the products they were building.`,
          },
          {
            type: "paragraph",
            html: `Shipping v1.0 in nine months at Fidelity's scale wasn't just a delivery achievement. It was a systems thinking challenge — and one of the most consequential design contributions I've made.`,
          },
        ],
      },
    ],
  },
  {
    slug: "liberty",
    num: "003",
    title: "Liberty Hardware Shopify Platform",
    desc: "Complete redesign for a hardware manufacturer, modernizing their Shopify platform to improve product discovery and streamline the customer journey.",
    role: "Lead Design / Development",
    year: "2025",
    tags: ["Web Design", "Design System", "UX Research", "Responsive", "Liquid", "AIO", "SEO"],
    imgSrc: "/images/liberty.jpg",
    sections: [
      {
        heading: "Overview",
        body: [
          {
            type: "paragraph",
            html: `Liberty Hardware — a leading cabinet hardware manufacturer — needed their Shopify storefront rebuilt from the ground up. The existing site buried products in navigation and failed to convert professional buyers.`,
          },
        ],
      },
      {
        heading: "The Problem",
        body: [
          {
            type: "paragraph",
            html: `Product discovery was broken. The visual system was inconsistent across 4,000+ SKUs. Mobile performance tanked under product filtering. SEO was an afterthought.`,
          },
        ],
      },
      {
        heading: "The Solution",
        body: [
          {
            type: "paragraph",
            html: `Built a comprehensive Shopify Liquid design system with a faceted search architecture, smart product photography guidelines, and an AIO-optimized content structure. Collaborated directly with engineering and marketing teams throughout.`,
          },
        ],
      },
      {
        heading: "The Outcome",
        body: [
          {
            type: "paragraph",
            html: `Improved product page conversion by 28%. Mobile session duration increased by 41%. Site now ranks on page 1 for 60+ target category terms.`,
          },
          {
            type: "stat",
            items: [
              { value: "28%", label: "Product page conversion lift" },
              { value: "41%", label: "Mobile session duration increase" },
              { value: "60+", label: "Page-1 category keyword rankings" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "youfit",
    num: "004",
    title: "YouFit Livestream Virtual 5K",
    desc: "Transformed a local Miami charity race into a nationwide live-streamed event with treadmill-synced live video.",
    role: "Lead Design / Development",
    year: "2016",
    tags: ["Mobile Design", "UX Research", "Prototyping", "iOS", "Live Streaming"],
    imgSrc: "/images/youfit.jpg",
    sections: [
      {
        heading: "Overview",
        body: [
          {
            type: "paragraph",
            html: `The Miami Children's Health Foundation raises funds for a program that helps children around the world through virtual checkups. Every year they host a local 5K in Miami — but their mission was anything but local. YouFit saw an opportunity: use the same virtual technology that powers the foundation's healthcare model to reimagine what a charity race could be. The result was the first-ever livestream virtual 5K.`,
          },
        ],
      },
      {
        heading: "The Problem",
        body: [
          {
            type: "paragraph",
            html: `A local 5K can only raise so much. The challenge was figuring out how to dramatically expand participation and donations without diluting the race-day experience that makes people show up and give. Simply letting people log their own miles remotely wasn't enough — we needed remote runners to genuinely feel like they were part of the event in Miami, competing in real time, not just tracking steps on their own.`,
          },
        ],
      },
      {
        heading: "Goals",
        body: [
          {
            type: "bullets",
            items: [
              "Double race participation — bring in 4,000 additional runners nationwide.",
              "Double fundraising for the Miami Children's Health Foundation, to $100,000.",
              "Generate real buzz — enough press coverage to make the campaign newsworthy on its own.",
            ],
          },
        ],
      },
      {
        heading: "The Solution",
        body: [
          {
            type: "paragraph",
            html: `On race day, YouFit converted all of its gyms across the country into official starting lines. Official pace runners in Miami wore GoPro cameras and streamed first-person live video of the race course. Each treadmill was equipped with a pace tracker that collected real-time running data and a tablet that displayed the live stream — dynamically synced to match the runner's treadmill speed. Run faster, the video sped up. Slow down, it slowed with you. The same virtual connection technology that lets the Miami Children's Health Foundation reach sick children worldwide was now making a gym treadmill feel like a Miami street.`,
          },
        ],
      },
      {
        heading: "Building the Experience",
        body: [
          { type: "subheading", text: "Promotion" },
          {
            type: "paragraph",
            html: `We announced the first YouFit Virtual 5K with a press release and pushed it through social media, in-gym marketing, email, and direct mail to build awareness well ahead of race day.`,
          },
          { type: "subheading", text: "Registration & Packet Pickup" },
          {
            type: "paragraph",
            html: `Runners registered ahead of time on a dedicated microsite with their email, YouFit member ID, home gym, and shirt size — every entry fee went directly to the Miami Children's Health Foundation. Beyond registration, the site doubled as a promotional hub and a home base for the race's social content. In the days before the race, participants picked up a packet at their local gym: a shirt and a running bib. Each bib carried the name of a real child from the foundation's program, distributed evenly across runners so no child was left out — a small detail that turned an abstract donation into something runners were literally wearing.`,
          },
          { type: "subheading", text: "Race Day: The Treadmill Experience" },
          {
            type: "paragraph",
            html: `On race morning, treadmill runners joined a live-streamed stretch session led from Miami, broadcast across every TV in the club with the event's ambient sound piped through the speakers. Each treadmill paired a tread tracker with a tablet running the Virtual 5K app — the tracker fed pace and distance into a first-person livestream shot by four pace runners in Miami, each running the course at a different speed, so a runner's own pace determined which video they were synced to. Club TVs and tablets displayed a live map of colored dots tracking every runner at that location, plus a national leaderboard of the ten fastest treadmill runners in the country, while trainers handed out water throughout the race to keep the experience feeling like a real one. Finishers got a completion medal, the option to share their result on social media straight from the tablet, and a table of orange slices and other post-race snacks waiting for them off the treadmill.`,
          },
          { type: "subheading", text: "Premium vs. General Locations" },
          {
            type: "paragraph",
            html: `To make the budget work, we concentrated the full premium experience — live map, national leaderboard, synced first-person video — at up to five flagship YouFit locations with the strongest technology and most active members, so every detail of the event could be controlled end to end. Every other location ran a general experience: the same registration and race packet, but on their own treadmills without the live-video dependency. That trade-off had a real upside — without needing to sync to a single live feed, general locations could run additional heats of the race so more members could take part at a time that worked for them, sharing their treadmill finishing time on social media under #YoufitVirtual5K.`,
          },
        ],
      },
      {
        heading: "The Outcome",
        body: [
          {
            type: "paragraph",
            html: `YouFit spiked participation well beyond what a local race could achieve, bringing in record-breaking donations for the Miami Children's Health Foundation. The first-ever livestream virtual 5K proved that the right UX doesn't just improve an experience — it can fundamentally expand who gets to have it.`,
          },
        ],
      },
    ],
  },
];
