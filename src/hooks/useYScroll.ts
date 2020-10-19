import { useCallback, useEffect } from 'react'
import { useSpring, config } from 'react-spring'
import { useGesture } from 'react-use-gesture'
//import clamp from 'lodash/clamp'

export function useYScroll({speed=1, bounds=[0,1], ...props}) {
  const [{ y }, set] = useSpring(() => ({ y: 0, config: config.slow }))
  const fn = useCallback(
    ({ xy: [,cy], previous:[,py], movement:[,my], memo=y.getValue(), down, wheeling, ...e}) => {
        const newY = memo + (wheeling?my:down?-my:0) * speed / 1000 //memo+cy-py
        if (bounds.filter(v=>v>newY).length !== 1)
            return //console.log(~~cy, ~~py, ~~my, newY);
        set({ y: newY })
        return newY
    },
    [y, set]
  )
  const bind = useGesture({ onWheel: fn, onDrag: fn }, props)
  useEffect(() => props && props.domTarget && bind(), [props, bind])
  return [y, bind]
}
