import React, { useState, useEffect } from "react";
import Navbar from "../../src/components/NavBar/NavBar";
import SubscriptionComponent from "../../src/components/Subscription/SubscriptionComponent";
import CustomerPortalComponent from "../../src/components/Subscription/CustomerPortalComponent";
import { getSubscriptionStatus } from "../../src/axiosRequest/api/subscription";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";

const CreateImage: React.FC = () => {
  const [status, setStatus] = useState<boolean | null>(null);

  useEffect(() => {
    const getSubscription = async () => {
      try {
        // Send Get request to /api/subscription/get-subscription-status
        const response = await getSubscriptionStatus();
        setStatus(response.data.subscription_status);
      } catch (error) {
        console.error({ message: error });
        setStatus(false);
      }
    };
    getSubscription();
  }, []);

  return (
    <>
      <Navbar isFixed={false} color="#000000" baseLine={NavBarStyles}/>
      {status ? <CustomerPortalComponent /> : <SubscriptionComponent />}
    </>
  );
};

export default CreateImage;
