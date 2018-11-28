import products from './productsStore';

export default {
  scenes: [
    {
      id: 'view_1',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_1 (1).jpg`,
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
          {
            pitch: -0.76,
            yaw: -3.32,
            sceneId: 'view_7',
          },
          {
            pitch: -0.13,
            yaw: -17.07,
            sceneId: 'view_8',
          },
        ],
      },
    },
    {
      id: 'view_2',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_2 (1).jpg`,
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
          {
            pitch: 0.34,
            yaw: -8.39,
            sceneId: 'view_8',
          },
        ],
      },
    },
    {
      id: 'view_3',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_3 (2).jpg`,
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
            productId: 'sofa',
          },
        ],
      },
    },
    {
      id: 'view_4',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_4 (1).jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch: -1.76,
            yaw: 119.61,
            sceneId: 'view_3',
          },
          {
            pitch: -1.73,
            yaw: 165.53,
            sceneId: 'view_2',
          },
          {
            pitch: -0.21,
            yaw: -152.86,
            sceneId: 'view_1',
          },
          {
            pitch: -5.10,
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
          {
            pitch: 0,
            yaw: -8.2712,
            sceneId: 'view_9',
          }
        ],
        tags: [
          {
            pitch: -17.5,
            yaw: 1.94,
            productId: 'sofa',
          },
          {
            pitch: -22.75,
            yaw: 28.73,
            productId: 'round_side_table',
          },
          {
            pitch: -10.79,
            yaw: 51.79,
            productId: 'tv_unit',
          },
          {
            pitch: -13.16,
            yaw: -16.43,
            productId: 'side_table',
          },
          {
            pitch: -3.42,
            yaw: -16.23,
            productId: 'lamp',
          },
        ],
      },
    },
    {
      id: 'view_5',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_5 (1).jpg`,
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
            productId: 'tv_unit',
          },
          {
            pitch: -13.91,
            yaw: -61.18,
            productId: 'sofa',
          },
          {
            pitch: -10.80,
            yaw: -95.42,
            productId: 'sofa',
          },
          {
            pitch: -19.50,
            yaw: -78.30,
            productId: 'coffee_table',
          },
          {
            pitch: -27.21,
            yaw: -67.03,
            productId: 'modern_lamp',
          },
          {
            pitch: -4.25,
            yaw: -79.24,
            productId: 'lamp',
          },
          {
            pitch: -59.48,
            yaw: -64.67,
            productId: 'round_side_table',
          },
        ],
      },
    },
    {
      id: 'view_6',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_6 (1).jpg`,
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
            pitch: 0,
            yaw: 18.629,
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
            productId: 'sofa',
          },
          {
            pitch: -39.12,
            yaw: 6.47,
            productId: 'coffee_table',
          },
          {
            pitch: -16.85,
            yaw: -27.72,
            productId: 'side_table',
          },
          {
            pitch: -3.73,
            yaw: -27.72,
            productId: 'lamp',
          },
          {
            pitch: -29.77,
            yaw: -98.00,
            productId: 'round_side_table',
          },
          {
            pitch: -16.21,
            yaw: -95.47,
            productId: 'modern_lamp',
          },
        ],
      },
    },
    {
      id: 'view_7',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_7 (1).jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch: -6.40,
            yaw: -3.95,
            sceneId: 'view_8',
          },
          {
            pitch:  0,
            yaw: -32.8423,
            sceneId: 'view_9',
          },
          {
            pitch: -3.61,
            yaw: -69.77,
            sceneId: 'view_10',
          },
          {
            pitch: -29.18,
            yaw: -100.88,
            sceneId: 'view_6',
          },
          {
            pitch: 0.17,
            yaw: -111.574,
            sceneId: 'view_4',
          },
          {
            pitch: -0.12,
            yaw: -121.65,
            sceneId: 'view_1',
          },
        ],
        tags: [
          {
            pitch: -20.72,
            yaw: -46.25,
            productId: 'sofa',
          },
          {
            pitch: -17.00,
            yaw: -68.91,
            productId: 'coffee_table',
          },
          {
            pitch: -14.48,
            yaw: -106.08,
            productId: 'round_side_table',
          },
          {
            pitch: -5.54,
            yaw: -104.85,
            productId: 'modern_lamp',
          },
          {
            pitch: -29.16,
            yaw: -152.23,
            productId: 'tv_unit',
          },
        ],
      },
    },
    {
      id: 'view_8',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_8 (1).jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch: -4.32,
            yaw: -110.04,
            sceneId: 'view_7',
          },
          {
            pitch: -11.70,
            yaw: -61.96,
            sceneId: 'view_6',
          },
          {
            pitch: 0,
            yaw: 20.510,
            sceneId: 'view_9',
          },
          {
            pitch: 0.94,
            yaw: -36.61,
            sceneId: 'view_4',
          },
          {
            pitch: -0.37,
            yaw: -57.60,
            sceneId: 'view_2',
          },
        ],
        tags: [
          {
            pitch: -29.95,
            yaw: -4.00,
            productId: 'side_table',
          },
          {
            pitch: -5.90,
            yaw: -5.83,
            productId: 'lamp',
          },
          {
            pitch: -25.01,
            yaw: -56.06,
            productId: 'sofa',
          },
          {
            pitch: -11.35,
            yaw: -84.64,
            productId: 'tv_unit',
          },
        ],
      },
    },
    {
      id: 'view_9',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_9 (1).jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch: 0,
            yaw: -53.535,
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
          {
            pitch: 0,
            yaw: -95.376,
            sceneId: 'view_8',
          },
          {
            pitch: 0,
            yaw: 19.6276,
            sceneId: 'view_4',
          },
        ],
        tags: [
          {
            pitch: -8.06,
            yaw: -46.53,
            productId: 'lamp',
          },
          {
            pitch: -27.74,
            yaw: -56.26,
            productId: 'side_table',
          },
          {
            pitch: -18.04,
            yaw: 6.34,
            productId: 'sofa',
          },
        ],
      },
    },
    {
      id: 'view_10',
      panorama: `${process.env.PUBLIC_URL}/img/living-room/Cam_10 (1).jpg`,
      hfov: 120,
      markers: {
        navs: [
          {
            pitch: -3.27,
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
            productId: 'lamp', //lamp
          },
          {
            pitch: -27.19,
            yaw: -89.12,
            productId: 'side_table', // mini-table
          },
          {
            pitch: -11.71,
            yaw: -121.10,
            productId: 'sofa', //sofa 1
          },
          {
            pitch: -10.17,
            yaw: -64.58,
            productId: 'sofa', //sofa 2
          },
          {
            pitch: -8.35,
            yaw: -77.28,
            productId: 'tv_unit', //tv
          },
        ],
      },
    },
  ],
  products,
};

export const SCENE_TO_LOOK_AT = {
  view_2: {
    view_1: {
      pitch: 0.262,
      yaw: 91.69,
    },
    view_3: {
      pitch: -1.449,
      yaw: 138.767
    },
    view_4: {
      pitch: 0.657,
      yaw: 151.92
    },
    view_5: {
      pitch: -2.900,
      yaw: 133.11,
    },
    view_8: {
      pitch: -2.900,
      yaw: 133.11,
    },
  },
  view_3: {
    view_1: {
      pitch: 3.675,
      yaw: 116.70,
    },
    view_2: {
      pitch: 7.561,
      yaw: 116.82,
    },
    view_4: {
      pitch: -0.105,
      yaw: 161.739,
    },
  },
  view_4: {
    "view_1": {
      pitch: 1.476,
      yaw: -10.500,
    },
    "view_2": {
      pitch: 0.626,
      yaw: -44.61,
    },
    "view_3": {
      pitch: 0.394,
      yaw: -54.49,
    },
    "view_5": {
      "pitch": 0.675,
      "yaw": -152.829,
    },
    "view_6": {
      "pitch": 1.501,
      "yaw": -132.27,
    },
    "view_7": {
      "pitch": -2.865,
      "yaw": -133.267,
    },
    "view_8": {
      "pitch": -0.859,
      "yaw": -147.380,
    },
    "view_9": {
      "pitch": 0,
      "yaw": -159.358,
    },
    "view_10": {
      "pitch":  1.654,
      "yaw": -177.119,
    }
  },
  view_5: {
    "view_2": {
      "pitch":  -3.993,
      "yaw": -73.712,
    },
    "view_4": {
      "pitch": -20.328,
      "yaw": -50.970,
    },
    "view_10": {
      "pitch": -6.730,
      "yaw": 41.030,
    }
  },
  view_6: {
    "view_5": {
      "pitch": -18.065,
      "yaw": 79.56,
    },
    "view_7": {
      "pitch": -30.144,
      "yaw": -81.73,
    },
    "view_8": {
      "pitch": -10.526,
      "yaw": -130.470,
    },
    "view_9": {
      "pitch":  -21.350,
      "yaw": -155.120,
    },
    "view_10": {
      "pitch":  -15.082,
      "yaw": 142.377,
    }
  },
  view_7: {
    "view_1": {
      "pitch": -5.240,
      "yaw": 70.418,
    },
    "view_4": {
      "pitch": -4.152,
      "yaw": 75.19,
    },
    "view_5": {
      "pitch": -9.253,
      "yaw": 62.689,
    },
    "view_6": {
      "pitch": -4.605,
      "yaw": 89.564,
    },
    "view_8": {
      "pitch": -4.635,
      "yaw": 135.770,
    },
    "view_9": {
      "pitch": -2.000,
      "yaw": 126.781,
    }
  },
  view_8: {
    "view_1": {
      "pitch": -3.846,
      "yaw": 130.506,
    },
    "view_2": {
      "pitch": -3.846,
      "yaw": 130.506,
    },
    "view_4": {
      "pitch": -3.846,
      "yaw": 130.506,
    },
    "view_5": {
      "pitch": -11.492,
      "yaw": 105.69,
    },
    "view_6": {
      "pitch": -11.492,
      "yaw": 105.69,
    },
    "view_7": {
      "pitch": -1.658,
      "yaw": 93.550,
    },
    "view_9": {
      pitch: 0,
      yaw: 170.644,
    },
  },
  view_9:{
    "view_4": {
      "pitch": 0,
      "yaw": 167.715,
    },
    "view_6": {
      "pitch": 0,
      "yaw": 136.882,
    },
    "view_7": {
      "pitch": -5.238,
      "yaw": 127.474,
    },
    "view_8": {
      "pitch": 0,
      "yaw":  88.597,
    },
    "view_10": {
      "pitch": -7.608,
      "yaw": -164.464,
    }
  },
  view_10: {
    "view_4": {
      "pitch": 0,
      "yaw": 175.843,
    },
    "view_5": {
      "pitch": 0,
      "yaw": 110.60897,
    },
    "view_6": {
      "pitch": 0,
      "yaw": 94.8489,
    },
    "view_7": {
      "pitch": 0,
      "yaw": 94.8489,
    },
    "view_9": {
      "pitch": 0,
      "yaw": 42.4610
    }
  }
};
