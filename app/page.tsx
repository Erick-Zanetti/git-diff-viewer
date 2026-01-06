'use client';

import { useState, useMemo, useEffect } from 'react';
import { parseDiffText } from '@/lib/diff-parser';
import DiffInput from '@/components/DiffInput';
import DiffViewer from '@/components/DiffViewer';

export default function Home() {
  const [diffText, setDiffText] = useState('');
  const [isDark, setIsDark] = useState(false);
  const [parseError, setParseError] = useState<string | null>(null);

  const parsedFiles = useMemo(() => {
    if (!diffText.trim()) {
      return [];
    }
    try {
      return parseDiffText(diffText);
    } catch (error) {
      return [];
    }
  }, [diffText]);

  useEffect(() => {
    if (!diffText.trim()) {
      setParseError(null);
      return;
    }
    if (parsedFiles.length === 0) {
      setParseError('Unable to parse diff. Please ensure you pasted a valid unified diff format.');
    } else {
      setParseError(null);
    }
  }, [diffText, parsedFiles.length]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Git Diff Viewer
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Paste a git diff to view it in a GitHub-like interface
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="order-2 lg:order-1">
            <DiffInput value={diffText} onChange={setDiffText} />
            {parseError && (
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-sm text-red-800 dark:text-red-200">{parseError}</p>
              </div>
            )}
          </div>
          <div className="order-1 lg:order-2 lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto">
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              {parsedFiles.length > 0 && (
                <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {parsedFiles.length} file{parsedFiles.length !== 1 ? 's' : ''} changed
                  </p>
                </div>
              )}
              <DiffViewer files={parsedFiles} isDark={isDark} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
