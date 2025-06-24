import { useState } from "react";

function FormSubmitStatus() {
  const [pending, setPending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const loginForm = async (event) => {
    event.preventDefault();
    setPending(true);

    console.log("Name:", name);
    console.log("Email:", email);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setPending(false);
    alert("Form data submitted");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={loginForm}
        className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Contact Us</h2>

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold"
        >
          {pending ? "Submitting . . ." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default FormSubmitStatus;
