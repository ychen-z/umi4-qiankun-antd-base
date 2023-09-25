const users = [
  { id: 0, name: 'Umi', nickName: 'U', gender: 'MALE' },
  { id: 1, name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
      code: 200,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
      code: 200,
    });
  },
  'POST /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
      code: 200,
    });
  },
  'GET /api/user/getUserInfo': (req: any, res: any) => {
    res.json({
      success: true,
      data: {
        name: 'z',
      },
      code: 200,
      errorCode: 0,
    });
  },
};
