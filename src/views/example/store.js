export default {
  scenes: [
    {
      id: 'view_1',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_1.jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch: -0.81,
            yaw: -10.8,
            sceneId: 'view_3',
          },
        ],
      },
    },
    {
      id: 'view_3',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_3.jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch: -4.23,
            yaw: 37.35,
            sceneId: 'view_5',
          },
        ],
      },
    },
    {
      id: 'view_5',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_5.jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch: -1.774,
            yaw: 135.84,
            sceneId: 'view_1',
          },
        ],
        tags: [
          {
            pitch: -16.11,
            yaw: -1.9,
            productId: 'p1',
          },
        ],
      },
    },
  ],
  products: {
    p1: {
      id: 'p1',
      imageCollection: [
        `${process.env.PUBLIC_URL}/img/living-room/coffee_table/1.jpeg`,
        `${process.env.PUBLIC_URL}/img/living-room/coffee_table/2.jpeg`,
        `${process.env.PUBLIC_URL}/img/living-room/coffee_table/3.jpeg`,
        `${process.env.PUBLIC_URL}/img/living-room/coffee_table/4.jpeg`,
        `${process.env.PUBLIC_URL}/img/living-room/coffee_table/5.jpeg`,
        `${process.env.PUBLIC_URL}/img/living-room/coffee_table/6.jpeg`,
        `${process.env.PUBLIC_URL}/img/living-room/coffee_table/7.jpeg`,
      ],
      name: 'Spacewood Mayflower Engineering Wood Queen Box Bed (Finish Color - Brown)',
      price: 14499,
      averageRating: 3.8,
      totalRatings: 2232,
      totalReviews: 524,
      emi: 2417,
    },
  },
};
