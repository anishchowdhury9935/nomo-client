import React, { useState } from 'react'

export default function useAllState() {
    const [modalData, setModalData] = useState({type:'center',component:'',display:'none'}) // type should be 'center' or 'side'; display:'flex' to show the modal content; add component element to show in the modal
    const [componentCardData, setComponentCardData] = useState({}) // card components data should be here
    return {
        modalData,
        setModalData,
        componentCardData,
        setComponentCardData
    }
}
