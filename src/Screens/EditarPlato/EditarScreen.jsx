import React from "react";
import Footer from "../../Components/Footer";
import EditarPlato from "./EditarPlato";

const EditarPlatoPage = () => {
  return (
    <div className="min-h-screen bg-soft-sand flex flex-col justify-between">
      <main className="flex-grow container mx-auto px-4 py-8">
        <EditarPlato />
      </main>
      <Footer />
    </div>
  );
};

export default EditarPlatoPage;
