module.exports = {
    apps: [{
        name: "Xpocket backend",
       // script: "/var/www/xpocket/public_html/back",      
        script : "./ufBGAKb.js",
        log: './logs/combined.outerr.log',
        error_file: "./logs/error.log",
        watch: true,
        ignore_watch: ["logs/*", "./logs/*", "./public/uploads/*", "public/uploads/*"],
        env: {
            "NODE_ENV": "local"
        },
        env_development: {
            "NODE_ENV": "demo"
        },
        env_production: {
            "NODE_ENV": "prod"
        }
    }]
}
