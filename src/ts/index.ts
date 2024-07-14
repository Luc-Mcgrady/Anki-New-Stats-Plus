import Root from "./Root.svelte"
import { patchFetch } from "./root"
import { burdenOrLoad, config, other } from "./stores"

declare global {
    let css: string
    let SSEconfig: SSEconfig
    let SSEother: SSEother
}

patchFetch()

burdenOrLoad.set(SSEconfig.burdenNotLoad ? "Burden" : "Load")
config.set(SSEconfig)
other.set(SSEother)

setTimeout(() => new Root({ target: document.body }), SSEconfig.loadDelayMs ?? 100)

const style = document.createElement("style")
style.innerHTML = css
document.head.appendChild(style)
