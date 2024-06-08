import {useEffect, useState} from "react";
import {User} from "@/types";

export const useGetUserFriends = (userId: string) => {
    const [userFriends, setUserFriends] = useState<User[]>([])

    useEffect(() => {
        (async () => {

            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/friends/${userId}`, { method: 'GET'});
            if(!response.ok) throw new Error(response.statusText)
            const {friends : friendsIds} = await response.json();

            const formData = new FormData()
            formData.append('ids', friendsIds.join(','))
            const responseFromUsers = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users`, { method: 'POST', body: formData})
            if(!responseFromUsers.ok) throw new Error(response.statusText)
            const {friends} = await responseFromUsers.json()

            setUserFriends(friends)
        })()
    }, [userId])

    return [userFriends]
}
