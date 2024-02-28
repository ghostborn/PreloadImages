/**
 * preloadImages()
 *
 * preload an array or object full of image URI's
 * and callback when they are all loaded with an
 * array or object of `img` objects
 *
 * Author: Galaxy-peng
 * License: MIT
 */

function preloadImages(obj, cb) {
  let loaded = 0
  let total = 0
  let images = obj instanceof Array ? [] : {}

  for (let i in obj) {
    total++
    images[i] = new Image()
    images[i].src = obj[i]
    images[i].onload = load
    images[i].onerror = load
    images[i].onabort = load
  }

  function load() {
    if (++loaded >= total) cb(images)
  }
}
