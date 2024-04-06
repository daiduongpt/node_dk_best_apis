import { feathers, type Id } from '@feathersjs/feathers'

class UserInfo {
    get(id: Id) {
        return {
            id,
            text: `This is the ${id} message!`
        }
    }
}

type ServiceTypes = {
    // Add services path to type mapping here
    messages: UserInfo
}

const app = feathers<ServiceTypes>()

// Register a service instance on the app
app.use('messages', new UserInfo())

// Get the service and call the service method with the correct types
const messages = app.service('messages')