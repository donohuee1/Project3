var express = require('express'),
    router = new express.Router(),
    {index, createProposal, showProposal, newProposal, createYayVote, createNayVote, api, searchProposals} = require('../../controllers/proposals')

//still need to make a logout rep and users logout

router.route("/")
  .get(index)
  .patch(createYayVote)

router.route('/search')
  .post(searchProposals)

router.route("/bad")
  .patch(createNayVote)

router.route("/new")
  .get(newProposal)
  .post(createProposal)

router.route("/:id")
  .get(showProposal)


module.exports = router
