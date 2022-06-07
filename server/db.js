const Cloudant = require('@cloudant/cloudant');
let nano = require('nano');
const url1 = "https://apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9:8db4bc5abe318da5e50e638f8cb126b5@e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudant.com";
const nanodb = nano(process.env.COUCHDB_URL || url1);// connect with couchdb
const trainee= nanodb.use('login_form'); //connect with database



let url =
  'https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud';
let username = 'apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9';
let password = '8db4bc5abe318da5e50e638f8cb126b5';

let cloudant = Cloudant({ url: url, username: username, password: password });

let insert = function (paramsvalue, dbname) {
  console.log(paramsvalue);
  return cloudant.use(dbname).insert(paramsvalue);
};

 let get = function (id,dbname) {
  return cloudant.use(dbname).find(id);
};
let getAll = function (id, dbname) {
  return cloudant.use(dbname).get(id);
};

module.exports={insert,get,getAll,trainee};