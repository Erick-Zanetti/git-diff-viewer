'use client';

import { DiffFile } from '@/lib/types';
import FileDiff from './FileDiff';

interface DiffViewerProps {
  files: DiffFile[];
  isDark: boolean;
}

export default function DiffViewer({ files, isDark }: DiffViewerProps) {
  if (files.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500 dark:text-gray-400">
        <p>No diff to display. Paste a git diff above to get started.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {files.map((file, index) => (
        <FileDiff key={index} file={file} isDark={isDark} />
      ))}
    </div>
  );
}
