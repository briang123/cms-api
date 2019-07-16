/*global describe, it, after, before*/

const request = require('supertest')
const { app } = require('../../src/index')
const { getAuth } = require('../helpers/getAuth')
const { getProject } = require('../helpers/getProject')
const { getProjectPermission } = require('../helpers/getProjectPermission')
const { getApiToken } = require('../helpers/getApiToken')

let auth
let project
let projectPermission
let apiToken

describe('DELETE /api-tokens/${id}', () => {
  before(async () => {
    auth = await getAuth()
    project = await getProject()
    projectPermission = await getProjectPermission(auth, project)
    apiToken = await getApiToken()
    await getProjectPermission(apiToken, project)
  })

  it('should return 200', done => {
    request(app)
      .delete(`/projects/${project.project.id}/api-tokens/${apiToken.app.id}`)
      .set('AccessToken', auth.accessToken.token)
      .expect(200)
      .end(done)
  })

  after(async () => {
    await auth.remove()
    await project.remove()
    await projectPermission.remove()
  })
})
