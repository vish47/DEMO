var express = require('express');
var app = express();


var CompanyController=function(req, res){
  console.log("Invoking  BUSINESS LIST");
 
  
     var employee = [
	 
	 { SID:1,SECTORDesination:"INDIA",WORKPRJECT:"CLOUD DEVLOPEMENT ", status:"ACTIVE"},
	  { SID:2,SECTORDesination:"JAPAN",WORKPRJECT:"MOBILE APP DEVLOPEMENT ", status:"ACTIVE"},
	  { SID:3,SECTORDesination:"CHINA",WORKPRJECT:"OS DEVLOPEMENT ", status:"ACTIVE"},
	 
	 
       {id:1, empName:"Raj",Desination:"manager", status:"ACTIVE",SID:1},
	   {id:2, empName:"vishal",Desination:"employee", status:"ACTIVE",SID:2},
	   {id:3, empName:"harry",Desination:"developer", status:"leave",SID:1},
   
  ];
  
  res.send(employee);
};
 


app.get('/companyEmpInfo',CompanyController);

var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Hello vishal u'r  app listening at http://localhost:8087", host, port)
})