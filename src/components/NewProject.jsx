import React from 'react'
import Input from './Input'
import { useRef } from 'react'
import Modal from './Modal'
const NewProject = ({onAdd}) => {
    const modal =useRef()

    const title = useRef()
    const description = useRef()
    const duaDate = useRef()

    const handleSave = ()=>{
        const enterdTitle = title.current.value;
        const enterdDescrition = description.current.value
        const enteredDate = duaDate.current.value
        
        if (enterdTitle.trim() === '' || enterdDescrition.trim()==='' || enteredDate.trim()==='') {
            modal.current.open();
            return;
        }

        onAdd({
            title:enterdTitle,
            description:enterdDescrition,
            duaDate:enteredDate
        })
    }

    return (
        <>
        <Modal ref={modal} buttonCaption='okay'>
            <h2>Invalid Input</h2>
            <p>Oops ... looks like you forgot to enter a value.</p>
            <p>Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li>
                    <button className=' text-stone-600 hover:text-stone-950'>
                        Cancel
                    </button>
                </li>
                <li>
                    <button onClick={handleSave} className=' py-2 px-6 rounded-xl bg-stone-800 text-stone-50 hover:bg-stone-950'>
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type='text' ref={title} label='Title' />
                <Input type='text' ref={description} label='discription' textarea />
                <Input type='date' ref={duaDate} label='Due Date' />
            </div>
        </div>
        </>
    )
}

export default NewProject