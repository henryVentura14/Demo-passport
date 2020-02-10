var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
var PassportLocal = require('passport-local').Strategy

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (user, done) {
  done(null, { id: 1, name: 'henry' })
})

passport.use(
  new GoogleStrategy(
    {
      clientID:'735479637149-6pdljr4p8r1d5m7vif2r6afkrffrt6gn.apps.googleusercontent.com',
      clientSecret: 'ZNp9vGOZHhLyE1qtdRBtuER3',
      callbackURL: 'http://localhost:4500/auth/google/callback'
    },
    function (accessToken, refreshToken, profile, done) {
      var userData = {
        email: profile.emails[0].value,
        name: profile.displayName,
        token: accessToken
      }
      done(null, userData)
    }
  )
)

passport.use(
  new PassportLocal(function (username, password, done) {
    if (username === 'henry.ventura14@gmail.com' && password === '1234567')
      return done(null, { id: 1, name: 'henry' })
    done(null, false)
  })
)
