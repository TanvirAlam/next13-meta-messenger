export type Message = {
    [x: string]: string | number | Date;
    id: string;
    message: string;
    create_at: number;
    username: string;
    profilePic: string;
    email: string;
}