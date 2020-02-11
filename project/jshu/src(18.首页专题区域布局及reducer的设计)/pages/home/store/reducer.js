import {
    fromJS
} from 'immutable'
const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4860/8aec44af6460ad75f6bb56caa9ab501c0cfb2ba4.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }, {
        id: 2,
        title: '手绘',
        imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4860/8aec44af6460ad75f6bb56caa9ab501c0cfb2ba4.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }, {
        id: 3,
        title: '大跳',
        imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4860/8aec44af6460ad75f6bb56caa9ab501c0cfb2ba4.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }]
})
export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}