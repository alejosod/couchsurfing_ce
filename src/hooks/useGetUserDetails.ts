import {useEffect, useState} from "react";
import {User} from "@/types";

export const useGetUserDetails = (userId: string) => {
    const [userDetails, setUserDetails] = useState<null | User>(null)

    useEffect(() => {
        (async () => {

            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user-details/${userId}`, { method: 'GET'});

            if(!response.ok) throw new Error(response.statusText)

            const {user} = await response.json();

            setUserDetails(user)

        })()
    }, [userId])

    return [userDetails]
}
