'use client'

import {useGetUserDetails} from "@/hooks/useGetUserDetails";
import {useGetUserFriends} from "@/hooks/useGetUserFriends";
import Link from "next/link";

interface UserProfilePageProps {
    params: {
        id: string
    }
}

export default function UserProfilePage({params: { id }}: UserProfilePageProps){
    const [userDetails] = useGetUserDetails(id)
    const [userFriends] = useGetUserFriends(id)

    return userDetails ? (
        <div className='mt-10 ml-10'>
            <h1 className='text-2xl mb-5'>User Details</h1>
            <p className='mb-5'><span className='font-bold text-xl'>Name:</span> {userDetails?.name} {userDetails?.lastName}</p>

            <p className='text-2xl mb-5'>Friends</p>

            {userFriends.length > 0 && (
                <ul>
                    {userFriends.map(friend => (
                        <li className='decoration-1' key={friend.id}><Link
                            href={`/user-profile/${friend.id}`}>{friend.name} - {friend.lastName}</Link></li>
                    ))}
                </ul>
            )}

        </div>
    ) : (
        <h1 className='text-2xl mt-10 ml-10'>No Details Available</h1>
    )
}
