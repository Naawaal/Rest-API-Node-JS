const registerController = {
    register(res, req, next) {
        res.json({
            message: 'Register'
        });
    }
}

export default registerController;