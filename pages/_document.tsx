import {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang="pt-br">
			<Head>
				<link rel="icon" type="image/png" href="/img/theme/favicon.png"/>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
				<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
				<Script src={"https://kit.fontawesome.com/b24920c752.js"} crossOrigin="anonymous" strategy={'beforeInteractive'}></Script>
			</Head>
			<body>
			<Main/>
			<NextScript/>
			</body>
		</Html>
	)
}