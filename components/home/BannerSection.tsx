import { Flex, Spacer, Box, Text, Grid, Heading } from '@chakra-ui/react'

export default function BannerSection() {
    return (
        <>
            <Box
                mb={10}
                h={{ base: 400, md: 400, xl: 500 }}
                style={{
                    backgroundImage: 'url(/banner.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    position: 'relative'
                }}
            ><Heading pos='absolute' top='50%' left='45%' color='white' textAlign='center'>Welcome</Heading></Box>
        </>
    )
}