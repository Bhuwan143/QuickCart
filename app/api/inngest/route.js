import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
<<<<<<< HEAD
    client: inngest,
    functions: [
        syncUserCreation,
        syncUserUpdation,
        syncUserDeletion
    ],
=======
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion
  ],
>>>>>>> a13baf14a824b31435dce64d90a29c97739c7089
});