import React from "react";

export default function (props) {
  const { team } = props;
  return (
    <div className="TeamContainer">
      {team.map((member) => (
        <ul className="TeamContent">
          <li>{member.membername}</li>
          <li>{member.membermail}</li>
          <li>{member.position}</li>
        </ul>
      ))}
    </div>
  );
}
