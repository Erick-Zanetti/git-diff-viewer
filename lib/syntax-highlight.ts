import { createHighlighter, type Highlighter } from 'shiki';

let highlighter: Highlighter | null = null;

export async function getSyntaxHighlighter(): Promise<Highlighter> {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['github-light', 'github-dark'],
      langs: [
        'javascript',
        'typescript',
        'jsx',
        'tsx',
        'python',
        'java',
        'c',
        'cpp',
        'csharp',
        'go',
        'rust',
        'php',
        'ruby',
        'swift',
        'kotlin',
        'scala',
        'html',
        'css',
        'json',
        'yaml',
        'toml',
        'markdown',
        'bash',
        'shell',
        'sql',
        'xml',
        'diff',
        'plaintext',
      ],
    });
  }
  return highlighter;
}

export function getLanguageFromPath(path: string): string {
  const ext = path.split('.').pop()?.toLowerCase() || '';
  const langMap: Record<string, string> = {
    js: 'javascript',
    jsx: 'jsx',
    ts: 'typescript',
    tsx: 'tsx',
    py: 'python',
    java: 'java',
    c: 'c',
    cpp: 'cpp',
    cc: 'cpp',
    cxx: 'cpp',
    cs: 'csharp',
    go: 'go',
    rs: 'rust',
    php: 'php',
    rb: 'ruby',
    swift: 'swift',
    kt: 'kotlin',
    scala: 'scala',
    html: 'html',
    htm: 'html',
    css: 'css',
    json: 'json',
    yaml: 'yaml',
    yml: 'yaml',
    toml: 'toml',
    md: 'markdown',
    sh: 'bash',
    bash: 'bash',
    sql: 'sql',
    xml: 'xml',
    diff: 'diff',
    patch: 'diff',
  };
  return langMap[ext] || 'plaintext';
}

export async function highlightCode(
  code: string,
  language: string,
  theme: 'light' | 'dark' = 'light'
): Promise<string> {
  try {
    const highlighter = await getSyntaxHighlighter();
    const themeName = theme === 'dark' ? 'github-dark' : 'github-light';
    return highlighter.codeToHtml(code, {
      lang: language,
      theme: themeName,
    });
  } catch (error) {
    return escapeHtml(code);
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
