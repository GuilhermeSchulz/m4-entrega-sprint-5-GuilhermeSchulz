import { IUserRequest, IUser, IUserUpdate } from './../interfaces/users/index';
import * as yup from 'yup'
import { SchemaOf } from 'yup'


export const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup.string().required(),
    isAdm: yup.boolean().required()
})
export const userWithoutPasswordSerializer: SchemaOf<IUser> = yup.object().shape({
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    isAdm: yup.boolean().notRequired(),
    isActive: yup.boolean().notRequired(),
    id: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired()
})
export const updateUserSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
    email: yup.string().email(),
    name: yup.string(),
    password: yup.string(),
});

export const allUsersWithoutPassword = yup.array(userWithoutPasswordSerializer)