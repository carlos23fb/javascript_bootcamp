// Coding Challenge #2
// For this challenge you will actually have to watch the video! Then, build the image
// loading functionality that I just showed you on the screen.
// Your tasks:
// Tasks are not super- descriptive this time, so that you can figure out some stuff by
// yourself.Pretend you're working on your own 😉


// PART 2




// Test data: Images in the img folder.Test the error handler by passing a wrong
// image path.Set the network speed to “Fast 3G” in the dev tools Network tab,
//     otherwise images load too fast
// GOOD LUCK 😀


// PART 1
// TODO: 1. Create a function 'createImage' which receives 'imgPath' as an input.
// This function returns a promise which creates a new image(use
// document.createElement('img')) and sets the.src attribute to the
// provided image path



// TODO: 2. When the image is done loading, append it to the DOM element with the
// 'images' class, and resolve the promise.The fulfilled value should be the
// image element itself.In case there is an error loading the image(listen for
// the'error' event), reject the promise


const container = document.getElementById('imageDiv')


const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img')

        img.setAttribute('src', imgPath)

        img.addEventListener('load', function () {
            container.append(img)
            resolve(img)
        })
        img.addEventListener('error', function () {
            reject(new Error('Image not found'))
        })

    })

}


const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve()
        }, 1000 * seconds)
    })
}


let currentImg;

// TODO: 4. Consume the promise using.then and also add an error handler

createImage('img/img-1.jpg')
    .then(res => {
        console.log(res)

        currentImg = res

        //TODO: 5. After the image has loaded, pause execution for 2 seconds using the 'wait'
        // function we created earlier

        return wait(2)


    }).then(() => {
        console.log('Waited for 2 seconds')

        // TODO: 6. After the 2 seconds have passed, hide the current image(set display CSS
        // property to 'none'), and load a second image(Hint: Use the image element
        // returned by the 'createImage' promise to hide the current image.You will
        // need a global variable for that 😉)

        currentImg.style.display = 'none'

        return createImage('img/img-2.jpg')

        // TODO: 7. After the second image has loaded, pause execution for 2 seconds again

    }).then((img) => {

        currentImg = img

        return wait(2)

    }).then(() => {

        //  TODO: 8. After the 2 seconds have passed, hide the current image

        currentImg.style.display = 'none'

    })
    .catch(err => console.log(err))
