export const Layout = (prop: { children: JSX.Element }) => {
    return (
        <html>
            <head>
                <title>BES/TH</title>
                <link rel="stylesheet" href="./public/main.css" />
                <script src="https://unpkg.com/htmx.org@1.9.12" integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2" crossorigin="anonymous"></script>
                <script src="./public/script.js"></script>
            </head>
            <body>
                {prop.children}

            </body>
        </html>
    )
}