# Caddy 代理到 `support.gogoga.top` 操作手册

本文档记录当前已采用的部署方式，目标是：
- 不影响现有 `flowlet.gogoga.top`、`auth.gogoga.top`、`ecdict.gogoga.top`
- 用同一套静态站点承载多个产品支持页（路径区分）

## 1. 当前架构

- 前端项目目录：`/root/project/product-support-page`
- Caddy 所在目录：`/root/project/Flowlet/docker`
- Caddy 由 Docker Compose 管理：`docker/docker-compose.full.yml`
- 支持站域名：`support.gogoga.top`
- 路由模式：
  - `https://support.gogoga.top/lingshot`
  - `https://support.gogoga.top/lingshot/privacy`
  - 后续产品：`https://support.gogoga.top/<product>`

## 2. 一次性配置（已完成，留档）

### 2.1 DNS

在阿里云 DNS 新增：
- `A` 记录：`support.gogoga.top -> 服务器公网 IP`

### 2.2 Caddy 配置

文件：`/root/project/Flowlet/docker/Caddyfile`

新增站点块：

```caddyfile
support.gogoga.top {
  root * /srv/support
  encode gzip
  try_files {path} /index.html
  file_server
}
```

说明：
- `try_files {path} /index.html` 用于 SPA 路由回退（避免刷新 404）

### 2.3 Compose 挂载静态目录

文件：`/root/project/Flowlet/docker/docker-compose.full.yml`

在 `caddy.volumes` 下新增：

```yaml
- /root/project/product-support-page/dist:/srv/support:ro
```

## 3. 日常发布（更新支持页内容）

在 `product-support-page` 目录执行：

```bash
cd /root/project/product-support-page
npm install
npm run build
```

然后仅重启 Caddy（不重建其他服务）：

```bash
cd /root/project/Flowlet
MODE=domain APP_DOMAIN=flowlet.gogoga.top AUTH_DOMAIN=auth.gogoga.top ACME_EMAIL=admin@gogoga.top \
  docker compose -f docker/docker-compose.full.yml --env-file docker/.env.flowlet up -d caddy
```

## 4. 新增产品页面（不改 Caddy）

本项目已支持按目录自动加载产品页面：
- `src/pages/<product>/SupportPage.tsx`
- `src/pages/<product>/PrivacyPage.tsx`

示例：新增 `wordflow` 产品
1. 新建目录：`src/pages/wordflow/`
2. 放入：`SupportPage.tsx`、`PrivacyPage.tsx`
3. 构建并发布（同第 3 节）
4. 访问：
   - `https://support.gogoga.top/wordflow`
   - `https://support.gogoga.top/wordflow/privacy`

## 5. 新增“其他域名代理”模板（可复用）

如果未来要再加新子域名（比如 `abc.gogoga.top`），按这个流程：

1. DNS 增加 `A` 记录：`abc.gogoga.top -> 服务器公网 IP`
2. 在 Caddyfile 增加站点块（静态或反代）
3. 如需访问宿主机端口，确认 caddy 服务包含：
   - `extra_hosts: ["host.docker.internal:host-gateway"]`
4. 执行：

```bash
cd /root/project/Flowlet
MODE=domain APP_DOMAIN=flowlet.gogoga.top AUTH_DOMAIN=auth.gogoga.top ACME_EMAIL=admin@gogoga.top \
  docker compose -f docker/docker-compose.full.yml --env-file docker/.env.flowlet up -d caddy
```

## 6. 验证清单

```bash
dig +short support.gogoga.top
curl -I https://support.gogoga.top/lingshot
curl -I https://support.gogoga.top/lingshot/privacy
```

预期：
- 返回 `200` 或 `301/308` 后到 `200`
- 首次签发证书时可能有 10~60 秒延迟

## 7. 故障排查

查看 Caddy 日志：

```bash
cd /root/project/Flowlet
docker compose -f docker/docker-compose.full.yml --env-file docker/.env.flowlet logs -f caddy
```

常见问题：
- DNS 未生效：证书签发失败
- `dist` 目录为空：页面 404
- 忘记 `npm run build`：发布后仍是旧内容

