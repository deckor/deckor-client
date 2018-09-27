export default {
  scenes: [
    {
      id: 'view_1',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_1.jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch: -3.89,
            yaw: 32.95,
            sceneId: 'view_2',
          },
          {
            pitch: 0.486,
            yaw: 17.35,
            sceneId: 'view_3',
          },
          {
            pitch: -0.69,
            yaw: -28.50,
            sceneId: 'view_4',
          },
        ],
      },
    },
    {
      id: 'view_2',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_2.jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch: 0.74,
            yaw: -137.80,
            sceneId: 'view_1',
          },
          {
            pitch: -4.33,
            yaw: 23.95,
            sceneId: 'view_3',
          },
          {
            pitch: -0.77,
            yaw: -40.53,
            sceneId: 'view_4',
          },
          {
            pitch: -6.91,
            yaw: -12.79,
            sceneId: 'view_5',
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
            pitch: -0.81,
            yaw: -79.68,
            sceneId: 'view_1',
          },
          {
            pitch: -5.65,
            yaw: -113.91,
            sceneId: 'view_2',
          },
          {
            pitch: -0.70,
            yaw: 7.40,
            sceneId: 'view_4',
          },
        ],
        tags: [
          {
            pitch: -9.80,
            yaw: 35.98,
            productId: 'p1',
          },
        ],
      },
    },
    {
      id: 'view_4',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_4.jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch:  -1.76,
            yaw: 119.61,
            sceneId: 'view_3',
          },
          {
            pitch:  -1.73,
            yaw: 165.53,
            sceneId: 'view_2',
          },
          {
            pitch: -0.21,
            yaw: -152.86,
            sceneId: 'view_1',
          },
          {
            pitch:  -5.10,
            yaw: -37.53,
            sceneId: 'view_10',
          },
          {
            pitch: -15.58,
            yaw: 28.68,
            sceneId: 'view_5',
          },
          {
            pitch: -2.68,
            yaw: 40.00,
            sceneId: 'view_7',
          },
          {
            pitch: -0.77,
            yaw: 12.79,
            sceneId: 'view_8',
          },
        ],
        tags: [
          {
            pitch: -17.5,
            yaw: 1.94,
            productId: 'p1',
          },
          {
            pitch: -22.75,
            yaw: 28.73,
            productId: 'p1',
          },
          {
            pitch: -10.79,
            yaw: 51.79,
            productId: 'p1',
          },
          {
            pitch: -13.16,
            yaw: -16.43,
            productId: 'p1',
          },
          {
            pitch: -3.42,
            yaw: -16.23,
            productId: 'p1',
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
            pitch: -5.10,
            yaw: -135.27,
            sceneId: 'view_10',
          },
          {
            pitch: -24.75,
            yaw: -53.04,
            sceneId: 'view_6',
          },
          {
            pitch: -4.38,
            yaw: -30.39,
            sceneId: 'view_7',
          },
          {
            pitch: -3.11,
            yaw: -66.81,
            sceneId: 'view_8',
          },
          {
            pitch: -3.02,
            yaw: 140.81,
            sceneId: 'view_4',
          },
          {
            pitch: -0.65,
            yaw: 106.79,
            sceneId: 'view_2',
          },
        ],
        tags: [
          {
            pitch: -16.11,
            yaw: -1.9,
            productId: 'p1',
          },
          {
            pitch: -13.91,
            yaw: -61.18,
            productId: 'p1',
          },
          {
            pitch: -10.80,
            yaw: -95.42,
            productId: 'p1',
          },
          {
            pitch: -19.50,
            yaw: -78.30,
            productId: 'p1',
          },
          {
            pitch: -27.21,
            yaw: -67.03,
            productId: 'p1',
          },
          {
            pitch: -4.25,
            yaw: -79.24,
            productId: 'p1',
          },
          {
            pitch: -59.48,
            yaw: -64.67,
            productId: 'p1',
          },
        ],
      },
    },
    {
      id: 'view_6',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_6.jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch: -1.87,
            yaw: -86.86,
            sceneId: 'view_4',
          },
          {
            pitch: -0.21,
            yaw: -121.84,
            sceneId: 'view_2',
          },
          {
            pitch: -5.513,
            yaw: 112.78,
            sceneId: 'view_7',
          },
          {
            pitch: -8.48,
            yaw: 52.12,
            sceneId: 'view_8',
          },
          {
            pitch: -5.52,
            yaw: 38.93,
            sceneId: 'view_9',
          },
          {
            pitch: -2.72,
            yaw: -33.80,
            sceneId: 'view_10',
          },
        ],
        tags: [
          {
            pitch: -15.32,
            yaw: 1.94,
            productId: 'p1',
          },
          {
            pitch: -39.12,
            yaw: 6.47,
            productId: 'p1',
          },
          {
            pitch: -16.85,
            yaw: -27.72,
            productId: 'p1',
          },
          {
            pitch: -3.73,
            yaw: -27.72,
            productId: 'p1',
          },
          {
            pitch: -29.77,
            yaw: -98.00,
            productId: 'p1',
          },
          {
            pitch: -16.21,
            yaw: -95.47,
            productId: 'p1',
          },
        ],
      },
    },
    {
      id: 'view_7',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/cam_7.jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch: -6.40,
            yaw: -3.95,
            sceneId: 'view_8',
          },
          {
            pitch: -6.44,
            yaw: -14.0,
            sceneId: 'view_9',
          },
          {
            pitch: -3.61,
            yaw: -69.77,
            sceneId: 'view_10',
          },
          {
            pitch:  -29.18,
            yaw: -100.88,
            sceneId: 'view_6',
          },
          {
            pitch:  0.17,
            yaw: -111.574,
            sceneId: 'view_4',
          },
        ],
        tags: [
          {
            pitch: -20.72,
            yaw: -46.25,
            productId: 'p1', //sofa
          },
          {
            pitch: -17.00,
            yaw: -68.91,
            productId: 'p1', //center table
          },
          {
            pitch: -14.48,
            yaw: -106.08,
            productId: 'p1', //mini table
          },
          {
            pitch: -29.16,
            yaw: -152.23,
            productId: 'p1', //tv table
          },
        ],
      },
    },
    {
      id: 'view_8',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_8.jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch: -4.32,
            yaw: -110.04,
            sceneId: 'view_7',
          },
          {
            pitch:  -11.70,
            yaw: -61.96,
            sceneId: 'view_6',
          },
          {
            pitch: -13.94,
            yaw: 39.66,
            sceneId: 'view_9',
          },
          {
            pitch: 0.94,
            yaw: -36.61,
            sceneId: 'view_4',
          },
        ],
        tags: [
          {
            pitch: -29.95,
            yaw: -4.00,
            productId: 'p1',
          },
          {
            pitch: -5.90,
            yaw: -5.83,
            productId: 'p1',
          },
          {
            pitch: -25.01,
            yaw: -56.06,
            productId: 'p1',
          },
          {
            pitch: -11.35,
            yaw: -84.64,
            productId: 'p1',
          },
        ],
      },
    },
    {
      id: 'view_9',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_9.jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch: -3.77,
            yaw: -59.46,
            sceneId: 'view_7',
          },
          {
            pitch: -8.56,
            yaw: -24.31,
            sceneId: 'view_6',
          },
          {
            pitch: -5.45,
            yaw: 48.53,
            sceneId: 'view_10',
          },
        ],
        tags: [
          {
            pitch: -8.06,
            yaw: -46.53,
            productId: 'p1', //lamp
          },
          {
            pitch: -27.74,
            yaw: -56.26,
            productId: 'p1', //lamp table
          },
          {
            pitch: -18.04,
            yaw: 6.34,
            productId: 'p1',
          },
        ],
      },
    },
    {
      id: 'view_10',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_10.jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch:  -3.27,
            yaw: -2.37,
            sceneId: 'view_4',
          },
          {
            pitch: -0.08,
            yaw: -38.23,
            sceneId: 'view_3',
          },
          {
            pitch: -5.88,
            yaw: -148.75,
            sceneId: 'view_9',
          },
          {
            pitch: -5.20,
            yaw: -60.10,
            sceneId: 'view_5',
          },
          {
            pitch: -11.38,
            yaw: -83.32,
            sceneId: 'view_6',
          },
        ],
        tags: [
          {
            pitch: -7.38,
            yaw: -92.71,
            productId: 'p1', //lamp
          },
          {
            pitch: -27.19,
            yaw: -89.12,
            productId: 'p1', // mini-table
          },
          {
            pitch: -11.71,
            yaw: -121.10,
            productId: 'p1', //sofa 1
          },
          {
            pitch: -10.17,
            yaw: -64.58,
            productId: 'p1', //sofa 2
          },
          {
            pitch: -8.35,
            yaw: -77.28,
            productId: 'p1', //tv
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
        // `${process.env.PUBLIC_URL}/img/living-room/coffee_table/6.jpeg`,
        // `${process.env.PUBLIC_URL}/img/living-room/coffee_table/7.jpeg`,
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
