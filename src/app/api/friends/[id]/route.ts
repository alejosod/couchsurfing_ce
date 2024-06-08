import {friendshipsMockedData, mockedUserData} from "@/db";

interface GetFriendsParams {
    id: string;
}

export const dynamic = 'force-static'

export async function GET(_: Request, { params: { id } }: { params: GetFriendsParams}) {
    const {friends} = friendshipsMockedData.find(({userId} )=> userId === Number(id)) ?? {}

    if (!friends) {
        return new Response('User not found', {status: 404})
    }

    return Response.json({ friends })
}
