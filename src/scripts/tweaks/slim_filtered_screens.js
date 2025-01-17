import { keyToCss } from '../../util/css_map.js';
import { postSelector, buildStyle } from '../../util/interface.js';

const filteredScreenSelector = `${postSelector}:not(${keyToCss('masonryTimelineObject')}) ${keyToCss('filteredScreen')}`;

const styleElement = buildStyle(`
${filteredScreenSelector} {
  flex-direction: row;
  justify-content: space-between;
  overflow-x: auto;
  height: auto;
  padding-top: var(--post-header-vertical-padding);
  padding-bottom: var(--post-header-vertical-padding);
}

${filteredScreenSelector} ${keyToCss('message')} {
  flex-shrink: 0;
}

${filteredScreenSelector} ${keyToCss('linkOut')} {
  margin-right: auto;
  margin-left: 1ch;

  -webkit-line-clamp: 1;
}

${filteredScreenSelector} ${keyToCss('viewPostLinkWrapper')} {
  flex-shrink: 0;
  margin-top: 0;
  margin-left: 1ch;
}
`);

export const main = async () => document.head.append(styleElement);
export const clean = async () => styleElement.remove();
