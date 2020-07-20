import { MitoVue } from './Vue/index'
import { setupReplace } from './load'
import { InitOptions } from './options'
import { breadcrumb, transportData, logger } from 'core'
import { SDK_VERSION, SDK_NAME } from './config'

function init(options: InitOptions = {}): void {
  if (options.disabled) return
  setupReplace(options)
  breadcrumb.bindOptions(options)
  logger.bindOptions(options.debug)
  transportData.bindOptions(options)
}
export default { MitoVue, init, SDK_VERSION, SDK_NAME }
