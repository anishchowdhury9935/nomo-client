import React, { useContext } from 'react'
import context from '../../context/context';

export default function Modal() {
    const contextData = useContext(context)
    const { modalData } = contextData;
    const { type, component, display } = modalData;
    return (
        <div className='modal_main' id='modal_main' style={{ display }}>
            <div className="modal_inner_div">
            {
                'side' === 'side' ? <div className='modal_side'>
                    {component}
                </div> : ''
            }
            </div>
        </div>
    )
}
