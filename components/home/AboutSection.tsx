import Image from 'next/image'
import {
    Flex, Spacer, Box, Text, Grid, Container, GridItem, Heading, SimpleGrid, Circle, HStack, VStack, Center, Wrap, WrapItem, List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList, Avatar
} from '@chakra-ui/react'
import girlImg from '../../public/girlonphone.jpg'
import { CalendarIcon, EmailIcon, MoonIcon, StarIcon, SunIcon, CheckCircleIcon } from '@chakra-ui/icons'
import AlertSec from './AlertSec'
import PopoverSec from './PopoverSec'
import ModalSec from './ModalSec'
import TableSec from './TableSec'
import CardSec from './CardSec'
import AccordionSec from './AccordionSec'
import TabSec from './TabSec'

export default function AboutSection() {
    return (
        <>
            <Container maxW="container.xl">
                <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                    Some Heading
                </Heading>
                <Text maxW="container.md" m='auto' textAlign={"center"} mb='10'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
                <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                    Flex
                </Heading>
                <Flex mb={10}>
                    <Box mr={10}>
                        <Flex alignItems={'center'} justifyContent={'center'}>
                            <Image
                                src={girlImg}
                                alt='girl on phone'
                                style={{
                                    borderRadius: '15px',
                                    width: '250px',
                                    height: 'auto',
                                    marginBottom: 20
                                }}
                            />
                        </Flex>
                        <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
                    </Box>
                    <Spacer />
                    <Box mr={10}>
                        <Flex alignItems={'center'} justifyContent={'center'} >
                            <Image
                                src={girlImg}
                                alt='girl on phone'
                                style={{
                                    borderRadius: '15px',
                                    width: '250px',
                                    height: 'auto',
                                    marginBottom: 20
                                }}
                            />
                        </Flex>
                        <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
                    </Box>
                    <Box>
                        <Flex alignItems={'center'} justifyContent={'center'}>
                            <Image
                                src={girlImg}
                                alt='girl on phone'
                                style={{
                                    borderRadius: '15px',
                                    width: '250px',
                                    height: 'auto',
                                    marginBottom: 20
                                }}
                            />
                        </Flex>
                        <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
                    </Box>
                </Flex>
                <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                    Grid
                </Heading>
                <Grid
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                    mb={10}
                >
                    <GridItem rowSpan={2} colSpan={1} bg='tomato' style={{
                        backgroundImage: 'url(/banner.jpg)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }} />
                    <GridItem colSpan={2} bg='papayawhip' style={{
                        backgroundImage: 'url(/girlonphone.jpg)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }} />
                    <GridItem colSpan={2} bg='papayawhip' style={{
                        backgroundImage: 'url(/man.jpg)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }} />
                    <GridItem colSpan={4} bg='purple.50' ><Text textAlign={"center"} p={10}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </Text>
                    </GridItem>
                </Grid>
                <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                    SimpleGrid, Avatar & Icons
                </Heading>
                <SimpleGrid columns={5} spacing={10} mb={10}>
                    <Box textAlign={'center'}>
                        <Flex justifyContent={'center'} pb={5}>
                            <Avatar bg='purple.100' name='Dan Abrahmov' src='../../public/women.jpg' size='xl' />
                        </Flex>
                        <Heading as='h4' size='sm' pb='3'>Heading</Heading>
                        <Text lineHeight={1.5}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                    </Box>
                    <Box textAlign={'center'}>
                        <Flex justifyContent={'center'} pb={5}>
                            <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        </Flex>
                        <Heading as='h4' size='sm' pb='3'>Heading</Heading>
                        <Text lineHeight={1.5}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                    </Box>
                    <Box textAlign={'center'}>
                        <Flex justifyContent={'center'} pb={5}>
                            <Circle size='96px' bg='purple.100'>
                                <MoonIcon fontSize={24} />
                            </Circle>
                        </Flex>
                        <Heading as='h4' size='sm' pb='3'>Heading</Heading>
                        <Text lineHeight={1.5}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                    </Box>
                    <Box textAlign={'center'}>
                        <Flex justifyContent={'center'} pb={5}>
                            <Circle size='96px' bg='purple.100'>
                                <StarIcon fontSize={24} />
                            </Circle>
                        </Flex>
                        <Heading as='h4' size='sm' pb='3'>Heading</Heading>
                        <Text lineHeight={1.5}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                    </Box>
                    <Box textAlign={'center'}>
                        <Flex justifyContent={'center'} pb={5}>
                            <Circle size='96px' bg='purple.100'>
                                <SunIcon fontSize={24} />
                            </Circle>
                        </Flex>
                        <Heading as='h4' size='sm' pb='3'>Heading</Heading>
                        <Text lineHeight={1.5}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                    </Box>
                </SimpleGrid>
                <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                    HStack
                </Heading>
                <HStack spacing={8} mb={10} alignItems='center' justifyContent={'center'}>
                    <Image
                        src={girlImg}
                        alt='girl on phone'
                        style={{
                            width: '350px',
                            height: 'auto'
                        }}
                    />

                    <Image
                        src={girlImg}
                        alt='girl on phone'
                        style={{
                            width: '350px',
                            height: 'auto'
                        }}
                    />
                    <Image
                        src={girlImg}
                        alt='girl on phone'
                        style={{
                            width: '350px',
                            height: 'auto'
                        }}
                    />
                </HStack>
                <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                    VStack
                </Heading>
                <VStack
                    spacing={4}
                    align='stretch'
                    mb='10'
                >
                    <Center h='40px' bg='purple.50'>1</Center>
                    <Center h='40px' bg='purple.50'>2</Center>
                    <Center h='40px' bg='purple.50'>3</Center>
                </VStack>
                <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                    Wrap
                </Heading>
                <Wrap spacing='30px' justify='center' mb='10'>
                    <WrapItem>
                        <Box bg='purple.50' width='300px' p='5'>
                            <Text lineHeight='1.6'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box bg='purple.50' width='300px' p='5'>
                            <Text lineHeight='1.6'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box bg='purple.50' width='300px' p='5'>
                            <Text lineHeight='1.6'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box bg='purple.50' width='300px' p='5'>
                            <Text lineHeight='1.6'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box bg='purple.50' width='300px' p='5'>
                            <Text lineHeight='1.6'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                        </Box>
                    </WrapItem>
                </Wrap>
                <AlertSec />
                <PopoverSec />
                <ModalSec />
                <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                    Tables
                </Heading>
                <TableSec />
                {/* <CardSec /> */}
                <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                    List
                </Heading>
                <Flex alignItems={'center'} justifyContent='center' mb='10'>
                    <UnorderedList mr='10' spacing={3}>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Consectetur adipiscing elit</ListItem>
                        <ListItem>Integer molestie lorem at massa</ListItem>
                        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    </UnorderedList>
                    <OrderedList mr='10' spacing={3}>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Consectetur adipiscing elit</ListItem>
                        <ListItem>Integer molestie lorem at massa</ListItem>
                        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    </OrderedList>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Assumenda, quia temporibus eveniet a libero incidunt suscipit
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                        </ListItem>
                    </List>
                </Flex>
                <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                    Accordion
                </Heading>
                <AccordionSec />
                <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                    Tabs
                </Heading>
                <TabSec />
            </Container>
        </>
    )
}