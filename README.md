# Twitter API task 


###  API to trigger the work (input is hashtag name)
route : /
 POST method 
 body format 
  { 
        "count": 2,
        "tag": "bo"
    }
    
    tweet
###  API to show the results are the work is done 
route : /{hashtag}
GET method

###  API to list all tweet in this hashtag 
route : /tweet/{hashtag}
