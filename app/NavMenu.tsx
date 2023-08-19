import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";
import { SignInButton, SignOutButton } from "@/components/Buttons";
import  AuthCheck  from "@/components/AuthCheck";
export default async function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={"/"} className="p-4">
        <Image
          src="/logo_2.png"
          alt="logo"
          width={280}
          height={80}
          alt="DungeonDriver Logo"
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/guides"}>Guides</Link>
        </li>
        <li>
          <Link href={"/characters"}>Characters</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  );
}
