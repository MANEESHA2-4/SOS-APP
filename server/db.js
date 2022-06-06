const Cloudant = require('@cloudant/cloudant');
var nano = require('nano');
const url1 = "https://apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9:8db4bc5abe318da5e50e638f8cb126b5@e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudant.com";
const nanodb = nano(process.env.COUCHDB_URL || url1);// connect with couchdb
const trainee= nanodb.use('login_form'); //connect with database



var url =
  'https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud';
var username = 'apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9';
var password = '8db4bc5abe318da5e50e638f8cb126b5';

var cloudant = Cloudant({ url: url, username: username, password: password });

insert = function (paramsvalue, dbname) {
  console.log(paramsvalue);
  return cloudant.use(dbname).insert(paramsvalue);
};

get = function (dbname) {
  return cloudant.use(dbname).list();
};
getAll = function (id, dbname) {
  return cloudant.use(dbname).get(id);
};

module.exports={insert,get,getAll,nano,trainee};