interface IUser {
    readonly dbId: number,
    name: string,
    userId: number,
    googleId?: string,
    //startTrail: () => string,
    startTrail(): boolean, // clera understanding that it's function and return type is string
    getCoupon(name: string, value: number): number
}

// we can add new properties, we can update it, unlike type
interface IUser {
    githubId: string,
    githubToken: string,
}

// extending interface: so you can use existing interface in multiple ways
interface IAdmin extends IUser {
    role: "admin" | "ta" | "learner"
}

const Pam: IAdmin = {
    dbId: 1,
    role: "admin",
    userId: 1,
    name: "Pam",
    googleId: "randomid-pam@google.com",
    githubId: "randomid-github-pam@google.com",
    githubToken: "randomid-token-github-pam@google.com",
    startTrail: () => {
        return false
    },
    getCoupon: (name: "10% OFF", value: 10) => {
        return 10
    }
}


export {}