import { IPropertyRequest } from './../interfaces/properties/index';
import * as yup from 'yup'



export const propertySerializer: yup.SchemaOf<IPropertyRequest> = yup.object().shape({
    value: yup.number().required(),
    size: yup.number().required(),
    categoryId: yup.string().required(),
    address: yup.object({
        district: yup.string().required(),
        zipCode: yup.string().required(),
        number: yup.string().notRequired(),
        city: yup.string().required(),
        state: yup.string().required()
    })
})