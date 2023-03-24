import { IUser } from "../controllers/user.conroller";

const EMAIL_VALIDATOR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASWORD_VALIDATOR = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const NAME_VALIDATOR = /^([a-zA-Z0-9_-]){8,}$/;

export const validate = (user: IUser) => {
    //Initalize a new errors object
    const errors: string[] = []
    //Check if email is valid
    if(!user.email.match(EMAIL_VALIDATOR)) {
        errors.push("Please provide a valid email")
    }
    //Check if password is more or equal to 8 char.
    if(!user.pass.match(PASWORD_VALIDATOR)) {
        errors.push("Passowrd must be grater than 8 characters with an uppercase, lowercase and a number")
    }
    //check that name is less than 8 char
    if(!user.name.match(NAME_VALIDATOR)) {

        errors.push("Name must be greater than 8 characters")
    }

    return {errors, user}
}

