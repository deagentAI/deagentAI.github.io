#!/bin/bash
set -e

# 定义一个函数在脚本退出时还原全局 git 配置
function revert_config {
  echo "恢复全局 git 配置..."
  git config --global --unset url."git@github.com-company:".insteadOf
}

disable_trap="false"
# trap 指令确保脚本退出时执行还原操作
trap revert_config EXIT

echo "设置临时全局 git 配置..."
git config --global url."git@github.com-company:".insteadOf "git@github.com:"

echo "开始部署..."

# 运行部署命令，这里使用 pnpm run deploy，如果你的部署命令不同，请进行调整
pnpm run deploy

echo "部署成功完成。" 