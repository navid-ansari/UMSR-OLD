import { Response } from "express";

const expectedResp = {
  success: true,
  data: [
    {
      _id: "6217dfbc071dd40058ac96f1",
      menuId: 1001,
      menuName: "HOME",
      menuLabel: "Home",
      childMenu: [],
      menuPath: "/",
    },
    {
      _id: "6217e04f071dd40058ac96f2",
      menuId: 1002,
      menuName: "SIGNIN",
      menuLabel: "Sign In",
      childMenu: [],
      menuPath: "/sign-in",
    },
  ],
  message: "Menu List",
};

export const getMockRes = (): Partial<Response> => {
  const res: any = {};
  res.json = jest.fn().mockName('Json Fn').mockReturnValue(res);
  res.status = jest.fn().mockName('Status Fn').mockReturnValue(res);
  return res;
};

/*export const getMockRes = (): Partial<Response> => {
  const json = jest.fn().mockName('Json Fn')
  const status = jest.fn().mockName('Status Fn')
  return {status, json};
};*/