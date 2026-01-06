import parseDiff from 'parse-diff';
import { DiffFile, DiffHunk, DiffLine, DiffLineType } from './types';

export function parseDiffText(diffText: string): DiffFile[] {
  if (!diffText.trim()) {
    return [];
  }

  try {
    const parsed = parseDiff(diffText);
    return parsed.map((file): DiffFile => {
      const hunks: DiffHunk[] = file.chunks.map((chunk): DiffHunk => {
        let oldLineNumber = chunk.oldStart;
        let newLineNumber = chunk.newStart;

        const lines: DiffLine[] = chunk.changes.map((change): DiffLine => {
          let type: DiffLineType = 'context';
          if (change.type === 'add') {
            type = 'add';
          } else if (change.type === 'del') {
            type = 'remove';
          }

          const line: DiffLine = {
            type,
            content: change.content,
          };

          if (change.type === 'add') {
            line.newLineNumber = newLineNumber++;
          } else if (change.type === 'del') {
            line.oldLineNumber = oldLineNumber++;
          } else {
            line.oldLineNumber = oldLineNumber++;
            line.newLineNumber = newLineNumber++;
          }

          return line;
        });

        return {
          header: chunk.content,
          lines,
        };
      });

      let status: DiffFile['status'] = 'modified';
      if (file.new && !file.from) {
        status = 'added';
      } else if (file.deleted && !file.to) {
        status = 'deleted';
      } else if (file.from && file.to && file.from !== file.to) {
        status = 'renamed';
      }

      return {
        path: file.to || file.from || '',
        oldName: file.from,
        newName: file.to,
        status,
        hunks,
      };
    });
  } catch (error) {
    console.error('Failed to parse diff:', error);
    return [];
  }
}
