import { Request, Response } from 'express'
import { getMockRes } from '../../types/test/mock-response'
import { signInUser } from './sign-in.service'
// schema
const signInSchema = require('../../schema/signin/SignInSchema')

const User = {
  _id: '6243571fcae8b062010a6717',
  username: 'Navid_Ansari',
  email: 'navid@gmail.com',
  fname: 'Navid',
  lname: 'Ansari',
  dob: '25-07-1990',
  password: 'NavidAnsari1!',
  role: [
    {
      label: 'User',
      value: 'USER',
      code: 100
    }
  ],
  __v: 0
}

const userObj = (override = {}) => ({
  _id: '6243571fcae8b062010a6717',
  username: 'Navid_Ansari',
  email: 'navid@gmail.com',
  fname: 'Navid',
  lname: 'Ansari',
  dob: '25-07-1990',
  password: 'NavidAnsari1!',
  role: [
    {
      label: 'User',
      value: 'USER',
      code: 100
    }
  ],
  __v: 0,
  ...override
})

describe('validate sign in service', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('return 200 when email and password is matched', async () => {
    const email: string = 'navid@gmail.com'
    const password: string = 'NavidAnsari1!'
    const mockRequest: Partial<Request> = {
      body: {
        email,
        password
      }
    }
    const mockResponse = getMockRes()
    signInSchema.findOne = await jest.fn().mockResolvedValue(User)
    const user = await signInSchema.findOne({ email })
    expect(user).toBe(User)
    await signInUser(mockRequest as Request, mockResponse as Response)
    expect(mockResponse.status).toHaveBeenCalledWith(200)
    expect(mockResponse.json).toHaveBeenCalledWith(User)
  })

  it('return 404 when user is not found', async () => {
    const email: string = 'navid@gmail.com'
    const password: string = 'NavidAnsari1!'
    const mockRequest: Partial<Request> = {
      body: {
        email,
        password
      }
    }
    const mockResponse = getMockRes()
    signInSchema.findOne = await jest.fn().mockResolvedValue(null)
    const user = await signInSchema.findOne({ email })
    expect(user).toBe(null)
    await signInUser(mockRequest as Request, mockResponse as Response)
    expect(mockResponse.status).toHaveBeenCalledWith(404)
    expect(mockResponse.end).toHaveBeenCalledWith()
  })

  it('return 401 when password is not matching', async () => {
    const email: string = 'navid@gmail.com'
    const password: string = 'NavidAnsari1'
    const mockRequest: Partial<Request> = {
      body: {
        email,
        password
      }
    }
    const mockResponse = getMockRes()
    signInSchema.findOne = await jest.fn().mockResolvedValue(userObj())
    const user = await signInSchema.findOne({ email })
    const userPassword = user.password
    expect(password).not.toBe(userPassword)
    await signInUser(mockRequest as Request, mockResponse as Response)
    expect(mockResponse.status).toHaveBeenCalledWith(401)
    expect(mockResponse.end).toHaveBeenCalledWith()
  })
})
