import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Clock, XCircle, AlertCircle } from 'lucide-react'

interface StatusBadgeProps {
  status: 'success' | 'pending' | 'rejected' | 'processing' | 'completed'
  size?: 'sm' | 'md' | 'lg'
}

const StatusBadge = ({ status, size = 'md' }: StatusBadgeProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'success':
      case 'completed':
        return {
          variant: 'success' as const,
          icon: <CheckCircle2 className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />,
          label: 'Completed',
        }
      case 'pending':
        return {
          variant: 'warning' as const,
          icon: <Clock className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />,
          label: 'Pending',
        }
      case 'processing':
        return {
          variant: 'default' as const,
          icon: <AlertCircle className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />,
          label: 'Processing',
        }
      case 'rejected':
        return {
          variant: 'destructive' as const,
          icon: <XCircle className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />,
          label: 'Rejected',
        }
    }
  }

  const config = getStatusConfig()
  const sizeClass = size === 'sm' ? 'px-2 py-1 text-xs' : size === 'lg' ? 'px-4 py-2 text-sm' : 'px-3 py-1.5 text-xs'

  return (
    <Badge variant={config.variant} className={`inline-flex items-center gap-1.5 ${sizeClass}`}>
      {config.icon}
      <span>{config.label}</span>
    </Badge>
  )
}

export default StatusBadge
