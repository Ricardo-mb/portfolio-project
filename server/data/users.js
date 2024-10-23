// import bcrypt from 'bcryptjs';

const users = [
  {
    name: "Ricardo MBK",
    email: "ricardomb@gmail.com",
    // password: bcrypt.hashSync('1234567', 10),
    password: "1234567",
    isAdmin: true,
  },
  {
    name: "Aymard M",
    email: "aymard@gmail.com",
    // password: bcrypt.hashSync('1234567', 10),
    password: "1234567",
    admin: false,
  },
];

export { users };
