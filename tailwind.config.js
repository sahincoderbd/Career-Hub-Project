/** @type {import('tailwindcss').Config} */
import {require} from 'node:module'
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#000000',
          secondary: '#ffffff',
          gradient1: '#7E90FE',
          gradient2: '#9873FF',

        },
      },
    },
    plugins:[
      require('daisyui'),
    ]
  };