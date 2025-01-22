function status(requere, response) {
  response.status(200).json({ status: "ok" });
}

export default status;
