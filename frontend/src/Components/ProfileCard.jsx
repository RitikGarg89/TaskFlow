import React from 'react'

function ProfileCard() {
    return (
        <div className='flex flex-col justify-between items-center gap-2'>
            <p className='text-4xl font-semibold'>Ritik Garg</p>
            <p className='text-lg font-medium'>ritikgarg8910@gmail.com</p>
            <p className='text-md font-medium text-slate-500'>Member since Oct 11, 2026</p>
        </div>
    )
}

export default ProfileCard