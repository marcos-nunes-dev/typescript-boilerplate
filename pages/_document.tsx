import Document, {
    DocumentContext,
    Head,
    Main,
    NextScript,
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <html>
                <Head>
                    <link
                        href='https://fonts.googleapis.com/css?family=Nunito+Sans:400,500,600,700'
                        rel='stylesheet'
                    />
                    <link rel='stylesheet' type='text/css' href='/global.css' />
                    <link
                        rel='stylesheet'
                        type='text/css'
                        href='/normalize.css'
                    />
                </Head>
                <Main />
                <NextScript />
            </html>
        );
    }
}
