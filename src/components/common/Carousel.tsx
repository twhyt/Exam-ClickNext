import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import './carousel.css'

const Carousel = ({children}:any) => {
    const ref: any = useRef()
    const autoplay: any = useRef()
    const [current, setCurrent] = useState(1);
    const [swipeX, setSwipeX] = useState(1);

    const handleClick = useCallback((mode: string) => {
        ref.current.style.transitionDuration = "400ms";
        if (mode === "prev") {
            if (current < 1) {
                setSwipeX(0)
                setCurrent(children.length);
            } else {
                setSwipeX(ref.current.clientWidth * (current - 1));
                setCurrent((prev) => --prev);
            }
        } else if (mode === 'next') {
            if (current > children.length) {
                setSwipeX(ref.current.clientWidth * (children.length + 1))
                setCurrent(1);
            } else {
                setSwipeX(ref.current.clientWidth * (current + 1));
                setCurrent((prev) => ++prev);
            }
        }
    },[current, children])

    useEffect(() => { 
        const swipeEnd = () => {
            if(current <= 1){
                ref.current.style.transitionDuration = "0ms";
                setSwipeX(ref.current.clienWidth * current);
            }
             if(current >= children.length) {
                ref.current.style.transitionDuration = "0ms";
                setSwipeX(ref.current.clienWidth * children.length);
             }
        }
        document.addEventListener("transitionend", swipeEnd);
        return () => {
            document.removeEventListener("transitionend", swipeEnd);
        }
    }, [current, children])

    useEffect(()=>{
        if(autoplay.current){
            window.clearInterval(autoplay.current)
        }
        autoplay.current =  window.setInterval(() => {
            handleClick('next')
        }, 3000);
        return () => {
            if(autoplay.current){
                window.clearInterval(autoplay.current)
            }
        }
    },[handleClick])

    const Slide = useMemo(() => {
        if (children.length > 1) {
            let newChild = children.map((item: any, index: number) => (<li key={index} className="flex-shrink-0 w-[100%] h-[100%]">{item}</li>));
            return [
                <li key={children.length + 1} className="flex-shrink-0 w-[100%] h-[100%]">
                    {children[children.length - 1]}
                </li>,
                ...newChild,
                <li key={children.length + 2} className="flex-shrink-0 w-[100%] h-[100%]">
                    {children[0]}
                </li>
            ]
        }
        return <li className="flex-shrink-0 w-[100%] h-[100%]">{children[0]}</li>;
    }, [children])

    useLayoutEffect(() => {
        if (ref !== undefined) {
            setSwipeX(ref.current.clientWidth * current)
        }
    }, [current])

    return (
        <div className="w-[100%] h-[100%] relative overflow-hidden border-b-2">
            <button
                className={`w-3 absolute z-10 left-[3%] bottom-0 top-0 my-auto btn-square bg-red-500`}
                onClick={() => handleClick('prev')}
            >
                prev
            </button>
            <ul
                ref={ref}
                className="flex w-[100%] h-[100%] list-none p-0 m-o"
                style={{ transform: `translate3d(${-swipeX}px, 0 ,0)` }}
            >
                {Slide}
            </ul>
            <button
                className={`w-3 absolute z-10 right-[3%] bottom-0 top-0 my-auto m-[auto 0] btn-square bg-red-500`}
                onClick={() => handleClick('next')}
            >
                next
            </button>
        </div>
    )
}

export default Carousel