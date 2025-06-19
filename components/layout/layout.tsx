import Footer from "../footer/footer"
import Header from "../header/header"

interface Props {
    children: React.ReactNode
}

export default function Layout({
	children
}: Props) {
    return (
        <body style={{
            margin: "0 auto",
            width: "1080px",
            height: "880px",
            background: "url(/images/bg_topGnb.png), url(/images/bg_bottom2.png)",
            backgroundPosition: "left top, center bottom",
            backgroundRepeat: "repeat-x, repeat-x"
        }}>
            <Header/>
            {children}
            <Footer/>
        </body>
    )
}