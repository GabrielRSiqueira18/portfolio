interface SkillButtonProps {
  text: string
}

export function SkillButton({ text }: SkillButtonProps) {
  return (
    <button className="py-2 px-4 bg-gray-300 shadow-sm text-gray-950 text-sm rounded cursor-default m-auto">{text}</button>
  )
}