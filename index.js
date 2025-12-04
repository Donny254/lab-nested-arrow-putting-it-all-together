function createLoginTracker(userInfo){
  let attempts =0;
  const maxAttempts = 3;

   //INNER ARROW FUNCTION REQUIRED BY RUBRIC
  const loginAttempt = (passwordAttempt) => {
    if (attempts >= maxAttempts) {
      return 'Account locked due to too many failed login attempts';
    }

    if (passwordAttempt === userInfo.password){
      attempts = 0; //reset after success
        return 'Login successful';
      }

      attempts++;

      if (attempts > maxAttempts) {
        return 'Account locked due to too many failed login attempts';
      }
      return `Attempt ${attempts}: Login failed`;
    };
  
    return loginAttempt; //MUST RETURN THE INNER ARROW FUNCTION
  }

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
