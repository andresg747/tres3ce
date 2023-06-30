'use client'

import { useEffect } from "react";

export default function Footer() {
    const setViewHeight = () => {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            setViewHeight()
        })
    }, []);
    return (
        <footer>
            <div className="flex flex-row">
                <div className="bg-primaryRed w-1/5 h-8"></div>
                <div className="bg-primaryBlue w-1/5 h-8"></div>
                <div className="bg-darkGray w-1/5 h-8"></div>
                <div className="bg-lightGray w-1/5 h-8"></div>
                <div className="bg-lightestGray w-1/5 h-8"></div>
            </div>
        </footer>
    )
}