var postUrl = "https://hooks.slack.com/services/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";　

// botを投入したいチャンネル名を追加
 var postChannel = "t84_mrk_team_c"; 

//使用するシートを取得
function postToSlack() {
 var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('シート1'); 
 
//指定したセルの値を取得。
 var value1 = sheet.getSheetValues(3, 3, 1, 1); 
 var value2 = sheet.getSheetValues(3, 4, 1, 1);
 var value3 = sheet.getSheetValues(3, 5, 1, 1); 
 var value4 = sheet.getSheetValues(3, 6, 1, 1); 
 var value5 = sheet.getSheetValues(3, 7, 1, 1); 

// 曜日の取得
 var today = new Date();
 var dayOfWeek = today.getDay() ;
 var dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek] ;
 
// ポストする内容を条件分岐で記述
 if(dayOfWeekStr == "月"){
   sendHttpPost('おはよう!😃　\n明日の説明会固定シフトは *'　+ '<@' + value1 + '>'+  '* と *' +'<@' + value2 + '>' +　'* です!　シフト争奪頑張りましょう:fire:'+'\n' +'以下URLからあらかじめ申込者を確認すると:woman-gesturing-ok:'+'\n'+'https://https://docs.google.com/spreadsheets/d/1UZStoBtAqN8IBRiFFe46QnqyjqMZg_-7hwnGbrYqCOI/edit#gid=865616790', '説明会シフト', ':shipit:');
 }else if(dayOfWeekStr == "火"){
   sendHttpPost('おはよう!😃　\n明日の説明会固定シフトは *'　+'<@'+ value3　+'>'+ '* です!　シフト争奪頑張りましょう:fire:'+'\n' +'以下URLからあらかじめ申込者を確認すると:woman-gesturing-ok:'+'\n'+'https://https://docs.google.com/spreadsheets/d/1UZStoBtAqN8IBRiFFe46QnqyjqMZg_-7hwnGbrYqCOI/edit#gid=865616790', '説明会シフト', ':shipit:');
 }else if(dayOfWeekStr == "木"){
   sendHttpPost('おはよう!😃　\n明日の説明会固定シフトは *'　+'<@'+ value4　+ '>'+ '* と *' +'<@'+ value5 　+'>'+　'* です!　シフト争奪頑張りましょう:fire:'+'\n' +'以下URLからあらかじめ申込者を確認すると:woman-gesturing-ok:'+'\n'+'https://https://docs.google.com/spreadsheets/d/1UZStoBtAqN8IBRiFFe46QnqyjqMZg_-7hwnGbrYqCOI/edit#gid=865616790', '説明会シフト', ':shipit:');
 }else if(dayOfWeekStr ==  "日"|| dayOfWeekStr == "金"){
   sendHttpPost('おはよう!\n明日の固定シフトはいません！別の施策を頑張りましょう:sparkles:'+'\n' + '以下URLからあらかじめ申込者を確認すると:woman-gesturing-ok:'+'\n'+'https://https://docs.google.com/spreadsheets/d/1UZStoBtAqN8IBRiFFe46QnqyjqMZg_-7hwnGbrYqCOI/edit#gid=865616790','説明会シフト', ':shipit:');
 }
}

// ポストするための記述
function sendHttpPost(message, username, icon)　{
 var jsonData =　{
   "channel" : postChannel,
   "username" : username,
   "icon_emoji": icon,
   "text" : message
 };
 
 var payload = JSON.stringify(jsonData);
 var options =　{
   "method" : "post",
   "contentType" : "application/json",
   "payload" : payload
 };
 
 UrlFetchApp.fetch(postUrl, options);
}