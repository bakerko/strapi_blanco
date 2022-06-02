module.exports = {
  //
  graphql: {
    config: {
      endpoint: '/graphql2',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};
