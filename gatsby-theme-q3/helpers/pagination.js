const { get } = require('lodash');

const getId = (v) => get(v, 'contentful_id');

const genCursor = (a = [], i = 0) => ({
  isFirst: i === 0,
  isLast: i === a.length - 1,
  next: a[i + 1],
  prev: a[i - 1],
  first: a[0],
  last: a[a.length - 1],
});

const appendSiblingsToContext = (entries) =>
  entries.map((node, i) => {
    const cursor = genCursor(entries, i);

    return {
      ...node,
      prev: getId(
        cursor.isFirst ? cursor.last : cursor.prev,
      ),
      next: getId(
        cursor.isLast ? cursor.first : cursor.next,
      ),
    };
  });

/**
 * Generates a paginated archive page.
 * @param {Function} fn
 * @param {Array} posts
 * @param {String} pathName
 * @param {String} categoryID
 * @return {Array}
 */
const paginateArchiveContext = (
  posts = [],
  pathName,
  options,
) => {
  const postsPerPage = 15;
  const numPages = Math.ceil(posts.length / postsPerPage);

  return Array.from({ length: numPages }).map((_, i) => {
    const page = i + 1;
    let prev;
    let next;

    if (page === 2) {
      prev = pathName;
    } else if (page !== 1) {
      prev = `${pathName}/${page - 1}`;
    }

    if (page < numPages) {
      next = `${pathName}/${page + 1}`;
    }

    return {
      path:
        i === 0 ? `/${pathName}` : `/${pathName}/${page}`,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        pageNum: i,
        options,
        next,
        prev,
      },
    };
  });
};

module.exports = {
  appendSiblingsToContext,
  genCursor,
};
