export const TruncateText = (text: string, length: number): string => {
    if (typeof text !== 'string') return '';
    return text.length <= length ? text : text.slice(0, length) + '  ....';
  };
  