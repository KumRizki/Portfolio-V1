import project1 from "./assets/project1.png"
import tedx from "./assets/tedxapu.png"
import kuminjapan from "./assets/kuminjapan.png"

export default [
    {
        id: 1,
        img: {
            src: tedx, 
            alt: "TedXRitsumeikan APU website screenshot"
        },
        heading: "TedXRitsumeikan APU",
        description: "Part of the Web-Development team in TedXAPU, mostly tasked with creating features and maintaining the TEDxAPU website."
    },
    {
        id: 2,
        img: {
            src: kuminjapan, 
            alt: "Screenshot of a japan travel website"
        },
        heading: "Kum In Japan",
        description: "A travel journal site, built in React, which highlights points of interests in Japan that I've visited."
    },
    {
        id: 3,
        img: {
            src: project1, 
            alt: "Recipe Genie"
        },
        heading: "Recipe Genie",
        description: "A work-in-progress recipe generator web app which allows users to input ingredients to an AI and output available recipes."
    }
];