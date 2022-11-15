import Head from "next/head"

export default function Meta(props: any) {
    const title = props.title ? `${props.title} - Chakra UI` : `Chakra UI`
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="chakraui.com" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}