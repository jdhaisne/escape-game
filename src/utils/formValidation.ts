import {useForm} from 'react-hook-form'

// const {watch} = useForm()

export const mail_validation= {
    name: 'mail',
    validation: {
        required: {
            value: true,
            message: 'required'
        },
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'need a valid mail'
        }
    }
}

export const password_validation_login = {
    name: 'passwordLogin',
    validation: {
        required: {
            value: true,
        message: 'required'
        },
    }
}

export const password_validation = {
    name: 'password',
    validation: {
        required: {
            value: true,
        message: 'required'
        },
        minLength: {
            value: 6,
            message: 'Must be at least 6 characters long.'
        },
        maxLength: {
            value: 20,
            message: "Must be at max 20 characters long."
        }
    }
}

// export const confirm_password_validation = {
//     name: 'confirmPassword',
//     validation: {
//         required: {
//             value: true,
//         message: 'required'
//         },
//         minLength: {
//             value: 6,
//             message: 'Must be at least 6 characters long.'
//         },
//         maxLength: {
//             value: 20,
//             message: "Must be at max 20 characters long."
//         },
//         validate: {
//             value: (val: string) => {
//                 if(watch('password') != val)
//                     return false
//                 return true
//             },
//             message: 'password does not macthes'
//         }
//     }
// }



export const name_validation = {
    // name: 'firstName',
    validation: {
        required: {
            value: true,
            message: 'required'
        },
        minLength: {
            value: 2,
            message: 'Must be at least 2 characters long.'
        },
        maxLength: {
            value: 50,
            message: "Must be at max 50 characters long."
        }
    }
}

// export const last_name_validation = {
//     name: 'lastName',
//     validation: {
//         required: {
//             value: true,
//             message: 'required'
//         },
//         // minLength: {
//         //     value: 2,
//         //     message: 'Must be at least 2 characters long.'
//         // },
//         // maxLength: {
//         //     value: 50,
//         //     message: "Must be at max 50 characters long."
//         // }
//     }
// }