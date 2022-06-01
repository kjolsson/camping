const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
transpileDependencies: true,
publicPath: process.env.NODE_ENV === "production" ? "/motala_camping_grupp_3/" : "/"
})