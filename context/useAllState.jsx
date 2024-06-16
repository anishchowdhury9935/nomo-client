import React, { useState } from 'react'
import twitterLogo from '../src/media/twitterLogo.avif'
import telegramLogo from '../src/media/telegramLogo.avif'
export default function useAllState() {
    const [modalData, setModalData] = useState({ type: 'center', component: '', display: 'none' }) // type should be 'center' or 'side'; display:'flex' to show the modal content; add component element to show in the modal
    const [componentCardData, setComponentCardData] = useState({
        navLinkArray: [
            { text: 'Join TG', img: telegramLogo, href: 'https://t.me/nomosol', targetBlank: true },
            { text: 'Twitter', img: twitterLogo, href: 'https://x.com/nomosolana', targetBlank: true },
        ]
    }) // card components data should be here
    return {
        modalData,
        setModalData,
        componentCardData,
        setComponentCardData
    }
}
