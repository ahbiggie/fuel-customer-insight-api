export const errorHandler = (err, req, res, next) => {
    console.error(err);

    if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({
            success: false,
            message: err.errors.map((e) => e.message).join(', '),
        });
    }

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Internal server error',
    });
};
