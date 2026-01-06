'use client';

import { DiffLine as DiffLineType } from '@/lib/types';
import clsx from 'clsx';

interface DiffLineProps {
  line: DiffLineType;
  filePath: string;
  isDark: boolean;
}

export default function DiffLine({ line, filePath, isDark }: DiffLineProps) {
  const lineNumberClass = clsx(
    'px-4 py-0.5 text-right text-xs select-none font-mono',
    {
      'text-gray-400': (line.type === 'add' && !line.oldLineNumber) || (line.type === 'remove' && !line.newLineNumber),
      'text-gray-500 dark:text-gray-400': line.type === 'context',
      'text-gray-700 dark:text-gray-300': (line.type === 'add' && line.oldLineNumber) || (line.type === 'remove' && line.newLineNumber),
    }
  );

  const contentClass = clsx(
    'px-4 py-0.5 font-mono text-sm whitespace-pre',
    {
      'bg-green-50 dark:bg-green-950/20 text-green-900 dark:text-green-100': line.type === 'add',
      'bg-red-50 dark:bg-red-950/20 text-red-900 dark:text-red-100': line.type === 'remove',
      'bg-transparent text-gray-900 dark:text-gray-100': line.type === 'context',
    }
  );

  const prefixClass = clsx('inline-block w-4 text-center mr-2', {
    'text-green-600 dark:text-green-400': line.type === 'add',
    'text-red-600 dark:text-red-400': line.type === 'remove',
    'text-gray-400': line.type === 'context',
  });

  return (
    <tr
      className={clsx('group', {
        'hover:bg-gray-50/50 dark:hover:bg-gray-900/30': line.type === 'context',
      })}
    >
      <td className={clsx(lineNumberClass, 'border-r border-gray-200 dark:border-gray-800')}>
        {line.oldLineNumber || ''}
      </td>
      <td className={clsx(lineNumberClass, 'border-r border-gray-200 dark:border-gray-800')}>
        {line.newLineNumber || ''}
      </td>
      <td className={contentClass}>
        <span className={prefixClass}>
          {line.type === 'add' ? '+' : line.type === 'remove' ? '-' : ' '}
        </span>
        <span>{line.content}</span>
      </td>
    </tr>
  );
}
