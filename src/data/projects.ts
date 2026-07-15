export interface Project {
  name: string;
  description: string;
  href: string;
  language: string;
  category: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'hyper',
    description: '面向本地编码工作流的终端优先 Agent Harness，记录运行事件、检查点与产物。',
    href: 'https://github.com/ZeroMarker/hyper',
    language: 'TypeScript',
    category: 'Agent Infrastructure',
    featured: true,
  },
  {
    name: 'AgentHub',
    description: '通过 CLI 与桌面界面统一管理多个 AI 编程助手。',
    href: 'https://github.com/ZeroMarker/agenthub',
    language: 'Rust',
    category: 'Developer Tools',
    featured: true,
  },
  {
    name: 'guomi',
    description: '无外部依赖的 Elixir 国密算法库，覆盖 SM2、SM3 与 SM4。',
    href: 'https://github.com/ZeroMarker/guomi',
    language: 'Elixir',
    category: 'Cryptography',
    featured: true,
  },
  {
    name: 'netor',
    description: '跨平台系统级网络流量监测工具，支持连接与 DNS/TLS 信息观察。',
    href: 'https://github.com/ZeroMarker/netor',
    language: 'Rust',
    category: 'Systems',
  },
  {
    name: 'China Dialect Map',
    description: '用交互式地图呈现中国方言分布与语言多样性。',
    href: 'https://github.com/ZeroMarker/dialectMap',
    language: 'TypeScript',
    category: 'Data Visualization',
  },
  {
    name: 'Salvage',
    description: '只读 NTFS 与文件签名扫描数据恢复工具。',
    href: 'https://github.com/ZeroMarker/Salvage',
    language: 'C',
    category: 'Systems',
  },
];
