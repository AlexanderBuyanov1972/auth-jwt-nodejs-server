module.exports = class UserDto {
    email;
    username;
    roles;
    isActivated;

    constructor(model) {
        this.email = model.email;
        this.username = model.username;
        this.roles = model.roles;
        this.isActivated = model.isActivated;
    }
}