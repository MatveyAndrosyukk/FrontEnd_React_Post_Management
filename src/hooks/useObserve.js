import {useEffect, useRef} from "react";

export const useObserve = (isPostLoading, expression, ref, callback) => {
    const observer = useRef()

    useEffect(() => {
        if (isPostLoading) return
        if (observer.current) observer.current.disconnect()
        let cb = function (entries, observer){
            if (entries[0].isIntersecting && expression){
                callback()
                console.log(entries)
            }
        }

        observer.current = new IntersectionObserver(cb)
        observer.current.observe(ref.current)
    }, [isPostLoading])
}