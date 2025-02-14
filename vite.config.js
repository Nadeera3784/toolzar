import { defineConfig } from 'vite';
import prefresh from '@prefresh/vite';
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`,
  },
  plugins: [prefresh(), VitePWA({
    mode: "development",
    registerType: 'autoUpdate',
    manifest: {
      name: "Toolzar   Open Source Tools",
      short_name: "Toolzar",
      description: "All the tools you need.",
      start_url: ".",
      scope: "/",
      display: "standalone",
      background_color: "#1C2022",
      theme_color: "#1C2022",
      lang: "English",
      screenshots: [],
      orientation: "portrait",
      share_target: {
        action: "/share",
        method: "GET",
        params: {
          title: "title",
          text: "url"
        }
      },
      shortcuts: [
        {
          "name": "Instagram Image Downloader",
          "short_name": "IG Image Downloader",
          "description": "Download Images from Instagram",
          "url": "/instagram/image",
          "icons": [
            {
              "src": "images/8d02342f-8b4c-5e7b-0b41-12e0cd32688c.webPlatform.png",
              "sizes": "150x150"
            }
          ]
        },
        {
          "name": "Instagram Video Downloader",
          "short_name": "IG Video Downloader",
          "description": "Download Videos from Instagram",
          "url": "/instagram/video",
          "icons": [
            {
              "src": "images/8d02342f-8b4c-5e7b-0b41-12e0cd32688c.webPlatform.png",
              "sizes": "150x150"
            }
          ]
        },
        {
          "name": "Instagram Reel Downloader",
          "short_name": "IG Reel Downloader",
          "description": "Download Images from Instagram",
          "url": "/instagram/reel",
          "icons": [
            {
              "src": "images/8d02342f-8b4c-5e7b-0b41-12e0cd32688c.webPlatform.png",
              "sizes": "150x150"
            }
          ]
        }
      ],
      "icons": [
        {
          "src": "images/c3290bc6-cc20-2ecc-8e98-a678907001b4.webPlatform.png",
          "sizes": "44x44",
          "type": "image/png"
        },
        {
          "src": "images/64c70b39-ed95-cb0e-3313-7aeb8eff69a7.webPlatform.png",
          "sizes": "48x48",
          "type": "image/png"
        },
        {
          "src": "images/95d7c2fc-de3a-a8b8-7b02-5e5c7e12b518.webPlatform.png",
          "sizes": "1240x600",
          "type": "image/png"
        },
        {
          "src": "images/27333677-42a7-9819-7c22-f3e5d8c5d8a8.webPlatform.png",
          "sizes": "300x300",
          "type": "image/png"
        },
        {
          "src": "images/8d02342f-8b4c-5e7b-0b41-12e0cd32688c.webPlatform.png",
          "sizes": "150x150",
          "type": "image/png"
        },
        {
          "src": "images/a9adb666-d106-b152-7e20-1fc5bd863806.webPlatform.png",
          "sizes": "88x88",
          "type": "image/png"
        },
        {
          "src": "images/14fbfb3f-832a-915f-f7b2-37aa89a36518.webPlatform.png",
          "sizes": "24x24",
          "type": "image/png"
        },
        {
          "src": "images/4307672d-10bc-dcd6-de42-ca62409a458e.webPlatform.png",
          "sizes": "50x50",
          "type": "image/png"
        },
        {
          "src": "images/01aaad95-96c6-beaa-6416-9a2237a736dd.webPlatform.png",
          "sizes": "620x300",
          "type": "image/png"
        },
        {
          "src": "images/c9a3ec0e-7c64-541c-bbc0-261e901fc1e8.webPlatform.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "images/006bd8c9-3a18-dd17-4575-7c2a52480a98.webPlatform.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "images/8ce70cb4-bce0-5d13-c2a8-ab0b03b557d7.webPlatform.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "images/4b791c82-a374-1250-d09e-3586f5a0298c.webPlatform.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "images/d03b4654-de0f-89bb-1db8-6cff85fec44d.webPlatform.png",
          "sizes": "36x36",
          "type": "image/png"
        },
        {
          "src": "images/2c8c5d1f-446d-1041-fe00-c0b993d224bb.webPlatform.png",
          "sizes": "120x120",
          "type": "image/png"
        },
        {
          "src": "images/6a59e343-94f9-f883-c005-7eda77f725da.webPlatform.png",
          "sizes": "76x76",
          "type": "image/png"
        }
      ],
    }
  })],
  resolve: {
    alias: {
      react: 'preact/compat',
    },
  }
});