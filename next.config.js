/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return [
          {
            source: "/explore",
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
            source: "/message",      
            destination: "/pages/message/sbChild"
          },

          {
            source: "/creator",
            destination: "/pages/creator/creator"
          },

          {
            source: "/brand",
            destination: "/pages/brand/brand"
          },

          {
            source: "/campaign",
            destination: "/pages/campaign/campaign"
          },

          {
            source: "/chat",
            destination: "/pages/chat/chat"
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
