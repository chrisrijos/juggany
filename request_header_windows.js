/* 
  sample: 
    modify the user-agent in requests toward httpbin.org
  test:
    curl http://httpbin.org/user-agent --proxy http://127.0.0.1:8001
*/
module.exports = {
  *beforeSendRequest(requestDetail) {
     const newRequestOptions = requestDetail.requestOptions;
     newRequestOptions.headers['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36';
     return {
       requestOptions: newRequestOptions
     };
  },
};
