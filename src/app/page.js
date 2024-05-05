import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./component/";

export default function Home() {
  return (
    <div className="vh-100 bg-primary">
      <Navbar />
    </div>
  );
}
