const routes = (handler) => [
  {
    method: "POST",
    path: "/authentications",
    handler: handler.postAutentikasiHandler,
  },
  {
    method: "PUT",
    path: "/authentications",
    handler: handler.putAutentikasiHandler,
  },
  {
    method: "DELETE",
    path: "/authentications",
    handler: handler.deleteAutentikasiHandler,
  },
];

module.exports = routes;
