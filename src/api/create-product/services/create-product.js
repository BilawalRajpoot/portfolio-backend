'use strict';

/**
 * create-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::create-product.create-product');
