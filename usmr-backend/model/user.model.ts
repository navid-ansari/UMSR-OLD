export interface IUser {
    _id: string;
    username: string;
    email: string;
    fname: string;
    lname: string;
    dob: string;
    password: string;
    role: IRole[];
}

export interface IRole{
    label: string;
    value: string;
    code: number
} 