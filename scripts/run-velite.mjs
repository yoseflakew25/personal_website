// Build (and watch) the velite content layer.
// Generates .velite/ so the `#site/content` alias always resolves.
import { build } from 'velite'

const isDev = process.argv.includes('--dev')

await build({ watch: isDev, clean: true })
