'use client';

interface DiffInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function DiffInput({ value, onChange }: DiffInputProps) {
  return (
    <div className="w-full">
      <label
        htmlFor="diff-input"
        className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Paste your git diff here:
      </label>
      <textarea
        id="diff-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="diff --git a/file.txt b/file.txt&#10;index 1234567..abcdefg 100644&#10;--- a/file.txt&#10;+++ b/file.txt&#10;@@ -1,3 +1,4 @@&#10; line1&#10;+line2&#10; line3"
        className="w-full min-h-[400px] p-4 font-mono text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent resize-y"
        spellCheck={false}
      />
    </div>
  );
}
