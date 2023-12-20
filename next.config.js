/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return [
          {
            source: "/",
            destination: "/pages/landingPage/landingPage",
          },

          {
            source: "/aboutUs",
            destination: "/pages/aboutUs/aboutUs",
          },

          {
            source: "/contactUs",
            destination: "/pages/contactUs/contactUs"
          },

          {
            source: "/SignUp",
            destination: "/pages/userType/userType"
          },

          {
            source: "/SignIn",
            destination: "/pages/signIn/signIn"
          },

          {
            source: "/Credentials",
            destination: "/pages/brandsCreds/brandsCreds"
          },

          {
            source: "/creatorProfile",      
            destination: "/pages/creatorProfile/creatorProfile"
          },


          {
            source: "/static/media/:path*",
            destination: "/static/media/:path*",
        },

        ];
      },

      webpack(config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|mp4|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'static/media',
                        name: '[name].[ext]',
                    },
                },
            ],
        });

        return config;
    },

    devServer: {
      host: '0.0.0.0',
  },
}
   
module.exports = nextConfig;
