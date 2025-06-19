interface Props {
    top?: React.ReactNode
    title?: string
    desc?: string
    children?: React.ReactNode
    grey?: boolean
}

export default function Box({
	top, title, desc, children, grey
}: Props) {
    return (
        <div style={{
            background: grey ? "rgba(0, 0, 0, .054)" : "white",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "12px",
            border: "1px solid rgba(0, 0, 0, .2)"
        }}>
            {top &&
                <div style={{display: "flex", borderBottom: "1px solid rgba(0, 0, 0, .45)", paddingBottom: "12px"}}>
                    {top}
                </div>
            }
            {children}
        </div>
    )
}