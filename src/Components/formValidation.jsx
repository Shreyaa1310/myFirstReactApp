import React, { useState } from "react";


function formValidation() {
  

  return (
    <div className="d-flex">
      <form>
        <div>
          <label>Email</label>
          <input
            type="text"
            id=""
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {errors.email && <p style={{ color: "red" }}></p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            id=""
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {errors.password && <p style={{ color: "red" }}></p>}
        </div>
      </form>
    </div>
  );
}

export default formValidation;
