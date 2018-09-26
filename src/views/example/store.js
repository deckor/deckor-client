export default {
  scenes: [
    {
      id: 'view_1',
      panorama: `${process.env.PUBLIC_URL}/img/view_1.jpg`,
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
      panorama: `${process.env.PUBLIC_URL}/img/view_2.jpg`,
      hfov: 120,
      markers: {
        navs: [],
        tags: [],
      },
    },
  ],
  products: {
    p1: {
      id: 'p1',
      imageCollectionUrl: `${process.env.PUBLIC_URL}/img/p1-detail.png`,
      name: 'Spacewood Mayflower Engineering Wood Queen Box Bed (Finish Color - Brown)',
      price: 14499,
      averageRating: 3.8,
      totalRatings: 2232,
      totalReviews: 524,
      emi: 2417,
      offers: [
        {
          id: 1,
          title: 'Bank Offer',
          description: '5% off* on EMI transactions with HDFC Bank Credit Cards',
          extraInfo: 'T&C',
          extraInfoLink: '',
        },
        {
          id: 2,
          title: 'Bank Offer',
          description: '5% off* on EMI transactions with HDFC Bank Credit Cards',
          extraInfo: 'T&C',
          extraInfoLink: '',
        },
        {
          id: 3,
          title: 'Bank Offer',
          description: '5% off* with Axis Bank Buzz Credit Card',
          extraInfo: 'T&C',
          extraInfoLink: '',
        },
      ],
    },
  },
};
