// const  config = {
//   user:  'dan120929', // sql user
//   password:  'MyPassword!!', //sql user password
//   server:  'tcp:libros-api-120929.database.windows.net,1433', // if it does not work try- localhost
//   database:  'libros',
//   options: {
//     trustedconnection:  true,
//     enableArithAbort:  true,
//     encrypt:true
//     //instancename:  'SQLEXPRESS'  // SQL Server instance name
//   },
//   port:  55892
// }
const config = {
  server: 'libros-api-120929.database.windows.net',
  database: 'libros',
  user: 'dan120929',
  password: 'MyPassword!',
  port: 1433,
  encrypt: true,
  trustServerCertificate: false,
  options: {
      encrypt: true
  }
};
module.exports = config;