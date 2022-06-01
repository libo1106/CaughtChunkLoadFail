# Webpack UnCaught ChunkLoadFail

在 CDN 环境下，部分边缘节点可能会存在资源异常，导致用户加载 CDN 资源时候遇到 `ChunkLoadFail` 异常。

`CaughtChunkLoadFail.js` 通过识别该异常，并自动执行一个任意规则，比如

- 原地址重试
- 降级使用 CDN 的源站地址

## TODO

- [x] 普通资源恢复，例如 `import 'xxxx'` 这种
- [ ] 动态 `import().then()` 的资源重试以及时序恢复

## 本地测试

1. `npm install && npm run build` 
2. `docker-compose up`
3. 修改 build 目录中任意 chunk 文件，并修改后缀为 `xxx.fallback.js`
