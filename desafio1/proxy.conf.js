const PROXY_CONFIG = [
    {
        context:['/apiphp'],
        target: 'http://localhost:80',
        secure:false,
        pathRewrite:{'^/apiphp':''}
    }
]

module.exports = PROXY_CONFIG;