
interface Profile {
    name: string;
    age: number;
    email: string;
}

interface PartialUpdate {
    name?: string;
    age?: number;
    email?: string;
}

const updateProfile = (profile: Profile, partial: PartialUpdate): Profile => {

    return { ...profile, ...partial }

}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
updateProfile(myProfile, { name: "Bruce", email: "bruce@example.com" })