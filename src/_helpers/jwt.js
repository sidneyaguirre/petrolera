import jwt from 'jsonwebtoken'

export function jwtencode(req) {
    let jwtoken = jwt.sign({
        user:req
    }, 'ing-web-secret');

    return jwtoken
}

export function jwtdecode(res) {
    return jwt.decode(JSON.parse(res))
}