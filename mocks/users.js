export const usersData = {
  e2H4aD3j1: {
    profilePhoto: {
      src:
        'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      alt: 'profile photo',
    },
    coverPhoto: {
      src:
        'https://images.pexels.com/photos/3354641/pexels-photo-3354641.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      alt: 'cover photo',
    },
    name: 'John Doe',
    username: 'John Doe',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A blanditiis voluptates ratione dolorum perspiciatis eum tenetur.',
    posts: [
      {
        date: new Date('December 17, 2019 10:24:17'),
        photos: [
          {
            src:
              'https://images.pexels.com/photos/3359742/pexels-photo-3359742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            alt: 'gallery photo',
          },
        ],
        comments: [
          {
            id: '2aH1dFG3',
            user: {
              id: '',
              name: '',
              photo: {
                src: '',
                alt: '',
              },
            },
            comment: 'Awesome photo',
          },
        ],
        likes: 32,
      },
      {
        date: new Date('December 20, 2019 10:24:17'),
        photos: [
          {
            src:
              'https://images.pexels.com/photos/2004930/pexels-photo-2004930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            alt: 'gallery photo',
          },
          {
            src:
              'https://images.pexels.com/photos/3350141/pexels-photo-3350141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            alt: 'gallery photo',
          },
        ],
        comments: [
          {
            id: 'W4f3aFS',
            user: {
              id: '',
              name: '',
              photo: {
                src: '',
                alt: '',
              },
            },
            comment: 'Cool pic',
          },
          {
            id: 'iJy5rhTss',
            user: {
              id: '',
              name: '',
              photo: {
                src: '',
                alt: '',
              },
            },
            comment: 'Amazing',
          },
        ],
        likes: 56,
      },
      {
        date: new Date('December 24, 2019 10:24:17'),
        photos: [
          {
            src:
              'https://images.pexels.com/photos/3336152/pexels-photo-3336152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            alt: 'gallery photo',
          },
        ],
        comments: [
          {
            id: '1ktRhM',
            user: {
              id: '',
              name: '',
              photo: {
                src: '',
                alt: '',
              },
            },
            comment: 'Awesome',
          },
        ],
        likes: 48,
      },
      {
        date: new Date('December 31, 2019 10:24:17'),
        photos: [
          {
            src:
              'https://images.pexels.com/photos/3210189/pexels-photo-3210189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            alt: 'gallery photo',
          },
        ],
        comments: [],
        likes: 62,
      },
    ],
  },
};
