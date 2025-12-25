import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

<<<<<<< HEAD
// inngest function to save user to databse
=======
// Inngest function to save user data to a database
>>>>>>> a13baf14a824b31435dce64d90a29c97739c7089
export const syncUserCreation = inngest.createFunction(
    {
        id: 'sync-user-from-clerk'
    },
    { event: 'clerk/user.created' },
    async ({ event }) => {
<<<<<<< HEAD
        const { id, first_name, last_name, email_addresses,
            image_url } = event.data
=======
        const { id, first_name, last_name, email_addresses, image_url } = event.data
>>>>>>> a13baf14a824b31435dce64d90a29c97739c7089
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
<<<<<<< HEAD
            imageUrl: image_url
=======
            image_url: image_url
>>>>>>> a13baf14a824b31435dce64d90a29c97739c7089
        }
        await connectDB()
        await User.create(userData)
    }
)

<<<<<<< HEAD
// Inngest function to  update user data in databse
=======
// Inngest function to update user data in the database
>>>>>>> a13baf14a824b31435dce64d90a29c97739c7089
export const syncUserUpdation = inngest.createFunction(
    {
        id: 'update-user-from-clerk'
    },
    { event: 'clerk/user.updated' },
    async ({ event }) => {
<<<<<<< HEAD
        const { id, first_name, last_name, email_addresses,
            image_url } = event.data
=======
        const { id, first_name, last_name, email_addresses, image_url } = event.data
>>>>>>> a13baf14a824b31435dce64d90a29c97739c7089
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
<<<<<<< HEAD
            imageUrl: image_url
=======
            image_url: image_url
>>>>>>> a13baf14a824b31435dce64d90a29c97739c7089
        }
        await connectDB()
        await User.findByIdAndUpdate(id, userData)
    }
)

<<<<<<< HEAD
// ingent function to delete user from database
export const syncUserDeletion = inngest.createFunction(
    {
        id: 'delete-user-with-clerk'
=======
// Inngest function to delete user data from the database
export const syncUserDeletion = inngest.createFunction(
    {
        id: 'delete-user-from-clerk'
>>>>>>> a13baf14a824b31435dce64d90a29c97739c7089
    },
    { event: 'clerk/user.deleted' },
    async ({ event }) => {
        const { id } = event.data

        await connectDB()
        await User.findByIdAndDelete(id)
<<<<<<< HEAD

    }

=======
    }
>>>>>>> a13baf14a824b31435dce64d90a29c97739c7089
)