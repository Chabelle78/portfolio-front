import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Do you want more details ?</h1>
      <p>Please send me a request</p>

      <form action="">
        <label htmlFor="Name">
          <input type="text" placeholder="Name" id="Name" />
        </label>
      </form>
    </div>
  );
}
