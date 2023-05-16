'use strict';

/**
 * create-store service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::create-store.create-store');
