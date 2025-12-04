/**
 * @param {Object} userInfo
 * @returns {Function}
 */
function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const MAX_ATTEMPTS = 3;

  /**
   * @param {string} passwordAttempt
   * @returns {string}
   */
  const loginAttempt = (passwordAttempt) => {
    if (attemptCount >= MAX_ATTEMPTS) {
      return `Account locked due to too many failed login attempts`;
    }
    attemptCount++;

    if (passwordAttempt === userInfo.password) {
      attemptCount = 0;
      return `Login Successful`;
    } else {
      attemptCount++;
      return `Attempt ${attemptCount}:Login Failed`;
    }
  };

  return loginAttempt;
}
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
