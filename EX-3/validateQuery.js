function validateQuery(req, res, next) {

    const { minCredits, maxCredits } = req.query;

    if (minCredits && isNaN(minCredits)) {
        return res.status(400).json({
            error: "minCredits must be a number"
        });
    }

    if (maxCredits && isNaN(maxCredits)) {
        return res.status(400).json({
            error: "maxCredits must be a number"
        });
    }

    if (
        minCredits &&
        maxCredits &&
        Number(minCredits) > Number(maxCredits)
    ) {
        return res.status(400).json({
            error: "Invalid credit range"
        });
    }

    next();
}

module.exports = validateQuery;