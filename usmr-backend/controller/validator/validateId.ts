import { InputError } from '../../lib/errors'

export const validateId = async (id: string) => {
  console.log(id)
  if (!id) {
    throw new InputError('missing id in request')
  }
}
