import AppDataSource from '../data-source';
import { Categories } from '../entities/categories.entity';
import { ICategoryRequest } from './../interfaces/categories/index';


export const getCategoriesService = async(): Promise<Array<number | ICategoryRequest[]>>=> {

    const categoryRepository = AppDataSource.getRepository(Categories)

   
    const getCategories =  await categoryRepository.find()

    

    return [200, getCategories]
}