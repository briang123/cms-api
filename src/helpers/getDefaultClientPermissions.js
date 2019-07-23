const getDefaultClientPermissions = clientType => {
  const MAP = {
    app: {
      userRead: false,
      projectCreate: false,
      projectRead: false,
      projectUpdate: false,
      projectDelete: false,
      apiTokenCreate: false,
      apiTokenRead: false,
      apiTokenUpdate: false,
      apiTokenDelete: false,
      userOfProjectCreate: false,
      userOfProjectRead: false,
    },
    user: {
      userRead: true,
      projectCreate: true,
      projectRead: true,
      projectUpdate: true,
      projectDelete: true,
      apiTokenCreate: true,
      apiTokenRead: true,
      apiTokenUpdate: true,
      apiTokenDelete: true,
      userOfProjectCreate: true,
      userOfProjectRead: true,
    },
  }
  return MAP[clientType]
}

module.exports = { getDefaultClientPermissions }