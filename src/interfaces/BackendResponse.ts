export interface BackendResponse {
    users: UserServiceResponse
}

export interface UserServiceResponse {
    createdAt:              Date;
    name:                   string;
    avatar:                 AvatarClass | string;
    description:            string;
    website:                string;
    id:                     string;
    password?:              string;
    password_confirmation?: string;
    body?:                  string;
}

export interface AvatarClass {
}

