const container = document.querySelector('.images')



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


const loadNPause = async function (path) {

    let currentImg;

    try {

        let img = await createImage(path)


        await wait(2)

        console.log('Waited 2 seconds')

        img.style.display = 'none'

        img = await (createImage('img/img-2.jpg'))


        await wait(2)

        console.log('Waited another 2 seconds')

        img.style.display = 'none'


    } catch (err) {
        console.log(err)
    }
}

// loadNPause('img/img-1.jpg')



// TODO 1. Create an async function 'loadAll' that receives an array of image paths
// 'imgArr'


const loadAll = async function (arr) {

    // TODO 2. Use.map to loop over the array, to load all the images with the
    // 'createImage' function (call the resulting array 'imgs')

    const imgs = await arr.map( async img => await createImage(img))


    // TODO 3. Check out the 'imgs' array in the console! Is it like you expected ?

    // console.log(imgs)


    //TODO 4. Use a promise combinator function to actually get the images from the array 😉

    const allImages = await Promise.all(imgs)

    console.log(allImages)

    // TODO 5. Add the 'parallel' class to all the images(it has some CSS styles)

    allImages.forEach(img => {
        
        img.classList.add('parallel')
    })

}


loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])