import { gsap }  from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react"


const MAXIMO = 10;
export const CounterEffect = ()   => {
    
  const [ counter, setCounter ] = useState(5);

  const counterElement = useRef<HTMLHeadingElement>(null); 

  const handleClick = () => {
    setCounter( prev => Math.min(prev + 1, MAXIMO ) )
  }
  
  useLayoutEffect( () => {
    if (counter < 10) return;
    console.log('%c se llego al valor maximo','color: red; background-color: black' )

    const tl = gsap.timeline();
    tl.to(counterElement.current, {y: -10, duration: .2, ease: 'ease-out'})
      .to(counterElement.current, {y: 0, duration: 1, ease: ' bounce-out'})
      .repeat(3)
  }, [counter])

  return (
    <>
        <h1>Counter Effect: </h1>
        <h2 ref={counterElement }>{ counter }</h2>
        <button onClick={ handleClick }> +1 </button>
    
    </>
  )
}
