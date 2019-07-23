var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('Enter your sheet key here');

exports.handler = function(event){
  return new Promise((fulfill, reject) => {
    // Authenticate with the Google Spreadsheets API.
    doc.useServiceAccountAuth(creds, function (err) {
      var d = new Date();
      doc.addRow(1, { Time_Stamp: ((((d.getHours())+24)-5) %12||12)+":"+d.getMinutes()+":"+d.getSeconds(), Temperature: event.reading}, function(err) {
        if(err) {
          console.log(err);
          reject(err);
        }else{
          fulfill();
        }
      });
    });
  });
}
