import {
    fromJS
} from 'immutable'
import {
    constants
} from './index'
const defaultState = fromJS({
    "title": "衡水中学,被外地人占领的高考工厂",
    "content": "<img src='//upload-images.jianshu.io/upload_images/16894636-ee3093770a4d7249.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/600/format/webp' alt='' /><p><b>在天热之后，人体也容易上火燥热，</b>体内易堆积一些杂质，因此也会产生口臭等，早吃一些有助于清理杂质、预防上火的食物，是有必要的。下面所说的这食物，既有助于刮油排脂，又对身体有很好的清洁作用，这食物是一种蔬菜，是玉米笋。它的外形看起来与常吃的玉米相像，但是它体积偏小，更像是缩小的迷你玉米。</p>"
})

export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state
    }
}