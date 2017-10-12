import AV from 'leancloud-storage';
var APP_ID = 'qDUQr0EmHHn3HOIqb3Re0IHa-gzGzoHsz';
var APP_KEY = 'w2TRHW0KHUkt5mVHtgp9wa2s';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
export default {
    // 首页滚动图
    getScrollView() {
        var query = new AV.Query('MainScroll');
        query.descending('createdAt');
        query.limit(1)
        return query.find()
    },
    // 首页标签视图
    getAllIsland(limitNumber) {
        var query = new AV.Query('Theme')
        query.limit(limitNumber)
        return query.find()
    },
    // 首页推荐列表
    getRecommenList() {
        var query = new AV.Query('Product')
         query.equalTo('isRecommend', true)
        query.descending('updatedAt')
        query.select(['place', 'name', 'startDate', 'type', 'onleyId', 'price', 'describe', 'imageArray','countNumber'])
        return query.find()
    },
}