import { useColor } from 'color-thief-react'

const useAvgColor = (src: string): string => {
  const { data: avgColor } = useColor(src, 'hex', {
    crossOrigin: 'anonymous',
  })

  return avgColor || '#535353'
}

export default useAvgColor
