const express = require('express')
const router = express.Router()

/// Branching
router.post('/juggling-trick', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let canJuggle = req.session.data['how-many-balls']

  if (canJuggle === 'None - I cannot juggle') {
    res.redirect('/cannot-juggle')
  } else {
    res.redirect('/juggling-trick')
  }
})

module.exports = router
