var Twit = require('twit')

var Tweet = new Twit({
    consumer_key:         '3ydqIlg3GVbCNOmTMcHN9pmSD',
    consumer_secret:      'w1C8QDPLA7sYPv9zlonKsggqpwoHEv1Udv0tZBmkgftiFteO2m',
    access_token:         '245852365-m8AtBN7XZd56bPwGe51SkaB0rZNUtJwnvgff6EbT',
    access_token_secret:  'JCldClN983clQGUBdtSOKGcL7KhTFJGfsHlqIBskzX7JL',
    timeout_ms:           60*1000,   
    strictSSL:            true,   
  })

module.exports  = Tweet
  
 
