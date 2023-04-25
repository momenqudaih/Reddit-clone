const logoutController = (req, res) => {
    res.clearCookie('token').redirect('/home');
};

module.exports = { logoutController };
