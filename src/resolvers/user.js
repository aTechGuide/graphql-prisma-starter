import getUserId from '../utils/getUserId';

const User = {
  email: {
    fragment: 'fragment userID on User { id }',
    resolve(parent, args, {request}, info) {
      const userId = getUserId(request, false)
  
      if (userId && userId === parent.id) {
        return parent.email
      } else {
        return null
      }
    }
  }
}

export { User as default }