//import Book from './book'
//import $ from 'jquery'
//import 'core-js/modules/es6.promimse'
// import 'core-js/modules/es6.array.iterator'
// import './index.css'

// import 'core-js/features/array/from' 
// import 'core-js/features/array/flat' 
// import 'core-js/features/set'        
// import 'core-js/features/promise' 

import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator";


$('h1').css('color', 'brown')

const lzldBtn1 = document.getElementById('lzld-btn1')
lzldBtn1.addEventListener('click', () => {
    import('./book').then(mod => {
        
        const book = new mod.default('Reader Digest')
        //console.log(mod)
        $('#title').css('color', 'lime').text(book.getTitle())
    })
})


const lzldBtn2 = document.getElementById('lzld-btn2')
                                    
lzldBtn2.addEventListener('click', () => {
    import('./newspaper').then(mod => {
        const paper = new mod.default('Malang Pos')
        $('#title').css('color', 'purple').text(paper.getName())
    })
})

// const book = new Book('Majalah nina boboooo34')
// document.write(book.getTitle())

// const arr = [10, 310, 11]
// const idx = arr.findIndex((n) => n > 20)
// document.write(`<p>${idx}</p>`)