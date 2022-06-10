    // const HTML = (myJsonStringEngineer)=>{
    
    // console.log('HTML deconstructArray: ' + deconstructArray)
    const HTML = (engineerAnswer)=>{

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    .center {
        text-align: center;
        border: 3px solid green;
        background-color: lightgrey;
        width: 300px;
        padding: 50px;
        margin: auto;
        /* <p>To horizontally center a block element (like div), use margin: auto;</p> */

    }
    </style>
    </head>
    <body>

    <h2>PARADISE</h2>

    <div class="center">
    <p>This Manager's name is.</p>
    </div>

    <div class="center">
    <p>This text is centered.</p>
    ${engineerAnswer.Engineer}
    </div>

    <div class="center">
    <p>This text is centered.</p>
    ${engineerAnswer.Engineer}
    </div>

    <div class="center">
    <p>The next Team member is:</p>
    undefined
    </div>


    </body>
    </html>
    `
};


module.exports = HTML;

// <!DOCTYPE html>
// <html>
// <head>
// <style>
// .center {
//     text-align: center;
//     border: 3px solid green;
//     background-color: lightgrey;
//     width: 300px;
//     padding: 50px;
//     margin: auto;
//     /* <p>To horizontally center a block element (like div), use margin: auto;</p> */

// }
// </style>
// </head>
// <body>

// <h2>PARADISE</h2>

// <div class="center">
// <p>This Manager's name is.</p>
// </div>

// <div class="center">
// <p>This text is centered.</p>
// undefined
// </div>

// <div class="center">
// <p>This text is centered.</p>
// undefined
// </div>

// <div class="center">
// <p>The next Team member is:</p>
// undefined
// </div>


// </body>
// </html>
