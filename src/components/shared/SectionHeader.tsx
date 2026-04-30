interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
}

const SectionHeader = ({ title, description, className = '' }: SectionHeaderProps) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#18264D] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-[#667085] max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
