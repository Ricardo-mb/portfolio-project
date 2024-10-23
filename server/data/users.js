// import bcrypt from 'bcryptjs';

const users = [
  {
    name: "User",
    email: "user@example.com",
    // password: bcrypt.hashSync('1234567', 10),
    password: "1234567",
  },
  {
    name: "Rcardo MBK",
    email: "ricardomb@gmail.com",
    // password: bcrypt.hashSync('1234567', 10),
    // password: bcrypt.hashSync('1234567', 10),
    password: "1234567",
    isAdmin: true,
  },
  {
    name: "Aymard M",
    email: "aymard@gmail.com",
    // password: bcrypt.hashSync('1234567', 10),
    password: "1234567",
    // password: bcrypt.hashSync('1234567', 10),
  },
];

export { users };
