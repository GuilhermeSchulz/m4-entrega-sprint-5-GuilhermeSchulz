import { ICategoryRequest } from './../interfaces/categories/index';
import AppDataSource from "../data-source"
import { Categories } from "../entities/categories.entity"

export const createCategory = async(categoryData: ICategoryRequest): Promise<Array<number | ICategoryRequest | {}>> => {
    

    const categoryRepository = AppDataSource.getRepository(Categories)

   
    const createCategory = categoryRepository.create(categoryData)
    await categoryRepository.save(createCategory)


    
    return [201, createCategory]

}