//Middleware for role-based permissions
exports.roleCheck = (roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden, insufficient permissions" });
        }
        next();
    };
};
