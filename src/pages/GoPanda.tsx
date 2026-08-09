import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { SkillTags } from '../components/SkillsCard'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 mb-3 border-t border-gray-200 pt-10 text-xl font-bold text-gray-900">
      {children}
    </h2>
  )
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-6 mb-1.5 text-[0.9rem] font-semibold text-gray-900">
      {children}
    </h3>
  )
}

function P({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2.5 text-[0.9rem] leading-[1.8] text-gray-600">
      {children}
    </p>
  )
}

function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mb-4 list-disc pl-8 text-[0.9rem] leading-loose text-gray-600">
      {children}
    </ul>
  )
}

function CaseImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="my-4 mb-7 block w-full rounded-xl"
      loading="lazy"
    />
  )
}

const technologies = [
  {
    label: 'Frontend',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Radix UI',
      'React Hook Form',
      'Tanstack Query',
      'Tiptap',
    ],
  },
  {
    label: 'Backend',
    skills: [
      'PostgreSQL',
      'Prisma ORM',
      'tRPC',
      'NextAuth.js',
      'Zod',
      'React Email',
    ],
  },
  { label: 'Deployment', skills: ['Vercel', 'Vercel Postgres'] },
]

export default function GoPanda() {
  useDocumentTitle('The GoPanda Case – Guilherme Siebert')

  return (
    <article>
      <Link
        to="/"
        className="mb-7 flex items-center gap-1.5 text-[0.9rem] font-medium text-gray-500 transition-colors hover:text-gray-900"
      >
        <ArrowLeft className="size-4" />
        Back to portfolio
      </Link>

      <header className="mb-6">
        <span className="inline-block rounded-full bg-gray-900 px-2.5 py-[3px] text-[0.7rem] font-bold tracking-[0.08em] text-white">
          CASE STUDY
        </span>
        <h1 className="mt-3 mb-2.5 text-3xl leading-tight font-bold text-gray-900">
          🐼 The GoPanda Case
        </h1>
        <p className="leading-relaxed text-gray-500">
          How I redeveloped a ticket platform reducing server costs by 40% — and
          the lessons I learned.
        </p>
      </header>

      <img
        src="/images/gopanda-case/Screenshot_2024-08-19_at_5.44.33_PM.webp"
        alt="GoPanda dashboard"
        className="w-full"
      />

      <div>
        <P>
          Developing GoPanda from the ground up was a truly rewarding
          experience. I'm particularly proud of this project because it let me
          utilize a diverse tech stack and overcome unique challenges, while
          collaborating closely with the company's owners. As the sole
          full-stack developer, I reported to both the Tech Lead and the
          business owners.
        </P>

        <H2>What is GoPanda</H2>
        <CaseImage
          src="/images/gopanda-case/56682773-fcf2-438b-889d-da7d69932bb3.webp"
          alt="GoPanda sales page"
        />
        <P>
          GoPanda is a ticket-selling platform focused on sport competitions in
          LATAM — CrossFit events, mud races, and street marathons. The platform
          has over <strong>50,000 registered participants</strong> and has
          processed more than <strong>1 million USD in transactions</strong>.
        </P>
        <P>
          Launched in 2015, the original PHP-based platform lacked a modern UI,
          new payment methods, and struggled to handle massive traffic spikes
          during popular events.
        </P>

        <H2>My Role &amp; Challenges</H2>
        <UL>
          <li>
            <strong>Redevelop the entire platform</strong> using modern web
            technologies — serverless functions, responsive design, and
            cost-effective solutions.
          </li>
          <li>
            <strong>Handle massive traffic spikes</strong> — over 10,000 users
            trying to register within 15 minutes for ~1,200 limited tickets,
            requiring a serverless, auto-scaling architecture.
          </li>
          <li>
            <strong>Wear multiple hats</strong> — sole developer on the project,
            acting as Frontend, Backend, and UI/UX designer, reporting weekly to
            a Tech Lead and the business owners.
          </li>
          <li>
            <strong>Maintain the PHP version</strong> in parallel to minimize
            disruption until the new system was ready to launch.
          </li>
          <li>
            <strong>Reduce costs</strong> — achieved a 40% reduction in server
            costs within the first month after launch by migrating to a
            serverless architecture.
          </li>
        </UL>

        <H2>Technologies</H2>
        <div className="my-4 grid grid-cols-1 gap-5 bento:grid-cols-3">
          {technologies.map(({ label, skills }) => (
            <div key={label}>
              <p className="mb-3 text-xs font-semibold tracking-[0.08em] text-gray-400 uppercase">
                {label}
              </p>
              <SkillTags skills={skills} />
            </div>
          ))}
        </div>

        <H2>Feature Highlights</H2>

        <H3>Event Dashboard</H3>
        <P>
          The heart of GoPanda for organizers — a comprehensive overview of
          sales metrics including registrations, revenue, pending payments,
          average ticket price, product stock, and category amounts in real
          time.
        </P>
        <CaseImage src="/images/gopanda-case/dashboard.webp" alt="Event dashboard" />

        <H3>Sales Page &amp; Cart Recovery</H3>
        <P>
          Organizers have full control over the sales page layout and branding.
          The cart recovery feature minimizes lost sales by reminding customers
          of their pending purchases, directly increasing conversion rates.
        </P>

        <H3>Registration &amp; Ticket Management</H3>
        <P>
          Fully customizable registration forms, ticket categories and tiers,
          participant check-in, and product upsells — all managed from a single
          organizer interface.
        </P>

        <H2>Lessons Learned</H2>

        <H3>Technical</H3>
        <UL>
          <li>
            <strong>Scalability</strong> — efficient database queries, optimized
            API performance, and caching strategies to handle thousands of
            concurrent users without downtime.
          </li>
          <li>
            <strong>Security</strong> — secure authentication, data encryption,
            and regular audits for a platform handling sensitive financial
            transactions.
          </li>
          <li>
            <strong>Full-stack ownership</strong> — designing the database
            schema, API layer, and UI in isolation requires extra discipline
            around consistency and documentation.
          </li>
        </UL>

        <H3>Non-Technical</H3>
        <UL>
          <li>
            <strong>Solo project management</strong> — prioritizing tasks,
            setting realistic deadlines, and keeping a development timeline on
            track without a team.
          </li>
          <li>
            <strong>Communication with non-technical stakeholders</strong> —
            translating business requirements into technical decisions and
            explaining trade-offs in plain language.
          </li>
          <li>
            <strong>User-centered iteration</strong> — gathering organizer and
            participant feedback early and often proved far more valuable than
            any assumption.
          </li>
        </UL>

        <H2>Conclusion</H2>
        <P>
          GoPanda is a testament to what a focused full-stack developer can
          build — a production platform handling millions in transactions, with
          a modern tech stack, built and maintained solo. The most valuable
          lesson: the intersection of good architecture, clear communication,
          and genuine empathy for your users is where great products are made.
        </P>
      </div>
    </article>
  )
}
