import { usePalette } from 'color-thief-react'

const useAvgColor = (src: string): string => {
  const { data: avgColor } = usePalette(src, 10, 'rgbString', {
    crossOrigin: 'anonymous',
  })

  return avgColor?.[2] || '#535353'
}

export default useAvgColor
