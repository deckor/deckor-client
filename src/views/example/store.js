export default {
  scenes: [
    {
      id: 'view_1',
      path: `${process.env.PUBLIC_URL}/img/view_1.jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch: -9.81,
            yaw: 47.43,
            sceneId: 'view_2',
          },
        ],
        tags: [
          {
            pitch: -20.37,
            yaw: 5.88,
            productId: 'p1',
          },
        ],
      },
    },
    {
      id: 'view_2',
      path: `${process.env.PUBLIC_URL}/img/view_2.jpg`,
      markers: {
        navs: [],
        tags: [],
      },
    },
  ],
  products: {
    p1: {},
  },
};
