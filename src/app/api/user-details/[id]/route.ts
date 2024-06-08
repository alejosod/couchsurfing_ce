import {mockedUserData} from "@/db";

interface UserDetailsParams {
    id: string;
}

export const dynamic = 'force-static'

export async function GET(_: Request, { params: { id } }: { params: UserDetailsParams}) {
    const user = mockedUserData.find(user => user.id === Number(id))

    if (!user) {
        return new Response('User not found', {status: 404})
    }

    return Response.json({ user })
}
