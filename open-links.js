'use strict'

// Populate this array with the links to the projects on github pages...
var links = [
    'https://n-dori.github.io/Mine-Sweeper/',
    'https://mynameisavi.github.io/minesweeperPrototype/',
    'https://da26cohen.github.io/first-sprint/',
    'https://da26cohen.github.io/first-sprint/',
    'https://github.com/ShaharSaadon',
    'https://github.com/talkatar/sprint-cajan-23/settings/pages',
    'https://github.com/RazKadosh',
    'https://github.com/Idotalbi',
    'https://ofekdov.github.io/mine-sweeper/',
    'https://amitspiro.github.io/mine-sweeper/',
    'https://adir720.github.io/Sprint1Adir1/',
    'https://dyanai1993.github.io/Minesweeper-CA-sprint1/',
    'https://estherkaptsan.github.io/aliens/',
    'https://nadavwohl.github.io/minesweepr/',
    'https://miritgispan.github.io/mine-sweeper',
    'https://leon641.github.io/mine-sweeper/',
]

// This is activated from the button in index.html
function openUrls() {
    links.forEach(link => {
        console.log('link: ', link)
        window.open(link, '_blank')
    })
}