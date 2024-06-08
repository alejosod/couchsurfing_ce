import {User} from "@/types";

export const mockedUserData: User[] = [
    {
        id: 1,
        name: 'John',
        lastName: 'Testerson'
    },
    {
        id: 2,
        name: 'Rick',
        lastName: 'Testerson'
    },
    {
        id: 3,
        name: 'Jeff',
        lastName: 'Testerson'
    },
    {
        id: 4,
        name: 'Ramon',
        lastName: 'Testerson'
    },
]


export const friendshipsMockedData = [
    {
        userId: 1,
        friends: [2,]
    },
    {
        userId: 2,
        friends: [1,3]
    },
    {
        userId: 3,
        friends: [2]
    },
    {
        userId: 4,
        friends: [1,2,3,]
    },
]
