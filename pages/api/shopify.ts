import { postToShopify } from 'util/shopify';

export default async function handler(_req, res) {
  const data = await postToShopify({
    query: `
      query getProductList {
        products(sortKey: PRICE, first: 100, reverse: true) {
          edges {
            node {
              id
              handle
              description
              title
            }
          }
        }
      }
    `,
    variables: {}
  });

  res.status(200).json(data);
}
