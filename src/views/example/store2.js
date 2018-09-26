export default {
  scenes: [
    {
      id: 'view_1',
      path: `${process.env.PUBLIC_URL}/img/view_1.jpg`,
      markers: {
        navs: [
          {
            x: 2850,
            y: 1270,
          },
        ],
        tags: [
          {
            x: 2190,
            y: 1460,
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
  products: {},
};
