import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import SVG from 'vite-svg-loader'
// doc  https://github.com/jpkleemans/vite-svg-loader   
// import presetAttributify  from '@unocss/preset-attributify'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: 
    [
      vue(),
      // Unocss({
      //   presets: [
      //     presetAttributify({ /* options */ }),
      //     // ...other presets
      //   ], 
      // })
      Unocss({
        theme: {
          fontFamily: {
            sans: '"Inter", Inter var,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
          },
        },
        presets: [
          presetIcons({
            extraProperties: {
              'display': 'inline-block',
              'height': '1.2em',
              'width': '1.2em',
              'vertical-align': 'text-bottom',
            },
          }),
          presetAttributify(),
          presetUno(),
        ],
      }),
      SVG({
        svgo: false,
      }),
      Icons({
        defaultClass: 'inline',
        defaultStyle: 'vertical-align: sub;',
      }),
    ]
})
