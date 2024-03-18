const DB = [
    {
        email: 'abdul@admin.com',
        password: 'Qwerty23',
        role: "admin",
        token: "lkdjkeeoialkejeo"
    },
    {
        email: 'qudus@user.com',
        password: 'Qwerty23',
        role: "user",
        token: "ekoekeoaopieekek"
    }
]

export const signInCtl = (email: string, password: string) => {
    const user = DB.find(user => user.email === email && user.password === password);
    if (user) {
        const {email, token, role} = user;
        return {email, token, role}
    }
    return {error: "Email or password is incorrect"}
}

export const getAuthDataFromLocalStorage = () => {
    const authData = localStorage.getItem('authData');

    if (authData) {
        return JSON.parse(authData);
    }
    return null;
}
