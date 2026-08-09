type SkillsCardProps = {
  label: string
  skills: string[]
}

export default function SkillsCard({ label, skills }: SkillsCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-[20px] bg-gray-900 p-5">
      <p className="text-xs font-semibold tracking-[0.08em] text-gray-400 uppercase">
        {label}
      </p>
      <SkillTags skills={skills} />
    </div>
  )
}

export function SkillTags({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full bg-gray-800 px-2 py-1 text-[0.7rem] font-medium text-gray-200"
        >
          {skill}
        </span>
      ))}
    </div>
  )
}
