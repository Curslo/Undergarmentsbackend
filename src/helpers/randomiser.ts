import crypto from "crypto";

export const random = () => crypto.randomBytes(128).toString("base64");

const sicret = "RICARD-REST-API"

export const authentication = (salt: string, pass: string) => {
    return crypto.createHmac('sha256', [salt, pass].join('/').update(sicret).digest('hex'))
}

