import Link from "next/link"

interface Props {
    title?: string
    href?: string
    onClick?: () => void
}

export default function Button({
	title, href, onClick
}: Props) {
    if (href) {
    	return (
        	<Link href={href || ""} target="_blank" style={{
                background: "#003355",
                fontSize: "14px",
                borderRadius: "4px",
                padding: "8px",
                color: "white",
                border: 0,
                textDecoration: "none",
                cursor: "pointer"
            }}>
                {title}
        	</Link>
    	)
    } else {
        return (
            <button onClick={onClick} style={{
                background: "#003355",
                fontSize: "14px",
                borderRadius: "4px",
                padding: "8px",
                color: "white",
                border: 0,
                textDecoration: "none",
                cursor: "pointer"
            }}>
                {title}
            </button>
        )
    }
}