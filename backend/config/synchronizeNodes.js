const currentNodeUrl = process.argv[3];
// const axios = require("axios");
const { response } = require("express");
const rp = require("request-promise");

function SynchronizeNodes() {
  // let nodes = [
  //   "http://localhost:3001",
  //   "http://localhost:3002",
  //   "http://localhost:3003",
  //   "http://localhost:3004",
  //   "http://localhost:3005",
  //   "http://localhost:3006",
  //   "http://localhost:3007",
  //   "http://localhost:3008",
  //   "http://localhost:3009",
  // ];
  // const endpoint = "/register-and-broadcast-node";

  if (currentNodeUrl != "http://localhost:3001") {
    const nodeRequestOption = {
      uri: "http://localhost:3001" + "/register-and-broadcast-node",
      method: "post",
      body: {
        newNodeUrl: currentNodeUrl,
      },
      json: true,
    };
    const nodeResponse = rp(nodeRequestOption);
    Promise.resolve(nodeResponse).then((response) => {
      // consensus algorithm
      // every time a nodee stated, consensus algortihem triggered
      const nodeConsensus = {
        uri: currentNodeUrl + "/consensus",
        method: "get",
        json: true,
      };
      const nodeConsensusResponse = rp(nodeConsensus);
      Promise.resolve(nodeConsensusResponse).then((response) => {
        // console.log(response);
        //
      });
      console.log(response);
    });
  }
}

module.exports = SynchronizeNodes;

// axios({
//   method: "post",
//   url: "/user/12345",
//   data: {
//     firstName: "Fred",
//     lastName: "Flintstone",
//   },
// });
