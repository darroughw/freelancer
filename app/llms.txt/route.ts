import { caseStudies } from "../data/case-studies";
import { SITE_URL, SITE_NAME } from "../site-config";

export function GET() {
  const caseStudyLines = caseStudies
    .map((study) => `- [${study.title}](${SITE_URL}/work/${study.slug}): ${study.desc}`)
    .join("\n");

  const body = `# ${SITE_NAME}

> Freelance UX designer and frontend engineer. 15+ years designing enterprise IT products, design systems, and developer-facing experiences. Available for full-time and freelance work.

## Case Studies
${caseStudyLines}

## Resume
- [Resume (PDF)](${SITE_URL}/resume.pdf)

## Contact
- Email: darrough@gmail.com
- LinkedIn: https://linkedin.com/in/darroughw
- GitHub: https://github.com/darroughw
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
