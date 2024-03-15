import Image from "next/image";
import Dash from "./dash/page.jsx"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Dash/>
      {/* <p>app-pageeeeeeeeeeee</p> */}
    </main>
  );
}
