// Build (and watch) the velite content layer.
// Generates .velite/ so the `#site/content` alias always resolves.
import { build } from 'velite'

const isDev = process.argv.includes('--dev')

// Clean only on one-shot builds. In watch mode, cleaning wipes the output
// directory mid-rebuild, so next dev can race the wipe and fail to resolve
// .velite/posts.json ("Module not found") until velite finishes rewriting.
await build({ watch: isDev, clean: !isDev })
