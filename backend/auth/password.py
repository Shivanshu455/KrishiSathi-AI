import bcrypt


def hash_password(password: str):

    salt = bcrypt.gensalt()

    return bcrypt.hashpw(
        password.encode(),
        salt
    ).decode()


def verify_password(
    plain_password: str,
    hashed_password: str
):

    return bcrypt.checkpw(
        plain_password.encode(),
        hashed_password.encode()
    )