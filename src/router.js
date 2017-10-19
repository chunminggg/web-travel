const routers = [{
    path: '/',
    meta: {
        title: '超想去旅行'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},
{
    path: '/canvas',
    meta: {
        title: '绘图专用'
    },
    component: (resolve) => require(['./views/canvas.vue'], resolve)
}
];
export default routers;