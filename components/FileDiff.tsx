'use client';

import { useState } from 'react';
import { DiffFile } from '@/lib/types';
import HunkDiff from './HunkDiff';
import clsx from 'clsx';

interface FileDiffProps {
  file: DiffFile;
  isDark: boolean;
}

export default function FileDiff({ file, isDark }: FileDiffProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const statusColors = {
    added: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
    modified: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
    deleted: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300',
    renamed: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300',
  };

  const statusLabels = {
    added: 'Added',
    modified: 'Modified',
    deleted: 'Deleted',
    renamed: 'Renamed',
  };

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden mb-4 shadow-sm">
      <div
        className={clsx(
          'sticky top-0 z-10 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-900',
          {
            'shadow-sm': isExpanded,
          }
        )}
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }
        }}
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <svg
            className={clsx(
              'w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform flex-shrink-0',
              {
                'transform rotate-90': isExpanded,
              }
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="font-mono text-sm text-gray-900 dark:text-gray-100 truncate">
            {file.path}
          </span>
          <span
            className={clsx(
              'px-2 py-0.5 rounded text-xs font-medium flex-shrink-0',
              statusColors[file.status]
            )}
          >
            {statusLabels[file.status]}
          </span>
        </div>
      </div>
      <div
        className={clsx(
          'bg-white dark:bg-gray-950 overflow-x-auto transition-all duration-200',
          {
            'max-h-0 overflow-hidden': !isExpanded,
            'max-h-[9999px]': isExpanded,
          }
        )}
      >
        {file.hunks.map((hunk, index) => (
          <HunkDiff
            key={index}
            hunk={hunk}
            filePath={file.path}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
}
