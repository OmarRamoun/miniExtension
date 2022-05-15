import { rest } from "msw";

const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}`;

export const handlers = [
  // GET "Joe James" Student Classes
  rest.get(`${baseURL}/Students`, (req, res, ctx) => {
    req.url.searchParams.append("filterByFormula", '{Name} = "Joe James"');
    return res(
      ctx.status(200),
      ctx.json({
        records: [
          {
            id: "recOHdRm6JAuLpNFD",
            createdTime: "2021-08-11T16:21:34.000Z",
            fields: {
              Name: "Joe James",
              Classes: ["recJKCgej9ihrL2pK"],
            },
          },
        ],
      })
    );
  }),
  // GET "wrong name" Student Classes
  rest.get(`${baseURL}/Students`, (req, res, ctx) => {
    req.url.searchParams.append("filterByFormula", '{Name} = "wrong name"');
    return res(
      ctx.status(200),
      ctx.json({
        records: [],
      })
    );
  }),

  // GET "CS104" Class Data (based on code: recJKCgej9ihrL2pK)
  rest.get(`${baseURL}/Classes/recJKCgej9ihrL2pK`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: "recJKCgej9ihrL2pK",
        createdTime: "2021-08-11T15:33:14.000Z",
        fields: {
          Students: ["recDImTGoac20jjl6", "recOHdRm6JAuLpNFD"],
          Name: "CS 104",
        },
      })
    );
  }),

  // GET data of student with code "recDImTGoac20jjl6" who is the colleague of Joe James (since the id of Joe James is "recOHdRm6JAuLpNFD")
  rest.get(`${baseURL}/Students/recDImTGoac20jjl6`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: "recDImTGoac20jjl6",
        createdTime: "2021-08-11T15:31:32.000Z",
        fields: {
          Name: "Khalid",
          Classes: ["rectGHWsZVmkeRwGh", "recJKCgej9ihrL2pK"],
        },
      })
    );
  }),
];
