import Head from 'next/head';

import { Box } from 'components/Box';

export default function Home() {
    return (
        <Box>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Box as='main'>Hello World</Box>
        </Box>
    );
}
