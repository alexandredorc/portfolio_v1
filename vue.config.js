module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Portfolio -- Alexandre Dorcival";
                return args;
            })
    },
    devServer: {
        port: 8000
    }
}