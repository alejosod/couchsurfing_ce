import Link from 'next/link'
import {User} from "@/types";

async function getUsers(){
    const res = await fetch(`${process.env.HOST}/api/user`, { method: 'GET'})

    if(!res.ok){
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function UsersPage(){
    const {users} = await getUsers()

    return (
        <div className='flex justify-center flex-col mt-10 ml-10 max-w-full max-h-full' >
            <h1 className='mb-10 font-bold text-2xl'>List Of Users</h1>
            <ul>
                {users.map((user: User) => (
                    <li className='mb-4 cursor-pointer' key={user.id}>
                        <Link href={`/user-profile/${user.id}`}>{`${user.name} ${user.lastName}`}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
