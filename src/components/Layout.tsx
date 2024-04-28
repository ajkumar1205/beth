export const Layout = (prop: { children: JSX.Element }) => {
    return (
        <html>
            <head>
                <title>BES/TH</title>
                <link rel="stylesheet" href="/public/main.css" />
                <script src="https://unpkg.com/htmx.org/dist/htmx.js"></script>
            </head>
            <body>
                {prop.children}
            </body>
        </html>
    )
}