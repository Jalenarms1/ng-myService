export interface CreateUserInput {
    username: string,
    password: string,
    role: string
}

export interface User {
    id: string,
    username: string,
    earnings: Earning[],
    services: Service[]
}

export interface AuthUserResponse {
    $id: string,
    token: string
}



export interface Service {
    id: string,
    title: string,
    description: string,
    price: number,
    customerName?: string,
    customerEmail?: string,
    isPaid?: boolean,
    createdAt?: Date,
    paidAt?: Date,
    ownerId?: string,
    owner?: User
    
}

export interface Earning {
    id: string,
    amount: number,
    ownerId: string,
    owner?: User,
    serviceId: string,
    service?: Service,
    createdAt: Date,
    cashedOut: boolean,
    payerName: string
}

