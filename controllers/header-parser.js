const getHeaders = (req, res) => {
    res.json({
        ipaddress: req.ip,
        language: req.get("Accept-language"),
        software: req.get("User-Agent"),
    });
};

module.exports = getHeaders;