const generatePassword = (length) => {
  const digits = "0123456789";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const specialChars = "!@#$%^&*?";

  const allchar = digits + uppercase + lowercase + specialChars;

  let password = "";
  if (length < 4) {
    console.log("length atleast greater than 4 or 4..!!");
  } else {
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += digits[Math.floor(Math.random() * digits.length)];

    for (let i = password.length; i < length; i++) {
      password += allchar[Math.floor(Math.random() * allchar.length)];
    }

    password = password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    return password;
  }

  return false;
};

module.exports =generatePassword;
