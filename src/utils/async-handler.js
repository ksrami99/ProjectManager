function asyncHandler(requesthandler) {
  return function (req, res, next) {
    Promise.resolve(requesthandler(req, res, next)).catch(function (error) {
      next(error);
    });
  };
}

export { asyncHandler };
