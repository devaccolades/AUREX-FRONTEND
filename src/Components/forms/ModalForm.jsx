"use client";

export default function ModalForm() {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border p-2 rounded"
        placeholder="Full Name"
        required
      />
      <input
        className="border p-2 rounded"
        placeholder="Email"
        type="email"
        required
      />
      <input
        className="border p-2 rounded"
        placeholder="Phone"
        required
      />
      <textarea
        className="border p-2 rounded"
        placeholder="Message"
        rows={3}
      />

      <button
        type="submit"
        className="bg-black text-white p-2 rounded mt-2"
      >
        Submit
      </button>
    </form>
  );
}
