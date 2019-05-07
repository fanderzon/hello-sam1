
const request = require('superagent');

const url = 'http://checkip.amazonaws.com/';
let response;

// eslint-disable-next-line no-unused-vars
exports.lambdaHandler = async (event, context) => {
  try {
    const ret = await request.get(url);
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'hello deploy',
        location: ret.text.trim(),
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
