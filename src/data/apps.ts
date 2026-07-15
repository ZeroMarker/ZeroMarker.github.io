export interface AppItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  accent: string;
}

export const apps: AppItem[] = [
  {
    title: 'Word List',
    description: '英语单词记忆工具，支持导入导出和复习计划。',
    href: '/word/index.html',
    icon: '📚',
    accent: '#22c55e',
  },
  {
    title: '6561',
    description: '2048 变种数字游戏，适合碎片时间练手。',
    href: '/6561/index.html',
    icon: '🔢',
    accent: '#f59e0b',
  },
  {
    title: 'SIM 卡',
    description: '整理 SIM 卡保号相关信息，方便快速查阅。',
    href: '/docs/sim/index.html',
    icon: '🛠️',
    accent: '#38bdf8',
  },
  {
    title: '图片分割',
    description: '在线图片分割工具，自定义行列数和分割线粗细，一键打包下载。',
    href: '/tool/split.html',
    icon: '✂️',
    accent: '#f97316',
  },
];
