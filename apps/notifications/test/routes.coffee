{ fabricate } = require 'antigravity'
_ = require 'underscore'
sinon = require 'sinon'
Backbone = require 'backbone'
routes = require '../routes'
CurrentUser = require '../../../models/current_user.coffee'
Artist = require '../../../models/artist.coffee'

describe 'Notification Routing', ->

  beforeEach ->
    sinon.stub(Backbone, 'sync').returns('fetchUntilEnd').yieldsTo 'success', []
    @req = { url: '/works-for-you' }
    @res = { render: sinon.stub(), redirect: sinon.stub(), locals: { sd: { APP_URL: 'http://localhost:5000'} } }

  afterEach ->
    Backbone.sync.restore()

  describe '#worksForYou', ->

    it 'redirect to login without a user', ->
      routes.worksForYou @req, @res
      @res.redirect.args[0][0].should.equal '/log_in?redirect_uri=/works-for-you'

    it 'renders with a user and makes fetch for artists', ->
      @req.user = new CurrentUser fabricate 'user', accessToken: 'aaa'
      routes.worksForYou @req, @res
      Backbone.sync.args[0][2].url.should.containEql '/api/v1/me/follow/artists'
      _.defer =>
        @res.render.args[0][0].should.equal 'index'
