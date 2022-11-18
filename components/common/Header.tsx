import React from 'react'
import { Box, Container, Flex, Image, Link, useTheme } from "@chakra-ui/react"
import Nav from './Nav'

export default function Header(props: any) {
    const theme = useTheme()

    return (
        <Box position="fixed" zIndex={theme.zIndices.banner} bg="white" w="full" shadow={"md"}>
            <Container maxW="container.xl">
                <Flex justify="space-between" py={3}>
                    <Nav />
                </Flex>
            </Container>
        </Box>
    )
}