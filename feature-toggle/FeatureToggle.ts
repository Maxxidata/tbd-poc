import * as configFile from "../.feature-toggle.json"

export default class FeatureToggle {
  configFile: any

  constructor () {
    this.configFile = configFile
  }

  isEnabled(featureName: string) {
    return this.configFile[featureName] === 'on' ? true : false
  }

  isEnabledForUser(featureName: string) {
    // chamar serviço de autenticação
    const userWithPermission = true
    return userWithPermission && this.configFile[featureName].enabled === 'on' ? true : false
  }

  isEnabledForGroup(featureName: string) {
    // chamar serviço de autenticação
    const usersWithPermissions = true
    return usersWithPermissions && this.configFile[featureName].enabled === 'on' ? true : false
  }

  isEnabledForAdmins(featureName: string) {
    // chamar serviço de autenticação
    const admin = true
    return admin && this.configFile[featureName].admin === 'on' ? true : false
  }
}