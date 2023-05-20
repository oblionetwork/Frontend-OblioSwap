exports.createPayload = (key) => {
  let payload = { subject: key };
  let token = jwt.sign(payload, jwtToken, { expiresIn: 60 * 1 * 15 });
  return token;
};

