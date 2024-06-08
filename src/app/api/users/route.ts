import {mockedUserData} from "@/db";
// needed to implement this as a POST with a body due to:
// https://github.com/vercel/next.js/issues/64776


export const dynamic = 'force-static'

export async function POST(request: Request) {
    const formData = await request.formData()
    const ids = formData.get('ids') as string

    if(!ids) {
        return new Response('Users not found', {status: 404})
    }

    const idsArray = ids.split(',')
    console.log({idsArray})

    const users = mockedUserData.filter(user => idsArray.find(currentId => currentId === String(user.id)))

    return Response.json({ friends: users })
}
