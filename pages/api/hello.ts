import fetch from 'node-fetch';

export default async (req, res) => {

  const result = await fetch('https://api.linkedin.com/v2/me',
    {
      headers: {
        'Authorization': `Bearer AQTbd6BGGQ0RDfJSA2txluD3BVh-6pnp8CR3_jRYlcGBQgKS7G5Ur5Xs8PXpsGbONMXLTAUfSkF0veG-FYcoSSiI_4w-kiIobyeX0CGNVbjux6IDnfk6vIHfaDiZqpM3d5235xDm8uSBelLSGgai9PzqTAoxIXljdDQs3-6FJ2yvA0T9vKoF4rHQDN0Ubg`,
      }
    }
  ).then((r) => r.clone().json())
  console.log(result)
  // Copy code
  // This sample code will make a request to LinkedIn's API to retrieve and print out some
  // basic profile information for the user whose access token you provide.

  // const https = require('https');

  // Replace with access token for the r_liteprofile permission
  // const accessToken = 'AQTbd6BGGQ0RDfJSA2txluD3BVh-6pnp8CR3_jRYlcGBQgKS7G5Ur5Xs8PXpsGbONMXLTAUfSkF0veG-FYcoSSiI_4w-kiIobyeX0CGNVbjux6IDnfk6vIHfaDiZqpM3d5235xDm8uSBelLSGgai9PzqTAoxIXljdDQs3-6FJ2yvA0T9vKoF4rHQDN0Ubg';
  // const options = {
  //   host: 'api.linkedin.com',
  //   path: '/v2/me',
  //   method: 'GET',
  //   headers: {
  //     'Authorization': `Bearer ${accessToken}`,
  //     'cache-control': 'no-cache',
  //     'X-Restli-Protocol-Version': '2.0.0'
  //   }
  // };

  // const profileRequest = https.request(options, function (res) {
  //   let data = '';
  //   res.on('data', (chunk) => {
  //     data += chunk;
  //   });

  //   res.on('end', () => {
  //     const profileData = JSON.parse(data);
  //     console.log(JSON.stringify(profileData, 0, 2));
  //   });
  // });
  // profileRequest.end();

  res.status(200).json({ text: ' asdfasdf ' })
}
