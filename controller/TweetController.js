const Twitter = require('./../config/twit')
const TweetModel  = require('./../Model/tweetsModel')


module.exports = {
    saveTweets : async (req, res) =>  { 
        let q  =  req.body.tag  
        let count  = req.body.count
        // res.json(req.body)
        await Twitter.get('search/tweets', { q :'#'+q , count}, async(err, data, response) => {
            try {    
                let list = []
                for (var i  = 0 ; i < count ; i++){
                    let tweet = data.statuses[i] 
                    if (tweet != null  ) {
                        tweet = JSON.stringify(tweet) 
                        let hashtag = q 
                        list.push({hashtag, tweet })
                    }
                }
                
                await TweetModel.bulkCreate(list).then(() => console.log('done')) 
                return res.json({list})     
            } catch (error) {
                console.log(error)
            }
        }) 
    },
    getTweets : (req,res) => {
        let tag =  req.params.tag  
        let list = []
        let tweets = TweetModel.findAll({
            where :{
                hashtag : tag
            }
        })
        .then(tweet => {
            if(tweet.length > 0){
                for (var i  = 0 ; i < tweet.length ; i++){ 
                    console.log(tweet[i].dataValues.tweet)
                    list.push(tweet[i].dataValues)

                }
                return res.json({list  })     
            }else {
                return res.json({msg :'there is no such a hashtag'})     
            }
            
        })
    },
    getTweetText :(req,res) => {
        let tag =  req.params.tag  
        let list = []
        let tweets = TweetModel.findAll({
            where :{
                hashtag : tag
            }
        })
        .then(tweet => {
            if(tweet.length > 0){
                for (var i  = 0 ; i < tweet.length ; i++){ 
                    list.push({
                        text : tweet[i].dataValues.tweet.text ,
                        tweetUrl : tweet[i].dataValues.tweet.entities.urls,
                     })
                }
                return res.json({list})     
            }else {
                return res.json({msg :'there is no such a hashtag'})     
            }
            
        })
    },
}

