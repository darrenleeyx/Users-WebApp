export default function UserCard({ first_name, last_name, email, avatar }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "space-between",
        gap: "2rem",
      }}
    >
      <div>
        <h1>
          {first_name} {last_name}
        </h1>
        <p>{email}</p>
      </div>

      <img src={avatar} alt={`Photo of ${first_name} ${last_name}`} />
    </div>
  );
}
