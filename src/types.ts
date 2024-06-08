export interface User {
    id: number;
    name: string;
    lastName: string;
}

export interface ErrorPage {  error: Error & { digest?: string }
    reset: () => void}
