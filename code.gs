function myFunction() 
{
  					
  var senderName = 0;
  var email = 1;
  var salutation= 2;
  var firstName=3 ;
  var lastName= 4;
  var subject = 5;
  var firstPara =6;
  var secondPara =7;
  var thirdPara =8;
  var valueSentance =9;
  var values=10;
  var footnoteF =11;
  var footnoteS =12;

  // var attachmnet=13;
  
  var emailTemp = HtmlService.createTemplateFromFile("email");
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("D");
  var data = ws.getRange("A2:M" + ws.getLastRow()).getValues();
  
  data.forEach(function(row){
    
    emailTemp.sn =row[senderName ];
    emailTemp.sl =row[salutation];
    emailTemp.fn =row[firstName];
    emailTemp.ln =row[lastName];
    emailTemp.fp =row[firstPara];
    emailTemp.sp =row[secondPara];
    emailTemp.tp =row[thirdPara];
    emailTemp.sb =row[subject];
    emailTemp.ff =row[footnoteF];
    emailTemp.fs =row[footnoteS];
    emailTemp.vl =row[values];
    emailTemp.vls =row[valueSentance];
    //emailTemp.at =row[attachmnet];
    
    
    var htmlMessage = emailTemp.evaluate().getContent();
    
    GmailApp.sendEmail(row[email],row[subject] , "Your email does not support HTML. Try with diffrent browser.",{name: row[senderName], htmlBody:htmlMessage } );
    
  });
  
}
