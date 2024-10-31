/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        DancingScript:['Dancing Script','cursive'],
        Playwrite:['Playwrite GB S','cursive'],
        Caveat:['Caveat','cursive'],
        Borel:['Borel','cursive'],
        Handlee:['Handlee','cursive'],
        Partrick:['Patrick Hand','cursive'],
        Sawarabi:['Sawarabi Gothic','sans-serif']
      },
      spacing: {
        nav: '109px',
      },
    },
  },
  plugins: [],
}

// .handlee-regular {
//   font-family: "Handlee", cursive;
//   font-weight: 400;
//   font-style: normal;
// }

// .sawarabi-gothic-regular {
//   font-family: "Sawarabi Gothic", sans-serif;
//   font-weight: 400;
//   font-style: normal;
// }

// .patrick-hand-regular {
//   font-family: "Patrick Hand", cursive;
//   font-weight: 400;
//   font-style: normal;
// }

// .borel-regular {
//   font-family: "Borel", cursive;
//   font-weight: 400;
//   font-style: normal;
// }


// .pacifico-regular {
//   font-family: "Pacifico", cursive;
//   font-weight: 400;
//   font-style: normal;
// }


// .caveat-<uniquifier> {
//   font-family: "Caveat", cursive;
//   font-optical-sizing: auto;
//   font-weight: <weight>;
//   font-style: normal;
// }

// .playwrite-gb-s-<uniquifier> {
//   font-family: "Playwrite GB S", cursive;
//   font-optical-sizing: auto;
//   font-weight: <weight>;
//   font-style: normal;
// }

