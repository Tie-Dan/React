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
        },

    ],
    articleList: [{
            "id": 1,
            "title": "做一个精致女孩需要注意什么1",
            "desc": "想做一个精致的女孩，一直在往这个方向努力，比如定期扔东西，比如买衣服鞋子饰品只是因为喜欢而不是因为价格衣服鞋子可以不是新款但是一定要整洁 衣服不要总是花花绿绿找到适合自己的颜色和款式买几个好搭配的经典款 ",
            imgUrl: "https://upload-images.jianshu.io/upload_images/5312008-c43678b85d80fd39.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },
        {
            "id": 2,
            "title": "做一个精致女孩需要注意什么2",
            "desc": "想做一个精致的女孩，一直在往这个方向努力，比如定期扔东西，比如买衣服鞋子饰品只是因为喜欢而不是因为价格衣服鞋子可以不是新款但是一定要整洁 衣服不要总是花花绿绿找到适合自己的颜色和款式买几个好搭配的经典款",
            imgUrl: "https://upload-images.jianshu.io/upload_images/5312008-c43678b85d80fd39.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },
        {
            "id": 3,
            "title": "做一个精致女孩需要注意什么3",
            "desc": "想做一个精致的女孩，一直在往这个方向努力，比如定期扔东西，比如买衣服鞋子饰品只是因为喜欢而不是因为价格衣服鞋子可以不是新款但是一定要整洁 衣服不要总是花花绿绿找到适合自己的颜色和款式买几个好搭配的经典款 ",
            imgUrl: "https://upload-images.jianshu.io/upload_images/5312008-c43678b85d80fd39.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        }
    ],
    recommendList: [{
            "id": 1,
            "imgUrl": "//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
        },
        {
            "id": 2,
            "imgUrl": "//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
        }
    ]
})
export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}