export default function Accounts() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="styled-header">Accounts Page</h1>
      <div>
        <a href="./accounts/admin"><button className="next-page-button">Go to Admin</button></a>
      </div>
      </main>
    );
  }