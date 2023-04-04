import React from "react";

export default function (props) {
  const { member, handleChange, handleSubmit } = props;
  return (
    <div className="FormContainer">
      <div className="FormContent">
        <form onSubmit={(event) => handleSubmit(event)}>
          <label>
            Member Name:
            <input
              type="text"
              name="membername"
              value={member.membername}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <br />
          <label>
            Member Mail:
            <input
              type="text"
              name="membermail"
              value={member.membermail}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <br />
          <label>
            Position:
            <input
              type="text"
              name="position"
              value={member.position}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <br />
          <button>Submit!</button>
        </form>
      </div>
    </div>
  );
}
