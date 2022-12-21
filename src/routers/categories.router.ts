import { verifyIdCategoryMiddleware } from './../middlewares/verifyIdCategory.middleware';
import { verifyCategory } from './../middlewares/verifyCategories.middleware';
import { verifyAdmin } from './../middlewares/verifyAdmin.middleware';
import { verifyToken } from './../middlewares/verifyToken.middleware';
import { createCategoryController, getCategoriesController, getPropertiesByCategoryIdController } from './../controllers/categories.controller';
import { Router } from 'express';

const categoriesRoutes = Router()

categoriesRoutes.post('',verifyToken, verifyAdmin,verifyCategory,  createCategoryController)
categoriesRoutes.get('', getCategoriesController)
categoriesRoutes.get('/:id/properties',verifyIdCategoryMiddleware, getPropertiesByCategoryIdController )

export default categoriesRoutes