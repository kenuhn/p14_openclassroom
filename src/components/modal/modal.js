import React from 'react';
import { useNavigate } from 'react-router-dom';


const Modal = (props) => {
    const isOpen = props.isOpen
    const navigate = useNavigate()

    if(isOpen) console.log("salut")
         return (
            <div className="modal" style={{display: isOpen ? 'flex' : 'none'}}>
                <div className='modal-content'>
                    <h3 className='modal-header'>HRNET</h3>
                    <p className=''> Nouvelle utilisateur crée !! </p>
                    <button className="modal-button" onClick={ () => { navigate('./Employe')}}> ok </button>
                </div>
            </div>
       
    );
   
};

export default Modal;