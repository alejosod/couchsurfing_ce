import {mockedUserData} from "@/db";

export const dynamic = 'force-static'

export async function GET() {
    return Response.json({ users: mockedUserData })
}
