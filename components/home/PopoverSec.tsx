import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor, Button, Flex
} from '@chakra-ui/react'

export default function PopoverSec() {
    return (
        <>
            <Popover isLazy>
                <PopoverTrigger>
                    <Flex alignItems={'center'} justifyContent='center' mb='10'>
                        <Button bg='teal.500' color='white' >Popover</Button>
                    </Flex>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore.
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </>
    )
}