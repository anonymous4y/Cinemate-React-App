import { useLocation } from "react-router-dom"
import { useEffect } from "react"

export const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])

    return null
}
