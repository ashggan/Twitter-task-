const express = require('express');
const router =  require('express-promise-router')();
const TweetController = require('./../controller/TweetController')

router.route('/').post( TweetController.saveTweets );
router.route('/:tag').get( TweetController.getTweets );
router.route('/tweet/:tag').get( TweetController.getTweetText );

module.exports = router;