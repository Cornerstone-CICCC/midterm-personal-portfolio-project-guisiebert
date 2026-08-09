import { BentoGrid, SectionTitle } from '../components/BentoGrid'
import GitHubCard from '../components/GitHubCard'
import NarrowLinkCard from '../components/NarrowLinkCard'
import ProjectCard from '../components/ProjectCard'
import SkillsCard from '../components/SkillsCard'
import SocialCard from '../components/SocialCard'
import {
  narrowLinks,
  photos,
  projects,
  socials,
  softSkills,
  techStack,
} from '../data/links'

function ImageCard({
  src,
  alt,
  className = '',
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className={`overflow-hidden rounded-[20px] bg-white ${className}`}>
      <img src={src} alt={alt} className="block size-full object-cover" />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <SectionTitle>Where to find me</SectionTitle>
      <BentoGrid>
        <GitHubCard />

        <div className="col-span-2 row-span-2 grid grid-rows-4 gap-3">
          {narrowLinks.map((link) => (
            <NarrowLinkCard key={link.label} {...link} />
          ))}
        </div>

        {socials.map((social) => (
          <SocialCard key={social.name} {...social} />
        ))}
      </BentoGrid>

      <SectionTitle>My projects</SectionTitle>
      <BentoGrid>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </BentoGrid>

      <SectionTitle>More about me</SectionTitle>
      <BentoGrid>
        <ImageCard {...photos[0]} />
        <ImageCard {...photos[1]} />
        <SkillsCard label="Tech Stack" skills={techStack} />
        <SkillsCard label="Soft Skills" skills={softSkills} />
        <ImageCard {...photos[2]} />
      </BentoGrid>
    </>
  )
}
