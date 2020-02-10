
/** ********************** Require node modules ************************ */
const jsonwebtoken = require('jsonwebtoken');
const config = require('config');


/** ********************** Require local modules ************************ */


/** ********************** Variable listing ************************** */
const { secretKey } = config.get('General');


/** @function createToken
* @desc This function is used to create token for the user
* @param {JSON object} user includes user details
* @return {String} token
*/
async function createToken(user) {
  const token = await jsonwebtoken.sign({
    user: { email: user.email, userId: user.id },
  }, secretKey, {
    expiresIn: '30',
  });
  return token;
}


/** @function authenticateUser
 * @desc This function is used for authenticating the user.
 * @param {String} token user's token
 */
async function authenticateUser(token) {
  try {
    const result = await jsonwebtoken.verify(token,secretKey);
    console.log("okokokok",result);
    return result;
  } catch (err) {
    return null;
  }
}


module.exports = {
  createToken,
  authenticateUser,
};
