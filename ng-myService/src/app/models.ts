export interface CreateUserInput {
    username: string,
    password: string,
    role: string
}

export interface User {
    id: string,
    name: string,
    role: string,
    memberOf: TeamMember[]
}

export interface AuthUserResponse {
    $id: string,
    token: string
}

export interface TeamMember {
    id: string,
    teamId: string,
    team: Team,
    userId: string,
    user: User
}

export interface Team {
    $id: number,
    id: string,
    name: string,
    members: TeamMember[]
}

export interface TeamResponse {
    $id: number,
    $values: Team[]
}