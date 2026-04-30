import { cn } from "@/lib/utils"

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Spinner = ({ size = 'md', className }: SpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  }
  
  return (
    <div
      className={cn(
        'animate-spin rounded-full border-[#18264D] border-t-transparent',
        sizeClasses[size],
        className
      )}
    />
  )
}

export const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8FB]">
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <Spinner size="lg" />
        </div>
        <h2 className="text-xl font-semibold text-[#18264D] mb-2">Loading...</h2>
        <p className="text-gray-600">Please wait while we load your content</p>
      </div>
    </div>
  )
}

export default Spinner
