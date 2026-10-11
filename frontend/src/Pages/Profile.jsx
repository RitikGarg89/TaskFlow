import React from 'react'
import ProfileCard from '../Components/ProfileCard'
import ProfileDashBoard from '../Components/ProfileDashBoard'

function Profile() {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <ProfileCard />
            <ProfileDashBoard />
        </div>
    )
}

export default Profile