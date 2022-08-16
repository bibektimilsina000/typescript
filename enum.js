var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["read_only_user"] = 2] = "read_only_user";
})(Role || (Role = {}));
console.warn(Role.manager);
