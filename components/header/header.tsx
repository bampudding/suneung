import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <Link href="/" style={{textDecoration: "none", color: "black", marginTop: "32px", marginBottom: "32px", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Image width={220} height={50} src="/images/logo_top2.png" alt="수능"/>
            <div style={{fontSize: "12px", fontWeight: "bold", textAlign: "center"}}>대학수학능력시험 성적증명서 발급시스템</div>
        </Link>
    )
}