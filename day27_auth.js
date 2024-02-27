const jwt = require('jsonwebtoken');

function authenticateAndAuthorize(roles) {
    return function(req, res, next) {
        // Get the token from request headers
        const token = req.header('Authorization');

        if (!token) {
            return res.status(401).json({ message: 'Authorization token not provided' });
        }

        try {
            // Verify token
            const decoded = jwt.verify(token, 'your_secret_key');
            
            // Check if user has required role
            if (!roles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Unauthorized' });
            }

            // Attach user information to request object
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token' });
        }
    };
}

module.exports = authenticateAndAuthorize;
