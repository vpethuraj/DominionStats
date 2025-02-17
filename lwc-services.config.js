// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/main/packages/lwc-services/example/lwc-services.config.js
module.exports = {
    resources: [
        { from: 'src/client/resources/**', to: 'dist/resources/' },

        { from: 'src/client/index.html', to: 'dist/' }
    ],

    sourceDir: './src/client'
};
