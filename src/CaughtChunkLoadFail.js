
/**
 * @ts-check
 * @param error {Error}
 * @returns 
 */
export function CaughtChunkLoadError (error) {

    if (!/Uncaught ChunkLoadError/i.test(error.message)) {
        return;
    }


    console.log('捕获到 window 错误', error.message)
    console.log(`加载失败请求：${error.error.request}`)
    console.log(`完整的错误对象：`, error)
    console.log(`error.target 类型：${error.target instanceof HTMLScriptElement}`)

    reloadChunk(error.error.request)
}

const RELOAD_COUNT = {

}

function reloadChunk(string) {

    if (RELOAD_COUNT[string]) return;

    const script = document.createElement('script');
    const fallbackURL = string.replace(/chunk\.js$/, 'chunk.fallback.js');
    script.src = fallbackURL;

    RELOAD_COUNT[fallbackURL] = 1;

    document.body.append(script)
}
