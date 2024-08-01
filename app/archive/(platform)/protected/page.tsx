"use client";
import { useAuth, UserButton, useUser } from "@clerk/nextjs";
//import { auth, currentUser } from "@clerk/nextjs/server";

const ProtectedPage = () => {
  //const user = await currentUser();
  //const { userId } = auth();
  const { userId } = useAuth();
  const { user } = useUser();
  
  return (
    <div>
      User: {user?.fullName} <br />
      Email: {user?.emailAddresses[0].emailAddress} <br />
      User ID: {userId} <br />
      <UserButton />
    </div>
  );
};

export default ProtectedPage;
