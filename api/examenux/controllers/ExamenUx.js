'use strict';

/**
 * ExamenUx.js controller
 *
 * @description: A set of functions called "actions" for managing `ExamenUx`.
 */

module.exports = {

  /**
   * Retrieve examenUx records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.examenUx.search(ctx.query);
    } else {
      return strapi.services.examenUx.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a examenUx record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.examenUx.fetch(ctx.params);
  },

  /**
   * Count examenUx records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.examenUx.count(ctx.query);
  },

  /**
   * Create a/an examenUx record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.examenUx.add(ctx.request.body);
  },

  /**
   * Update a/an examenUx record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.examenUx.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an examenUx record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.examenUx.remove(ctx.params);
  }
};
