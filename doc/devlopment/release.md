# 触发自动构建步骤
- 修改 [WHATSNEW.md](./WHATSNEW.md)，添加版本说明。
- 修改 package.json 中的 version 值
- 保存(清空)git 的工作区，git push 一下
- 使用 git tag v*.*.\*打一个标签
- 使用 git push --tags 上传标签到远程
- github 会自动开始你的任务脚本。
- 如果需要删除 tag:
  - 本地：git tag -d v*.*.\*
  - 远程: git push --delete origin v*.*.\*
