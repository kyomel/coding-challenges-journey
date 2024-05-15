const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

// Assuming 'comment' has fields like 'text', 'approved', and 'author'
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    const comment = JSON.parse(data);
    if (isAdmin(comment.author)) {
      comment.approved = true; // Auto-approve admin comments
      broadcastComment(comment);
    } else {
      // Send to admin for approval
      sendToAdminQueue(comment);
    }
  });
});

function broadcastComment(comment) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN && comment.approved) {
      client.send(JSON.stringify(comment));
    }
  });
}

// replies and likes
app.post('/reply', function(req, res) {
  const { commentId, replyText, userId } = req.body;
  const reply = { text: replyText, author: userId };
  Comment.findById(commentId, function(err, comment) {
    if (err) return res.status(500).send(err);
    comment.replies.push(reply);
    comment.save(err => {
      if (err) return res.status(500).send(err);
      res.send('Reply added');
    });
  });
});

app.post('/like', function(req, res) {
  const { commentId, userId } = req.body;
  Comment.updateOne({ _id: commentId }, { $inc: { likes: 1 } }, function(err) {
    if (err) return res.status(500).send(err);
    res.send('Comment liked');
  });
});