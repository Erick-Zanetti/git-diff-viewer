'use client';

import { DiffHunk } from '@/lib/types';
import DiffLine from './DiffLine';

interface HunkDiffProps {
  hunk: DiffHunk;
  filePath: string;
  isDark: boolean;
}

export default function HunkDiff({ hunk, filePath, isDark }: HunkDiffProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <div className="bg-gray-50 dark:bg-gray-900/50 px-4 py-2 font-mono text-xs text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800">
        {hunk.header}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-full">
          <colgroup>
            <col className="w-16" />
            <col className="w-16" />
            <col />
          </colgroup>
          <tbody>
            {hunk.lines.map((line, index) => (
              <DiffLine
                key={index}
                line={line}
                filePath={filePath}
                isDark={isDark}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
